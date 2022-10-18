import { caracteristicasPersona } from '../Assets/CaracteristicasPersona.js'
import { strPresentacion, strProyectos, strHabilidades, strContacto } from '../Assets/Idioma.js'

export function recargarSidenav(){

  var texto = `
    <ul id='slide-out' class='sidenav sidenav-fixed'>
      <li>
        <div class='user-view grey darken-1'>
          <img class='circle' src=${caracteristicasPersona.imagen}>
          <span class='white-text name'>${caracteristicasPersona.nombre}</span>
          <span class='white-text email'>${caracteristicasPersona.correo}</span>
        </div>
      </li>
      <li><a href='#!' onclick='module.recargarPresentacion()'>
        <i class='material-icons'>person</i>${strPresentacion}
      </a></li>
      <li><a href='#!' onclick='module.recargarProyectos()'>
        <i class='material-icons'>view_quilt</i>${strProyectos}
      </a></li>
      <li><a href='#!' onclick='module.recargarHabilidades()'>
        <i class='material-icons'>equalizer</i>${strHabilidades}
      </a></li>
      <li><a href='#!' onclick='module.recargarContacto()'>
        <i class='material-icons'>location_on</i>${strContacto}
      </a></li>
    </ul>
    <style>
      .sidenav.sidenav-fixed {
        transform: translateX(0) !important;
      }
      .sidenav .user-view {
        padding: 32px 32px 0;
      }
      main {
        padding-left: 300px;
      }
    </style>
  `
    
  return texto
}

