$(document).on('ready',function(){
  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var letra = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
  var nume = /^([0-9])*$/;
  
  $("#editar").click(function(e){
    e.preventDefault();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var correo = $("#correo").val();
    var empresa = $("#empresa").val();
    var telefono = $("#telefono").val();
    var constraseña = $("#constraseña").val();
    var recontraseña = $("#recontraseña").val();
    var file = $("#file").val();

    if(nombre == "" || !letra.test(nombre)){
      $("#mensaje1").fadeIn("slow");
      $("#mensaje1").slideToggle("fast");
      return false;  
    }else{
      if(apellido == ""){
        $("#mensaje1").fadeOut();
        $("#mensaje2").fadeIn("slow");
        $("#mensaje2").slideToggle("fast");
        return false; 
      }else{
        if(correo == "" || !expre.test(correo) ){
          $("#mensaje2").fadeOut();
          $("#mensaje3").fadeIn("slow");
          $("#mensaje3").slideToggle("fast");
          return false; 
        }else{
          if(empresa == "" || !letra.test(empresa)){
            $("#mensaje3").fadeOut();
            $("#mensaje4").fadeIn("slow");
            $("#mensaje4").slideToggle("fast");
            return false; 
          }else{
            if(telefono == "" || !nume.test(telefono)) {
              $("#mensaje4").fadeOut();
              $("#mensaje5").fadeIn("slow");
              $("#mensaje5").slideToggle("fast");
              return false; 
            }else{
              if(constraseña == ""){
                $("#mensaje5").fadeOut();
                $("#mensaje6").fadeIn("slow");
                $("#mensaje6").slideToggle("fast");
                return false; 
              }else{
                if(recontraseña == ""){
                  $("#mensaje6").fadeOut();
                  $("#mensaje7").fadeIn("slow");
                  $("#mensaje7").slideToggle("fast");
                  return false; 
                }else{
                  if(file == 0){
                    $("#mensaje7").fadeOut();
                    $("#mensaje8").fadeIn("slow");
                    $("#mensaje8").slideToggle("fast");
                    return false; 
                  }else{
                    $("#mensaje8").fadeOut();
                    return false;
                  }
                  
                }
              }
            }
          }

        }
      }
    }

  });

});
