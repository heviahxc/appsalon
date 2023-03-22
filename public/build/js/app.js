let paso=1;const pasoInicial=1,pasoFinal=3,cita={nombre:"",fecha:"",hora:"",servicios:[]};function iniciarApp(){mostrarSeccion(),tabs(),botonesPaginador(),paginaSiguiente(),paginaAnterior(),consultarAPI()}function mostrarSeccion(){const e=document.querySelector(".mostrar");e&&e.classList.remove("mostrar");const o="#paso-"+paso;document.querySelector(o).classList.add("mostrar");const t=document.querySelector(".actual");t&&t.classList.remove("actual");document.querySelector(`[data-paso="${paso}"]`).classList.add("actual")}function tabs(){document.querySelectorAll(".tabs button").forEach(e=>{e.addEventListener("click",(function(e){paso=parseInt(e.target.dataset.paso),mostrarSeccion(),botonesPaginador()}))})}function botonesPaginador(){const e=document.querySelector("#anterior"),o=document.querySelector("#siguiente");1===paso?(e.classList.add("ocultar"),o.classList.remove("ocultar")):3===paso?(e.classList.remove("ocultar"),o.classList.add("ocultar")):(e.classList.remove("ocultar"),o.classList.remove("ocultar")),mostrarSeccion()}function paginaSiguiente(){document.querySelector("#anterior").addEventListener("click",(function(){paso<=1||(paso--,botonesPaginador())}))}function paginaAnterior(){document.querySelector("#siguiente").addEventListener("click",(function(){paso>=3||(paso++,botonesPaginador())}))}async function consultarAPI(){try{const e="http://localhost:3000/api/servicios",o=await fetch(e);mostrarServicios(await o.json())}catch(e){}}function mostrarServicios(e){e.forEach(e=>{const{id:o,nombre:t,precio:c}=e,a=document.createElement("P");a.classList.add("nombre-servicio"),a.textContent=t;const i=document.createElement("P");i.classList.add("precio-servicio"),i.textContent="$"+c;const s=document.createElement("DIV");s.classList.add("servicio"),s.dataset.idServicio=o,s.onclick=function(){seleccionarServicio(e)},s.appendChild(a),s.appendChild(i),document.querySelector("#servicios").appendChild(s)})}function seleccionarServicio(e){const{id:o}=e,{servicios:t}=cita,c=document.querySelector(`[data-id-servicio="${o}"]`);t.some(e=>e.id===o)?(cita.servicios=t.filter(e=>e.id!=o),c.classList.remove("seleccionado")):(cita.servicios=[...t,e],c.classList.add("seleccionado"))}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));