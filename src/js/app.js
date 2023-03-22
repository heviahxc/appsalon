let paso = 1;
const pasoInicial = 1;
const pasoFinal = 3;

const cita = {
    nombre:'',
    fecha:'',
    hora:'',
    servicios:[]
}
 
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp(); 
});
 
function iniciarApp() {
    mostrarSeccion();
    tabs(); //Cambia la secion cunado se presionan los tabs
    botonesPaginador();
    paginaSiguiente();
    paginaAnterior();

    consultarAPI();
}
 
function mostrarSeccion() {

    const seccionAnterior = document.querySelector('.mostrar');
    if (seccionAnterior) {
        seccionAnterior.classList.remove('mostrar');
    }
    // Seleccionar la seccion con el paso  
    const pasoSelector = `#paso-${paso}`;
    const seccion = document.querySelector(pasoSelector);    
    seccion.classList.add('mostrar');     
    
    const tabAnterior = document.querySelector('.actual');
    if (tabAnterior) {
        tabAnterior.classList.remove('actual');
    }

    const tab = document.querySelector(`[data-paso="${paso}"]`);
    tab.classList.add('actual');
}
 
function tabs() {
    const botones = document.querySelectorAll('.tabs button');
 
    botones.forEach(boton => {
        boton.addEventListener('click', function (e) { 
            paso = parseInt(e.target.dataset.paso);
            
            mostrarSeccion();
            botonesPaginador();
            
        })
    });
}

function botonesPaginador(){
    const paginaAnterior = document.querySelector('#anterior');
    const paginaSiguiente = document.querySelector('#siguiente');

    if (paso === 1) {
        paginaAnterior.classList.add('ocultar');
        paginaSiguiente.classList.remove('ocultar');
    } else if(paso === 3){
        paginaAnterior.classList.remove('ocultar');
        paginaSiguiente.classList.add('ocultar');
    }else{
        paginaAnterior.classList.remove('ocultar');
        paginaSiguiente.classList.remove('ocultar');
    }

    mostrarSeccion();
}

function paginaSiguiente(){
    const paginaAnterior = document.querySelector('#anterior');
    paginaAnterior.addEventListener('click', function(){
        if(paso <= pasoInicial) return;
        paso--;
        botonesPaginador();
    })
}

function paginaAnterior(){
    const paginaSiguiente = document.querySelector('#siguiente');
    paginaSiguiente.addEventListener('click', function(){
        if(paso >= pasoFinal) return;
        paso++;
        botonesPaginador();
    })
}

async function consultarAPI(){

    try {
        const url = 'http://localhost:3000/api/servicios';
        const resultado = await fetch(url);
        const servicios = await resultado.json();


        mostrarServicios(servicios);

    } catch (error) {
        
    }
}

function mostrarServicios(servicios){
        servicios.forEach(servicio =>{
            const {id, nombre, precio} = servicio;

            const nombreServicio = document.createElement('P');
            nombreServicio.classList.add('nombre-servicio');
            nombreServicio.textContent = nombre;

            const precioServicio = document.createElement('P');
            precioServicio.classList.add('precio-servicio');
            precioServicio.textContent = `$${precio}`;

            const servicioDiv = document.createElement('DIV');
            servicioDiv.classList.add('servicio');
            servicioDiv.dataset.idServicio = id;
            servicioDiv.onclick = function(){
                seleccionarServicio(servicio);
            };

            servicioDiv.appendChild(nombreServicio);
            servicioDiv.appendChild(precioServicio);

            document.querySelector('#servicios').appendChild(servicioDiv);

        })
}

function seleccionarServicio(servicio){
    const {id} = servicio;
    const {servicios} = cita;
    //Identificar el elemento que se da click
    const divServicio = document.querySelector(`[data-id-servicio="${id}"]`);
    //Comprobar si un servicio ya fue agregado o quitarlo

    if (servicios.some(agregado => agregado.id === id)) {
        //Eliminar
        cita.servicios = servicios.filter(agregado => agregado.id != id);
        divServicio.classList.remove('seleccionado')
    }else{
        //Agregar
        cita.servicios = [...servicios, servicio];
        divServicio.classList.add('seleccionado')
    }

   

    
    
}