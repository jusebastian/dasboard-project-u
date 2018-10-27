$(document).on('ready', function(){
  
    //Funciòn para validar y traer datos a un select-----------------------------
  //Funcion Retorne un booleano ValidarEmail
  $('#categoria-id').empty() //deja en vacio los campos

  $.ajax({

    type: "get",
    url: "/api/categoria/all",
    //data: {'nombre': nombre,},
    sucess: function(data){
      //Retorna Json data
      //var opciones = $.parseJSON(data);
      //iterando los valores del JSON
      $.each(opciones, function(index , value){
        //inserte el contenido, especificado por el parámetro,
        $('#categoria-id').append('<option value=">' + value.id + '">' + value.nombre + '</option>');
      });
    }

  });


});