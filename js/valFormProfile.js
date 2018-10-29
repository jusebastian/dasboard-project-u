$(document).on('ready',function(){

  //Expresiones regulares------------------------------------------------------------------------

  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var letra = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
  var nume = /^([0-9])*$/;

  //Funciòn submit------------------------------------
  
  $("#editar").click(function(e){
    
    e.preventDefault();

    //Variables definidas o iniciliazadas--------------

    var nombre = $("#nombre").val();
    //var apellido = $("#apellido").val();
    var correo = $("#correo").val();
    var empresa = $("#empresa").val();
    var telefono = $("#telefono").val();
    var constraseña = $("#constraseña").val();
    var recontraseña = $("#recontraseña").val();
    var file = $("#file").val();


    //---------------------------------------

    //Validar nombe--------------------------

    if(nombre == ""){
      $("#mensaje1").fadeIn("slow");
      $("#mensaje1").slideToggle("fast");
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

    //---------------------------------------
    //Validar Correo-------------------------


    if(correo == ""  ){
      $("#mensaje5").fadeIn("slow");
      $("#mensaje5").slideToggle("fast");
      return false;
    }else if((!expre.test(correo))){
      $("#alerta2").fadeIn("slow");
      $("#alerta2").slideToggle("fast");
      return false;
    } else {
      $("#mensaje3").fadeOut();
    }

    //----------------------------------------
    //Validar Empresa-------------------------


    if( == "" || !letra.test(empresa)){
      
      
    }else{
      
    }

    if ((empresa == "")) {
      $("#mensaje4").fadeIn("slow");
      $("#mensaje4").slideToggle("fast");
      return false; 
    } else if ((empresa.length > 50)) {
      $("#alerta3").fadeIn("slow");
      $("#alerta3").slideToggle("fast");
      return false;
    } else if ((!letra.test(empresa))) {
      $("#alerta4").fadeOut();
      $("#alerta4").fadeIn("slow");
      $("#alerta4").slideToggle("fast");
      return false;
    } else {
      $("#mensaje4").fadeOut();
    }

    //-------------------------------------------
    //Validar Telefono-----------------------------------


    if(telefono == "" || !nume.test(telefono)) {
      
      $("#mensaje5").fadeIn("slow");
      $("#mensaje5").slideToggle("fast");
      return false; 
    }else{
      
    }

    //-------------------------------------------
    //Validar Copntraseña------------------------

    if(constraseña == ""){
      $("#mensaje5").fadeOut();
      $("#mensaje6").fadeIn("slow");
      $("#mensaje6").slideToggle("fast");
      return false; 
    }else{
      
    }

    //---------------------------------------------
    //Validar recontraseña-------------------------


    if(recontraseña == ""){
      $("#mensaje6").fadeOut();
      $("#mensaje7").fadeIn("slow");
      $("#mensaje7").slideToggle("fast");
      return false; 
    }else{
      
      
    }

    //---------------------------------------------
    //Validar Archivo------------------------------


    if(file == 0){
      $("#mensaje7").fadeOut();
      $("#mensaje8").fadeIn("slow");
      $("#mensaje8").slideToggle("fast");
      return false; 
    }else{
      $("#mensaje8").fadeOut();
      return false;
    }

    //--------------------------------------------

  });//./Funcion Submit

});//./function ready
