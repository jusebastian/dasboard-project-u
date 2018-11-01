$(document).on('ready', function(){

  //Expresiones regulares
  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  //Funciòn envio formulario
  $("#submitTwo").click(function(){

    //Vadrriables definidas o inicializadas
    var recoveryEmail = $("#recovery-email").val();

    if(recoveryEmail == ''){
      $("#alerta7").fadeIn("slow");
      $("#alerta7").slideToggle("fast");
      return false;
    }else if((!expre.test(recoveryEmail))){
      $("#alerta8").fadeIn("slow");
      $("#alerta8").slideToggle("fast");
      $("#recovery-email").val('');
      return false;
    }else {
      $("#mensaje3").fadeOut();
      //Ejecutando Función
      ajaxPost(recoveryEmail);
      
    }
    limpiarCampos();
    
  });
 //Limpiar campos
 function limpiarCampos(){
  $("#recovery-email").val('');
 }

  //-------------------------------------------------------

  //--Funcio AjaxPost
  
  function ajaxPost() {

    var parametros = {
      'recoveryEmail': recoveryEmail
    }

    $.ajax({
      type: 'GET',
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

    });//$.ajax
  }

});