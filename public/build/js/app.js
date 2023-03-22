let paso=1;const pasoInicial=1,pasoFinal=3;function iniciarApp(){mostrarSeccion(),tabs(),botonesPaginador(),paginaSiguiente(),paginaAnterior(),consultarAPI()}function mostrarSeccion(){const t=document.querySelector(".mostrar");t&&t.classList.remove("mostrar");const e="#paso-"+paso;document.querySelector(e).classList.add("mostrar");const o=document.querySelector(".actual");o&&o.classList.remove("actual");document.querySelector(`[data-paso="${paso}"]`).classList.add("actual")}function tabs(){document.querySelectorAll(".tabs button").forEach(t=>{t.addEventListener("click",(function(t){paso=parseInt(t.target.dataset.paso),mostrarSeccion(),botonesPaginador()}))})}function botonesPaginador(){const t=document.querySelector("#anterior"),e=document.querySelector("#siguiente");1===paso?(t.classList.add("ocultar"),e.classList.remove("ocultar")):3===paso?(t.classList.remove("ocultar"),e.classList.add("ocultar")):(t.classList.remove("ocultar"),e.classList.remove("ocultar")),mostrarSeccion()}function paginaSiguiente(){document.querySelector("#anterior").addEventListener("click",(function(){paso<=1||(paso--,botonesPaginador())}))}function paginaAnterior(){document.querySelector("#siguiente").addEventListener("click",(function(){paso>=3||(paso++,botonesPaginador())}))}async function consultarAPI(){try{const t="http://localhost:3000/api/servicios",e=await fetch(t);mostrarServicios(await e.json())}catch(t){}}function mostrarServicios(t){t.forEach(t=>{const{id:e,nombre:o,precio:a}=t,c=document.createElement("P");c.classList.add("nombre-servicio"),c.textContent=o;const n=document.createElement("P");n.classList.add("precio-servicio"),n.textContent="$"+a;const s=document.createElement("DIV");s.classList.add("servicio"),s.dataset.idServicio=e,s.appendChild(c),s.appendChild(n),document.querySelector("#servicios").appendChild(s)})}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));