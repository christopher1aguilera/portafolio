//mostrar y esconder partes de la pagina con botones
$(document).ready(function(){
    $(".ventana").click(function(){
      $(".formulario.collapse").collapse('toggle');//mostrar y esconder formulario
    });
  
    $(".mostrar2").click(function(){
      $(".form-group.collapse").collapse('toggle');//mostrar y  esconder texto para comentar
    });
  
    $(".mostrar1").click(function(){
      $(".form-group.collapse").collapse('hide');//esconder texto para comentar al enviar comentario
    });
  });