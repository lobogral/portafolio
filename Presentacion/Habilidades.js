import { recargarSidenav } from './Sidenav.js';
import { listasHabilidades } from '../Assets/ListasHabilidades.js';
import { strHabilidades } from '../Assets/Idioma.js';
import { recargarTitulo } from './Titulo.js';

export function recargarHabilidades(){ 

  // Agrego el css
  var texto =
      "<style>"
    + "  #habilidades-texto {"
    + "    font-size:1.8vw;"
    + "  }"
    + "  #habilidades-card-content {"
    + "    padding-top: 24px;"
    + "    padding-bottom: 24px;"
    + "    text-align: center;"
    + "  }"
    + "</style>"

  // Agrego el HTML
  texto +=    
      "<main>"
      + recargarTitulo(strHabilidades)

  listasHabilidades.forEach(listaHabilidades => {
    texto +=
        "  <div class='row'>"
      + "    <div class='col s12 m12 l12'>"
      + "      <h4>" + listaHabilidades.nombre+ "</h4>"
      + "    </div>"
      + "  </div>"

      + "  <div class='row'>"

    listaHabilidades.habilidades.forEach(habilidad => {
      texto +=
          "    <div class='col s3 m2 l2'>"
        + "      <div class='card'>"
        + "        <div class='card-image grey lighten-3'>"
        + "          <img class='activator' src='" + habilidad.url + "' height='200'>"
        + "        </div>"
        + "        <div id='habilidades-card-content'>"
        + "          <span id='habilidades-texto' class='card-title center-align grey-text text-darken-4'>" + habilidad.nombre + "</span>"
        + "        </div>"
        + "      </div>"
        + "    </div>"
    })
  })

  texto +=
      "  </div>"
    + "</main>"
           

  texto += recargarSidenav()

  document.getElementById("Cuerpo").innerHTML = texto
}