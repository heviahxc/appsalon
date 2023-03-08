let paso = 1;
const pasoInicial = 1;
const pasoFinal = 3;
 
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp(); 
});
 
function iniciarApp() {
    mostrarSeccion();
    tabs(); //Cambia la secion cunado se presionan los tabs
    botonesPaginador();
    paginaSiguiente();
    paginaAnterior();
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