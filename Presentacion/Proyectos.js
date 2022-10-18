import { recargarSidenav } from './Sidenav.js';
import { recargarTitulo } from './Titulo.js';
import { strProyectos } from '../Assets/Idioma.js';
import { jsonProyectos } from '../Providers/obtenerJsonProyectos.js';

export function recargarProyectos(){ 
    
    // Agrego el css
    var texto =
        "<style>"
      + "  #proyectos-card {"
      + "    margin-top: 24px;"
      + "    margin-bottom: 28px;"
      + "  }"
      + "</style>"
    
    // Agrego el HTML
    texto +=  
        "<main>"
      + recargarTitulo(strProyectos)
      + "  <div class='row'>"
      + "    <div class='col s12 m12 l12'>"
    
    if(JSON.stringify(jsonProyectos) !== '{}'){
      jsonProyectos.forEach(element => {
        texto +=   
          "      <div id='proyectos-card' class='card grey lighten-1'>"
        + "        <div class='card-content black-text'>"
        + "          <span class='card-title'>" + element.nombre + "</span>"
        + "          <p>" + element.descripcion + "</p>"
        + "        </div>"
        + "        <a href='" + element.url + "' class='btn-floating halfway-fab waves-effect waves-light grey darken-2'>"
        + "          <i class='material-icons'>link</i>"
        + "        </a>"
        + "      </div>" 
      }); 
    }     
    
    texto +=
        "    </div>"
      + "  </div>"
      + "</main>"

    texto += recargarSidenav()
    
    document.getElementById("Cuerpo").innerHTML = texto
}