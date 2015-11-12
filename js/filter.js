/*filtro del input*/
$(document).ready(function(){
	$("#buscar").click(function(e) {
      e.preventDefault();
      var texto = $("#texto").val();
      var filtro = $(texto).filter(val());

      var resultado = $("<div></div>");
    
      $(".resultado").append(resultado);

  })
});