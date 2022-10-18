import {recargarProyectos} from './Presentacion/Proyectos.js';
import {recargarHabilidades} from './Presentacion/Habilidades.js';
import {recargarPresentacion} from './Presentacion/Presentacion.js';
import {recargarContacto} from './Presentacion/Contacto.js';
import {obtenerJsonProyectos } from './Providers/obtenerJsonProyectos.js';

export function enrutar(module){
  module.recargarHabilidades = recargarHabilidades;
  module.recargarProyectos = recargarProyectos;
  module.recargarPresentacion = recargarPresentacion;
  module.recargarContacto = recargarContacto;
}

export function inicializar(){
  recargarPresentacion()
  obtenerJsonProyectos()
}

