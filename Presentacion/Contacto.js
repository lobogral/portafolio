import { recargarSidenav } from './Sidenav.js';
import { recargarTitulo } from './Titulo.js';
import { strContacto } from '../Assets/Idioma.js';
import { listaContactos } from '../Assets/ListaContactos.js';

export function recargarContacto(){ 

  var texto = ''

  // Agrego el css
  texto += ` 
    <style>
      .collection{
        margin: 0px;
      }
    </style>
  `

  // Agrego el html
  texto += `
    <main> 
      ${recargarTitulo(strContacto)}
      <ul class='collection'>
  `

  listaContactos.forEach(contacto => {
    texto += `
        <li class='collection-item'>
          <div><h5>${contacto.nombre}<a href=${contacto.url} class='secondary-content'>
            <i class='material-icons grey-text text-darken-3'>link</i></h5>
          </a></div>
        </li>
    ` 
  })

  texto += `
      </ul>
    </main>
  `     

  texto += recargarSidenav()

  document.getElementById('Cuerpo').innerHTML = texto
}