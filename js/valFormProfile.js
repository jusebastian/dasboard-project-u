$(document).on('ready',function(){

  //Expresiones regulares------------------------------------------------------------------------

  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var letra = /[a-zA-Z]/;
  var nume = /^([0-9])*$/;

  //Funciòn submit------------------------------------
  
  $("#editar").click(function(){
    
    //e.preventDefault();

    //Variables definidas o iniciliazadas--------------

    var nombre = $("#nombre").val();
    //var apellido = $("#apellido").val();
    var email = $("#correo").val();
    var empresa = $("#empresa").val();
    var telefono = $("#telefono").val();
    var password = $("#constraseña").val();
    var recontraseña = $("#recontraseña").val();
    var persona = $("#persona").val();
    var file = $("#file").val();


    //---------------------------------------

    //Validar nombe--------------------------

    if(nombre == ""){
      $("#mensaje1").fadeIn("slow");
      $("#mensaje1").slideToggle("fast");
      return false;
    }else if(nombre.length > 100){
      $("#alerta1_5").fadeIn("slow");
      $("#alerta1_5").slideToggle("fast");
      return false;
    }else if((!letra.test(nombre))){
      $("#alerta1").fadeIn("slow");
      $("#alerta1").slideToggle("fast");
      return false;
    }else{
      $("#mensaje1").fadeOut();
    }

    //---------------------------------------
    //Validar Correo-------------------------


    if(email == ""  ){
      $("#mensaje3").fadeIn("slow");
      $("#mensaje3").slideToggle("fast");
      return false;
    }else if((!expre.test(email))){
      $("#alerta2").fadeIn("slow");
      $("#alerta2").slideToggle("fast");
      return false;
    } else {
      $("#mensaje3").fadeOut();
    }

    //----------------------------------------
    //Validar Empresa-------------------------


    /*if ((empresa == "")) {
      $("#mensaje4").fadeIn("slow");
      $("#mensaje4").slideToggle("fast");
      return false; 
    } else if ((empresa.length > 50)) {
      $("#alerta3").fadeIn("slow");
      $("#alerta3").slideToggle("fast");
      return false;
    } else if ((!letra.test(empresa))) {
      $("#alerta4").fadeIn("slow");
      $("#alerta4").slideToggle("fast");
      return false;
    } else {
      $("#alerta4").fadeOut();
    }*/

    if ((empresa == 0)) {
      $("#mensaje4").fadeIn("slow");
      $("#mensaje4").slideToggle("fast");
      return false; 
    } else {
      $("#alerta4").fadeOut();
    }

    //---------------------------------------------------
    //Validando Persona----------------------------------

    if ((persona == 0)) {
      $("#mensaje4_1").fadeIn("slow");
      $("#mensaje4_1").slideToggle("fast");
      return false; 
    } else {
      $("#alerta4_1").fadeOut();
    }



    //---------------------------------------------------
    //Validar Telefono-----------------------------------


    if(telefono == "") {
      $("#mensaje5").fadeIn("slow");
      $("#mensaje5").slideToggle("fast");
      return false; 
    }else if((!nume.test(telefono))){
      $("#alerta5").fadeIn("slow");
      $("#alerta5").slideToggle("fast");
      return false; 
    }else if(telefono.length > 10){
      $("#alerta6").fadeIn("slow");
      $("#alerta6").slideToggle("fast");
      return false; 
    }else{
      $("#mensaje5").fadeOut();
    }

    //-------------------------------------------
    //Validar Copntraseña------------------------

    if(password == ""){
      $("#mensaje6").fadeIn("slow");
      $("#mensaje6").slideToggle("fast");
      return false; 
    }else if(password.length > 8){
      $("#alerta7").fadeIn("slow");
      $("#alerta7").slideToggle("fast");
      return false; 
    }else{
      $("#mensaje6").fadeOut();
    }

    //---------------------------------------------
    //Validar recontraseña-------------------------


    if(recontraseña == ""){
      $("#mensaje7").fadeIn("slow");
      $("#mensaje7").slideToggle("fast");
      return false;
    }else if(recontraseña.length > 8){
      $("#alerta8").fadeIn("slow");
      $("#alerta8").slideToggle("fast");
      return false;  
    }else if(recontraseña != password){
      $("#alerta8_1").fadeIn('slow');
      $("#alerta8_1").slideToggle('fast');
      return false;
    }else{
      $("#mensaje7").fadeOut();
      
    }

    //--------------------------------------------
    //---------------------------------------------
    //Validar Archivo------------------------------


    if(file == 0){
      $("#mensaje8").fadeIn("slow");
      $("#mensaje8").slideToggle("fast");
      return false; 
    }else{
      $("#mensaje8").fadeOut();
      //Ejecutando Función------------------------------------------
      //ajaxPost(nombre, email, password, empresa, telefono,  persona);
      archivoValidate(file);
    }


    //--------------------------------------------

    

  });//./Funcion Submit


  //Validando Archivo imagen
  function archivoValidate(file)
  {
    file.onchange = (ev) => {
      console.log('evento' + ev);
    }
  }


     
  //----------------------------------------------
  //Funcion AjaxPost

  function ajaxPost(nombre, email, password, empresa, telefono,  persona){

    var parametros = {
    'nombre': nombre,
    'email':email,
    'password': password,
    'empresa': empresa,
    'telefono':telefono,
    'rol': persona,
    'estado':true,
    }
    

    $.ajax({
      type: 'PUT',
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

  

  }
        

  //--/. FunctionAjasPost
    


});//./function ready



