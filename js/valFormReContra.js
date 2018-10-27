$(document).on('ready', function(){
  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  $("#submitTwo").click(function(){
    var recoveryEmail = $("#recovery-email").val();

    if(recoveryEmail = '' || !expre.test(recoveryEmail)){
      $("#mensaje3").fadeIn("slow");
      $("#mensaje3").slideToggle("fast");
      return false;
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