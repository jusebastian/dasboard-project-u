$(document).on('ready', function () {

  //Expresiones regulares
  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var letra = /[a-zA-Z]/;
  var numero = /^([0-9])*$/;

  $("#submitSix").click(function () {

    //Imprimir mensaje de aletra success
    var alerta = '<div class="alert alert-success alert-dismissible">'
    +'<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
    +'<strong>Success!</strong> This alert box could indicate a successful or positive action.</div>';
    $('#alerta-success').append(alerta);

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
      $("#name2").val('');
      return false;
    }else if(nombreCompleto.length>100){
      $("#alerta1_5").fadeIn("slow");
      $("#alerta1_5").slideToggle("fast");
      $("#name2").val('');
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
      $("#alerta0").fadeIn("slow");
      $("#alerta0").slideToggle("fast");
      $("#email2").val('');
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
      $("#password2").val('');
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
      $("#repassword2").val('');
      return false;
    }else if(repassword != password){
      $("#alerta4_1").fadeIn('slow');
      $("#alerta4_1").slideToggle('fast');
      $("#repassword2").val('');
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
      $("#alerta5").fadeIn("slow");
      $("#alerta5").slideToggle("fast");
      $("#telefono2").val('');
      return false;
    }else if(telefono.length > 10){
      $("#alerta5_1").fadeIn("slow");
      $("#alerta5_1").slideToggle("fast");
      $("#telefono2").val('');
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
      //Ejecutando Función
      //ajaxPost(nombreCompleto, email, password, telefono, empresa, persona);
      //limpiarCampos();
      
    }

    //---------------------------------------------------
    //Limpiar Datos
    limpiaCampos();
  
  });//submit
  //---------------------------------------------------------------------------
  //function limpia campos------------------------------------------------------
  function limpiaCampos(){
    $("#name2").val('');
    $("#email2").val('');
    $("#password2").val('');
    $("#repassword2").val('');
    $("#telefono2").val('');
    $("#empresa2").val('');
    $("#persona2").val('');
  }


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

