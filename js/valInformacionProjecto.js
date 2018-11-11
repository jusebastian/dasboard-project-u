$(document).on('ready', function () {

  //Ejemplo
  var cont = 0;
  var Titulo = "John Doe";
  var Descripcion = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, provident.";
  var Resumen = "Resumen";
  var Abstract = "Abstract";
  var TituloProyecto = "TÍTULO PROYECTO";

  //var id = data[i];
  //inserte el contenido, especificado por el parámetro,
  //$('#categoria').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
  var valor = '<div class="panel-heading">' +
    TituloProyecto +
    '</div>' +

    '<div class="panel-body">' +
    '<div class="row">' +

    '<div class="col-xs-3" id="proyectoInfo">' +
    '<div id="Informe">' +
    '<div class="img-institute" id="img-institute">' +
    '<img src="http://repository.urosario.edu.co/themes/Mirage2/images/ur/portadaRI.png" alt="" class="imagenes">' +
    '</div>' +
    '<div class="cuadro-informe" id="cuadro-informe">' +
    '<h5>' + Titulo + '</h5>' +
    '<div class="botones" id="botones">' +
    '<a href="" class="btn btn-info"><i class="far fa-eye fa-2x"></i></a>' +
    '<a href="" class="btn btn-primary"><i class="fas fa-download fa-2x"></i></a>' +
    '</div>' +
    '<div class="info-autor" id="info-auto">' +
    '<h5 class="title">' + Titulo +
    '</h5>' +
    '<p id="nom-autor">' + Titulo + '</p>' +
    '</div>' +
    '<div class="info-autor">' +
    '<h5 class="title">' +
    Titulo +
    '</h5>' +
    '<p id="finalidad">' + Titulo + '</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +

    '<div class="col-xs-9">' +
    '<div id="description">' +
    '<h4 class="title">' + Resumen + '</h4>' +
    '<p class="info">' +
    Descripcion +
    '</p>' +
    '<hr>' +
    '<h4 class="title">' + Abstract + '</h4>' +
    '<p class="info">' +
    Descripcion +
    '</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div>';
  $('#todo').append(valor);

  console.log(valor);
  cont++;


  //Ejemplo llenado datos--------------------------------------
  //------------------------------------------------------------

  //Ajax para trae datos del servidor por meddio de get
  //-----------------------------------------------------
  /*$.ajax({
    type: 'GET',
    url: '/api/proyecto/all',
    success: function (data) {
      console.log(data);
      //Retorna Json data
      //Iterando los valores de JSON
      var id = data[i];
      //inserte el contenido, especificado por el parámetro,
      var valor = '<div class="panel-heading">' + id.titulo + '</div>' +

        '<div class="panel-body">' +
        '<div class="row">' +

        '<div class="col-xs-3" id="proyectoInfo">' +
        '<div id="Informe">' +
        '<div class="img-institute" id="img-institute">' +
          '<img src="http://repository.urosario.edu.co/themes/Mirage2/images/ur/portadaRI.png" alt="" class="imagenes">' +
        '</div>' +
        '<div class="cuadro-informe" id="cuadro-informe">' +
        '<h5>' + id.titulo + '</h5>' +
        '<div class="botones" id="botones">' +
        '<a href="" class="btn btn-info"><i class="far fa-eye fa-2x"></i></a>' +
        '<a href="" class="btn btn-primary"><i class="fas fa-download fa-2x"></i></a>' +
        '</div>' +
        '<div class="info-autor" id="info-auto">' +
        '<h5 class="title">' + id.nombre +
        '</h5>' +
        '<p id="nom-autor">' + id.finalidad + '</p>' +
        '</div>' +
        '<div class="info-autor">' +
        '<h5 class="title">' + Titulo + '</h5>' +
        '<p id="finalidad">' + Titulo + '</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="col-xs-9">' +
        '<div id="description">' +
        '<h4 class="title">' + Resumen + '</h4>' +
        '<p class="info">' +
        Descripcion +
        '</p>' +
        '<hr>' +
        '<h4 class="title">' + Abstract + '</h4>' +
        '<p class="info">' +
        Descripcion +
        '</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div>';
      $('#todo').append(valor);
    }//--/.Success
  });//--/.Fin function Ajax */
  //------------------------------------------






});


