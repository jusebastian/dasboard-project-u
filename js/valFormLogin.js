$(document).on('ready', function(){
  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  $("#submit").click(function(e){
    e.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val(); 
    var checkbox = $("#checkbox").val();
    
  
    if(email == "" || !expre.test(email)){
        $("#mensaje1").fadeIn("slow");
        $("#mensaje1").slideToggle("fast");
        return false;  
                 
    }else{
      if(password == ""){
        $("#mensaje1").fadeOut();
        $("#mensaje2").fadeIn();
        $("#mensaje2").slideToggle("fast");
        return false;
      }else{
        $("#mensaje2").fadeOut();
      }
    }

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
        /*var fileDownloadUp = json.fileDownloadUri;*/  
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
        
        'nombre' : nombreCompleto,
        'email' :email,
        'password' : password,
        'empresa' : empresa,
        'rol' : persona,
        'telefono' : telefono,
        'estado' : estado,
        
      };
    }
  }//Funcion AjaxPost


});