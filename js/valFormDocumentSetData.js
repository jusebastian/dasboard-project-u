$(document).on('ready', function(){
  
  //Funciòn para validar y traer datos a un select-----------------------------
  //Funcion Retorne un booleano ValidarEmail
  //$('#categoria-id').empty() //deja en vacio los campos

  $("#categoria").empty(); //deja en vacio los campos

  $.ajax({

    type: "GET",
    url: "/api/categoria/all",
    success: function(data){
      console.log(data);
      //Retorna Json data
      //Iterando los valores de JSON
      for (var i = 0; i < data.length; i++){
        var id = data[i];
        //inserte el contenido, especificado por el parámetro,
        $('#categoria').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
      }
      
    },
    error: function (e){
      console.log(e);
    }
    

  });


});