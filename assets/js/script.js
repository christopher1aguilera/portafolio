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

  //Pagina saludando al hacer click en mi nombre
$(document).ready(function(){
    $(".nombre").click(function(){
      alert("Hola, mucho gusto")
    });
  });

  //navegador movil al bajar por la pagina
$(document).ready(function(){
    $('body').scrollspy({target: ".mainnavbar", offset: 50});   
    });
   
    //ventana emergente confirmando comentario enviado
$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });