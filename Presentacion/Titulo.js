export function recargarTitulo(strTitulo){ 

  var titulo = ""

  // Agrego el css
  titulo +=
      "<style>"
    + "  #titulo-texto {"
    + "    margin: 2.37rem 0 2.37rem 0;"
    + "  }" 
    + "  #titulo-row {"
    + "    margin-bottom: 0px;"
    + "  }"
    + "</style>"
    
  // Agrego el HTML
  titulo +=
      "<div id='titulo-row' class='row grey lighten-3'>"
    + "  <div class='col s12 m12 l12'>"
    + "    <h2 id='titulo-texto'>" + strTitulo + "</h2>"
    + "  </div>"
    + "</div>"
     
  return titulo 
}