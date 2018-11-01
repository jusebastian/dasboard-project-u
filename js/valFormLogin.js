$(document).on('ready', function(){

  //Expresiones Regulares
  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  //

  $("#submit").click(function(){

    //e.preventDefault();

    var email = $("#email").val();
    var password = $("#password").val(); 
    var checkbox = $("#checkbox").val();
    
  
    if(email == ""){
      $("#mensaje1").fadeIn("slow");
      $("#mensaje1").delay(1000).slideToggle("fast");
      return false;
    }else if((!expre.test(email))){
      $("#alerta1").fadeIn("slow");
      $("#alerta1").delay(1000).slideToggle("fast");
      $("#email").val('');
      return false;         
    }else{
      $("#mensaje1").fadeOut();
    }

    if(password == ""){
      $("#mensaje2").fadeIn();
      $("#mensaje2").slideToggle("fast");
      return false;
    }else if(password.length < 8 || password.length > 16){
      $("#alerta2").fadeIn();
      $("#alerta2").delay(2000).slideToggle("fast");
      $("#password").val(''); 
      return false;
    }else{
      $("#mensaje2").fadeOut();
    }

    ajaxPost(email, password);

    limpiar();

  });
  //Funcion Limpiar
  function limpiar(){
    $("#email").val('');
    $("#password").val(''); 
  }

  //-------------------------------------------------------

  //-----------------------------------------------------------------------------
  //Funciòn AjaxPost-------------------------------------------------------------

  function ajaxPost(email, password) {

    var parametros = {
      'email': email,
      'password': password,
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

    });//$.ajax
  }//Funcion AjaxPost


});