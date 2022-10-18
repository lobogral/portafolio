import { recargarSidenav } from './Sidenav.js';
import { recargarTitulo } from './Titulo.js';
import { listaPresentaciones } from '../Assets/ListaPresentaciones.js';
import { strPresentacion } from '../Assets/Idioma.js';


export function recargarPresentacion(){

  var texto = ''

  // Agrego el css
  texto += `   
    <style>
      .slider, .slides {
        height: 100% !important;
        right: 0px !important;
        left: 300px !important;
        position: fixed !important;
      }
      #descripcion-img{
        opacity: 0.2 !important;
      }
    </style>
  `

  // Agrego el html
  texto += `
    <main>  
    ${recargarTitulo(strPresentacion)}
      <div class='slider'>
        <ul class='slides'>
  `

  listaPresentaciones.forEach(presentacion => {
    texto += `
          <li>
            <img id='descripcion-img' src=${presentacion.url}>
            <div class='caption center-align'>
              <h3 class='black-text'>${presentacion.pregunta}</h3>
              <h5 class='grey-text text-darken-4'>${presentacion.respuesta}</h5>
            </div>
          </li>
    `
  })  

  texto += `
        </ul>
      </div>
    </main>
  `     

  texto += recargarSidenav()

  document.getElementById('Cuerpo').innerHTML = texto

  var elems = document.querySelectorAll('.slider');
  M.Slider.init(elems, {'indicators':false});
}