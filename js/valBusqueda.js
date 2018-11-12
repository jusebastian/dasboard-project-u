$(document).on('ready', function () {

 
  //Alerta boostrap para busqueda
  $("#btn-buscar").click(function(){
    var Alerta = '<div class="alert alert-success alert-dismissible">'
      + '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
      '<strong>' + ' Success! ' + '</strong>' + 'Datos Almacenados Correctamente'
      + '</div>';
    $("#resultado").append(Alerta);


    /*var Alerta2 = '<div class="alert alert-danger alert-dismissible">'
      + '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
      '<strong>' + ' Danger! ' + '</strong>' + 'Los datos no fueorn Almacenados Correctamente'
      + '</div>';
    $("#resultado2").append(Alerta2);*/
  });
  //enviar archivo a otro archivo
  var data = "Informacion personal";

  //Enviatr archivo a otro
  //localStorage.setItem("informacion_personal", "hola mundo");

  //Ejemplo
  var cont = "informacion.html";
  var Titulo = "John Doe";
  for (var i = 0; i < 6; i++) {

    //var id = data[i];
    //inserte el contenido, especificado por el parámetro,
    //$('#categoria').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
    var valor = '<a href="#" onclick="seleccionar('+ i +');return false;">' +
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

  }//Ejemplo llenado datos--------------------------------------
  //------------------------------------------------------------

  //Funcion seleccionar Input---------
  //----------------------------------
  function seleccionar(id_fila) {
    //2702id_fila_selected=id_fila;
    localStorage.setItem("proyecto",id_fila);
    location.href = "informacion.html";
    
  }//--/.Fin function------------------



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
  //------------------------------------------



  //Filtros de Busqueda-----------------------
  //------------------------------------------

  /*$('#buscar').keyup(function (e) {
    var texto = $('#buscar').val();
    //creandoo Ajax
    $.ajax({
      type: 'POST',
      url: '',
      dataType: 'html',
      data: texto,
      success: function (data) {
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
          '<p>' + id.resumen + '</p>' +
          '<small class="text-muted pull-right">' + "32 mins ago" + '</small>' +
          '</div>' +
          '</div>' +
          '</li>' +
          '</a>';
        $('#Informacion').append(valor);
      }
    });//--/.Fin Ajax--------------------------------------
  });//--/.Buscar-------------------------------------------
  //--------------------------------------------------------*/

  //--Botón Buscar----------------------------------------
  //------------------------------------------------------
  /*$("#btn-buscar").on('click', function(){
    //$('#buscar').keyup(function(e){
      //var texto = $('#buscar').val();
      console.log("ocultar");
      var res = [];
      //Creando Ajax
      $.ajax({
        type: 'GET',
        url: '',
        success: function(data){
          
          for(var i= 0; i < data.length; i++){
            res.push(i);
          }
        }
      });//--/.Fin ajax-------

      //mostrarResultados(res);

      $('#resultadoBusqueda').css('display' , 'block');
      $('#Informacion').css('display', 'none');
      $('#texto').html('Resultados de Busqueda');
    //});
  });//--./fin funciòn buscar*/
  //--------------------------------------------------
  //--------------------------------------------------

  //Funcion Filtros-------------------------------------------------------
  //Funcion escrito por teclado-----------------------------------
  //----------------------------------------------------------------
  var buscar = $('#buscar');
  titulo = $('ul li .chat-body .header strong');
  Image = $('ul li .chat-img i');
  $(titulo, Image).each(function () {
    var li = $(this);
    //si presionamos la tecla
    $(buscar).keyup(function () {
      //cambiamos a minusculas
      this.value = this.value.toLowerCase();
      //Ingresando al icono
      var clase = $('.input-group .input-group-btn button i');
      if ($(buscar).val() != '') {
        //Agregamos un nuevo atributo o cambio de este
        $(clase).attr('class', 'fa fa-times');
        console.log('esta activo');
        $('#texto').html('Resultados de Busqueda');
      } else {
        console.log('esta vacio');
        //Agregamos un nuevo atributo o cambio de este
        $(clase).attr('class', 'fa fa-search');
        $('#texto').html('Recientes');

      }
      if ($(clase).hasClass('fa fa-times')) {
        //Agregamos un nuevo evento
        $(clase).click(function () {
          //borramos el contenido del input
          $(buscar).val('');
          //mostramos todas las listas
          $(li).parent().show();
          //Muestra las lista de imagenes
          $(Image).parent().show();
          //volvemos a añadir la clase para mostrar la lupa
          $(clase).attr('class', 'fa fa-search');
          $('#texto').html('Resultados de Busqueda');
        });
      }
      //ocultamos toda la lista
      $(li).parent().hide();
      $(Image).parent().hide();

      //valor del h3
      var txt = $(this).val();
      //si hay coincidencias en la búsqueda cambiando a minusculas
      if ($(li).text().toLowerCase().indexOf(txt) > -1) {
        //mostramos las listas que coincidan

        $(li).parent().show();
        $(Image).parent().show();
      }
    });//--/.Fin Filtro escritura por teclado



  });//--/.Fin each


  //-----------------------------------------------------------------
  //-----------------------------------------------------------------


  /*function mostrarResultados(res) {

    for (var i = 0; i < res.length; i++) {

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
      $('#resultadoBusqueda').append(valor);

      console.log(valor);
      cont++;

    }

    $('#resultadoBusqueda').css('display', 'block');
    $('#Informacion').css('display', 'none');
  }//-----*/





});//Fin Ready----------------------------------------------
//----------------------------------------------------------

