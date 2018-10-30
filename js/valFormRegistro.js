$(document).on('ready', function () {

  //Expresiones regulares
  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var letra = /[a-zA-Z]/;
  var numero = /^([0-9])*$/;

  $("#submitSix").click(function () {

    //Variables definidas o cargadas------------------

    var nombreCompleto = $("#name2").val();
    var email = $("#email2").val();
    var password = $("#password2").val();
    var repassword = $("#repassword2").val();
    var telefono = $("#telefono2").val();
    var empresa = $("#empresa2").val();
    var persona = $("#persona2").val();

    //------------------------------------------------
    //Validar nombre Completo-------------------------

    if(nombreCompleto == '') {
      $("#mensaje4").fadeIn("slow");
      $("#mensaje4").slideToggle("fast");
      return false;
    }else if((!letra.test(nombreCompleto))){
      $("#alerta1").fadeIn("slow");
      $("#alerta1").slideToggle("fast");
      return false;
    }else if(nombreCompleto.length>100){
      $("#alerta1_5").fadeIn("slow");
      $("#alerta1_5").slideToggle("fast");
      return false;
    }else{
      $("#mensaje4").fadeOut();
    }

    //----------------------------------------------
    // Validar email--------------------------------

    if(email == '') {
      $("#mensaje5").fadeIn("slow");
      $("#mensaje5").slideToggle("fast");
      return false;
    }else if((!expre.test(email))){
      $("#mensaje6").fadeIn("slow");
      $("#mensaje6").slideToggle("fast");
      return false;
    } else {
      $("#mensaje5").fadeOut();
    }

    //-----------------------------------------------
    //Validar password-------------------------------

    if (password == '') {
      $("#mensaje6").fadeIn("slow");
      $("#mensaje6").slideToggle("fast");
      return false;
    }else if(password.length > 8){
      $("#alerta3").fadeIn("slow");
      $("#alerta3").slideToggle("fast");
      return false;
    } else {
      $("#mensaje6").fadeOut();
    }

    //------------------------------------------------
    //Validar repassword------------------------------

    if (repassword == '') {
      $("#mensaje7").fadeIn("slow");
      $("#mensaje7").slideToggle("fast");
      return false;
    }else if(repassword.length > 8){
      $("#alerta4").fadeIn("slow");
      $("#alerta4").slideToggle("fast");
      return false;
    }else if(repassword != password){
      $("#alerta4_1").fadeIn('slow');
      $("#alerta4_1").slideToggle('fast');
      return false;
    } else {
      $("#mensaje7").fadeOut();
    }

    //------------------------------------------------
   
    

    //------------------------------------------------
    //Validar telefono--------------------------------

    if (telefono == '') {
      $("#mensaje8").fadeIn("slow");
      $("#mensaje8").slideToggle("fast");
      return false;
    }else if((!numero.test(telefono))){
      $("#alerta2").fadeIn("slow");
      $("#alerta2").slideToggle("fast");
      return false;
    }else {
      $("#mensaje8").fadeOut();
    }
    //--------------------------------------------------
    //Validar Empresa-----------------------------------

    if (empresa == 0) {
      $("#mensaje9").fadeIn("slow");
      $("#mensaje9").slideToggle("fast");
      return false;
    } else {
      $("#mensaje9").fadeOut();
    }

    //--------------------------------------------------
    //Validar Persona-----------------------------------

    if (persona == 0) {
      $("#mensaje10").fadeIn("slow");
      $("#mensaje10").slideToggle("fast");
      return false;
    } else {
      $("#mensaje10").fadeOut();
      ajaxPost(nombreCompleto, email, password, telefono, empresa, persona);
      limpiarCampos();
    }

    //---------------------------------------------------
    
  
  });//submit
  

  //-----------------------------------------------------------------------------
  //Funciòn AjaxPost-------------------------------------------------------------

  function ajaxPost(nombreCompleto, email, password, telefono, empresa, persona) {

    var parametros = {

      'nombre': nombreCompleto,
      'email': email,
      'password': password,
      'empresa': empresa,
      'telefono': telefono,
      'rol': persona,
      'estado': true,
    };

    console.log(JSON.stringify(parametros));
    //var formData = new FormData(parametros);

    $.ajax({
      type: 'POST',
      url: 'api/usuario/',
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

  //Limpia campos---------------------------------------
  function limpiarCampos(){

    nombreCompleto = "";
    nombreCompleto = "";
    email = "";
    password = "";
    repassword = "";
    empresa = "";
    persona = "";
    telefono = "";

  }//Función limpiar

});

