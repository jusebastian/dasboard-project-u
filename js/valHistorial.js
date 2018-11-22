$(document).on('ready', function () {

  //Variables inicializadas------------------------------------
  var dia = 30;
  var mes = 'junio';
  var titulo = "Hola mundo";
  var descripcion = "lorem  input ";
  //------------------------------------------------------------

  //Funcional----------------------------------------------------
  //Recorrido ---------------------------------------------------
  var cont = 0;
  for (var i = 0; i < 3; i++) {

    var valor = '<div class="article border-bottom">' +
      '<div class="col-xs-12">' +
      '<div class="row">' +
      '<div class="col-xs-2 col-md-2 date">' +
      '<div class="large">' + dia + '</div>' +
      '<div class="text-muted">' + mes + '</div>' +
      '</div>' +
      '<div class="col-xs-10 col-md-10">' +
      '<h4>' + '<a href="#">' + titulo + '</a>' + '</h4>' +
      '<p>' + descripcion + '</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="clear">' + '</div>' +
      '</div>';

    $('#hist').append(valor);
    console.log(valor);
    cont++;


  }
  //----------------------------------------------------------------
  //----------------------------------------------------------------

  //Ajax pata trae datos del servidor por meddio de get
  //-----------------------------------------------------
  /*$.ajax({
    type: 'GET',
    url: '/api/proyecto/all',
    success: function (data) {
      console.log(data);
      //Retorna Json data
      //Iterando los valores de JSON
      for (var i = 0; i < data.length; i++) {
        var id = data[i];
         //inserte el contenido, especificado por el parámetro,
        var valor = '<div class="article border-bottom">' +
          '<div class="col-xs-12">' +
          '<div class="row">' +
          '<div class="col-xs-2 col-md-2 date">' +
          '<div class="large">' + dia + '</div>' +
          '<div class="text-muted">' + mes + '</div>' +
          '</div>' +
          '<div class="col-xs-10 col-md-10">' +
          '<h4>' + '<a href="#">' + id.titulo + '</a>' + '</h4>' +
          '<p>' + id.descripcion + '</p>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '<div class="clear">' + '</div>' +
          '</div>';

        $('#hist').append(valor);
        console.log(valor);


      }//--/.Fin iteración



    }//--/.Success
  });//--/.Fin function Ajax */
  //------------------------------------------


});