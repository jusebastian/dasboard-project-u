$(document).on('ready', function () {

  //Ejemplo
  var cont = 0;
  var Titulo = "John Doe";
  for (var i = 0; i < 6; i++) {

    //var id = data[i];
    //inserte el contenido, especificado por el parámetro,
    //$('#categoria').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
    var valor = '<a href="' + cont + '" >' +
      '<li class="left clearfix">' +
      '<span class="chat-img pull-left">' +
      '<i class="fas fa-graduation-cap fa-5x">' + '</i>' +
      '</span>' +
      '<div class="chat-body clearfix">' +
      '<div class="header">' +
      '<strong class="primary-font">' + Titulo + '</strong>' +
      '<p>' + "Lorem ipsum dolor sit amet, consectetur adipiscing elit" + '</p>' +
      '<small class="text-muted pull-right">' + "32 mins ago" + '</small>' +
      '</div>' +
      '</div>' +
      '</li>' +
      '</a>';
    $('#Informacion').append(valor);
    console.log(valor);
    cont++;

  }

  //Ejemplo llenado datos



  //Ajax pata trae datos del servidor por meddio de get
  //-----------------------------------------------------
  /*$.ajax({
    type: 'GET',
    url: '/api/proyecto/all',
    success: function (data) {
      console.log(data);
      //Retorna Json data
      //Iterando los valores de JSON
      for (var i = 0; i < 6; i++) {

        var id = data[i];
        //inserte el contenido, especificado por el parámetro,
        var valor = '<a href="' + cont + '" >' +
          '<li class="left clearfix">' +
          '<span class="chat-img pull-left">' +
          '<i class="fas fa-graduation-cap fa-5x">' + '</i>' +
          '</span>' +
          '<div class="chat-body clearfix">' +
          '<div class="header">' +
          '<strong class="primary-font">' + id.Titulo + '</strong>' +
          '<p>' + id.resumen  + '</p>' +
          '<small class="text-muted pull-right">' + "32 mins ago" + '</small>' +
          '</div>' +
          '</div>' +
          '</li>' +
          '</a>';
        $('#Informacion').append(valor);
        console.log(valor);
        cont++;

      }//--/.Fin iteración
    }//--/.Success
  });//--/.Fin function Ajax */
});//Fin Ready