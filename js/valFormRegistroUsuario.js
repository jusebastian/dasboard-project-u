$(document).on('ready', function () {

  //Expresiones regulares
  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var letra = /[a-zA-Z]/;
  var numero = /^([0-9])*$/;

  $("#submitFive").click(function () {

    //Variables definidas o cargadas------------------

    var nombreCompleto = $("#name3").val();
    var email = $("#email3").val();
    var password = $("#password3").val();
    var repassword = $("#repassword3").val();
    var telefono = $("#telefono3").val();
    var empresa = $("#empresa3").val();
    var persona = $("#persona3").val();

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
      nombreCompleto.val("");
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
      $("#alerta2").fadeIn("slow");
      $("#alerta2").slideToggle("fast");
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
      //Ejecutando función
      ajaxPost(nombreCompleto, email, password, empresa, telefono,  persona);
      
    }

    //---------------------------------------------------
    
  
  });//submit


  //-----------------------------------------------------------------------------
  //Funciòn AjaxPost-------------------------------------------------------------

  function ajaxPost(nombreCompleto, email, password, empresa, telefono,  persona) {

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

