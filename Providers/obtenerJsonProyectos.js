import { URLGithub } from "../Assets/URLGithub.js"

var jsonProyectos = {}

export function obtenerJsonProyectos(){
  fetch(URLGithub)
    .then(response => {
      return response.json()
    }).then(json => {
      jsonProyectos = json.map(element => {
        return {'nombre': element.name, 
                'descripcion' : element.description,
                'url' : element.html_url}
      });
    })
}

export {jsonProyectos}
