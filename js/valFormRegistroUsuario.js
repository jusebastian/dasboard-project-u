$(document).on('ready', function(){
  
  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var letra = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  var numero = /^([0-9])*$/;

  $("#submitThree").click(function(){

    var nombreCompleto = $("#name2").val();
    var email = $("#email2").val();
    var password = $("#password2").val();
    var repassword = $("#repassword2").val();
    var telefono = $("#telefono2").val();
    var empresa = $("#empresa2").val();
    var persona = $("#persona2").val();
    

    if(nombreCompleto == '' || !letra.test(nombreCompleto)){
      $("#mensaje4").fadeIn("slow");
      $("#mensaje4").slideToggle("fast");
      return false;  
    }else{
      if(email == '' || !expre.test(email)){
        $("#mensaje4").fadeOut();
        $("#mensaje5").fadeIn("slow");
        $("#mensaje5").slideToggle("fast");
        return false;  
      }else{
        if(password == ''){
          $("#mensaje5").fadeOut();
          $("#mensaje6").fadeIn("slow");
          $("#mensaje6").slideToggle("fast");
          return false;
        }else{
          if(repassword == ''){
            $("#mensaje6").fadeOut();
            $("#mensaje7").fadeIn("slow");
            $("#mensaje7").slideToggle("fast");
            return false;
          }else{
            if(telefono == '' || !numero.test(telefono)){
              $("#mensaje7").fadeOut();
              $("#mensaje8").fadeIn("slow");
              $("#mensaje8").slideToggle("fast");
              return false;
            }
            else{
              if(empresa == 0){
                $("#mensaje8").fadeOut();
                $("#mensaje9").fadeIn("slow");
                $("#mensaje9").slideToggle("fast");
                return false;
              }else{
                if(persona == 0){
                  $("#mensaje9").fadeOut();
                  $("#mensaje10").fadeIn("slow");
                  $("#mensaje10").slideToggle("fast");
                  return false;
                }else{
                  $("#mensaje10").fadeOut();
                  ajaxPost(nombreCompleto, email, password,telefono, empresa, persona);
                }
                
              }
            }
          }
          
        }
      }
    }

  });

  //-------------------------------------------------------

  //--Funciòn AjaxPost
  
  function ajaxPost(nombreCompleto, email, password,telefono, empresa, persona) {

    var parametros = {

      'nombre' : nombreCompleto,
      'email' :email,
      'password' : password,
      'empresa' : empresa,
      'rol' : persona,
      'telefono' : telefono,
      'estado' : true,
    };

    console.log(JSON.stringify(parametros));

    //var formData = new FormData(parametros);


    $.ajax({
      type: 'POST',
      url: '',
      data: JSON.stringify(parametros),
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        console.log("datos almacenados");
        console.log(data);
      },
      error: function (data) {
        console.log("Error al almacenar los datos");
        console.log(data);
      },
      /*contentType: "application/json",*/
      /*dataType: 'json',*/
   });


    
  }//Funcion AjaxPost

  

});

