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
      return false;
    }else {
      $("#mensaje3").fadeOut();
    }

    //Funcion
    ajaxPost();
  });


  //-------------------------------------------------------

  //--Funcio AjaxPost
  
  function ajaxPost() {

    var formData = new FormData();
    formData.append("file", file);

    $.ajax({
      type: 'POST',
      enctype: 'multipart/form-data',
      url: '',
      data: formdata,
      processData: false,
      contentType: false,
      cache: false,
      success: function (result) {
        var json = $.parseJSON(result);
        var fileDownloadUp = json.fileDownloadUri;
        console.log("datos almacenados");
        saveProject(fileDownloadUp);
        /*$("#resultado").html(response)*/
      },
      error: function (e) {
        alert("Error!");
        console.log("Error")
      },
      /*contentType: "application/json",*/
      /*dataType: 'json',*/
    });

    function saveProject(fileDownloadUp) {

      var parametros = {
        
        'recontra' : recoveryEmail,
        
      };
    }
  }//Funcion AjaxPost

});