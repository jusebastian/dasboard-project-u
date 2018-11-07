$(document).on('ready', function () {

  //Ejemplo --  prueba
  var cont = 0;
  for (var i = 0; i < 10; i++) {

    //var id = data[i];
    //inserte el contenido, especificado por el parámetro,
    //$('#categoria').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
    var valor = '<tr id="fila' + cont + '" >' +
      '<th scope="row"> ' + i + '</th>' +
      '<td id="nombre">' + "dos " + i + '</td>' +
      '<td id="email">' + "tres" + i + '</td>' +
      '<td id="telefono">' + "cuatro" + i + '</td>' +
      '<td>' + "cinco" + i + '</td>' +
      '<td>' + "seis" + i + '</td>' +
      '<td><button  class="btn btn-warning"  data-toggle="modal" data-target=".forget-modal-2" id="bt_edit" onclick="seleccionar(' + i + ')">Editar</button></td>' +
      '<td><button class="btn btn-danger" id="bt_del" onclick="eliminar(' + i + ')">Eliminar</button></td>' +
      '</tr>';
    $('#tableBodyUser').append(valor);
    console.log(valor);
    cont++;

  }

  //Funcional-----------------------
  //Function Ajax-------------------
  //--------------------------------
  /*$.ajax({
    type: 'GET',
    url: 'api/usuario/',
    success: function (data) {
      console.log(data);
      //Retornar Jeison Data
      //Iterando los valores de JSON
      for (var i = 0; i < data.length; i++) {
        var cont = 0;
        var id = data[i];
        //inserte el contenido, especificado por el parámetro
        var valor = '<tr id="fila' + cont + '" >' +
          '<th scope="row"> ' + id.id + '</th>' +
          '<td id="nombre">' + id.nombre + '</td>' +
          '<td id="email">' + id.email + '</td>' +
          '<td id="telefono">' + id.telefono + '</td>'+
          '<td>' + id.empresa + '</td>'+
          '<td>' + id.rol + '</td>'+
          '<td><button  class="btn btn-warning"  id="bt_edit" onclick="seleccionar(' + i + ')">Editar</button></td>' +
          '<td><button class="btn btn-danger" id="bt_del" onclick="eliminar(' + i + ')">Eliminar</button></td>' +
          '</tr>';
        $('#tableBodyUser').append(valor);
        console.log(valor);
        cont++;

      }

    }
  });//--/.Fin Ajax*/

  //Funcional
  //_-----------------------------------------
  //---Filtros de Busqueda--------------------
  var buscar = $('#buscarUsuario');
  usuario = $('#table-filtro #tableBodyUser tr #nombre');

  //Image = $('ul li .chat-img i');
  $(usuario).each(function () {
    var tr = $(this);
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
        //$('#texto').html('Resultados de Busqueda');
      } else {
        console.log('esta vacio');
        //Agregamos un nuevo atributo o cambio de este
        $(clase).attr('class', 'fa fa-search');
        //$('#texto').html('Recientes');

      }
      if ($(clase).hasClass('fa fa-times')) {
        //Agregamos un nuevo evento
        $(clase).click(function () {
          //borramos el contenido del input
          $(buscar).val('');
          //mostramos todas las listas
          $(tr).parent().show();
          //Muestra las lista de imagenes
          //$(Image).parent().show();
          //volvemos a añadir la clase para mostrar la lupa
          $(clase).attr('class', 'fa fa-search');
          //$('#texto').html('Resultados de Busqueda');
        });
      }
      //ocultamos toda la lista
      $(tr).parent().hide();
      //$(Image).parent().hide();

      //valor del h3
      var txt = $(this).val();
      //si hay coincidencias en la búsqueda cambiando a minusculas
      if ($(tr).text().toLowerCase().indexOf(txt) > -1) {
        //mostramos las listas que coincidan

        $(tr).parent().show();
        //$(Image).parent().show();
      }
    });//--/.Fin Filtro escritura por teclado
  });//--/.Fin-each----------------------------
  //-------------------------------------------
  //-------------------------------------------

  //Funcional
  //--Evento para obtemner datos y poderlos editar----------------
  //--------------------------------------------------------------
  $("#bt_edit").on('click', function () {
    //$('#buscar').keyup(function(e){
    //var texto = $('#buscar').val();
    console.log("ocultar");
    var res = [];
    //Creando Ajax
    $.ajax({
      type: 'GET',
      url: '',
      success: function (data) {

        for (var i = 0; i < data.length; i++) {
          res.push(i);
        }
      }
    });//--/.Fin ajax-------

    obtenerDatos(res);

    //$('#resultadoBusqueda').css('display' , 'block');
    //$('#Informacion').css('display', 'none');
    //$('#texto').html('Resultados de Busqueda');
    //});
  });//--./fin funciòn buscar

  //-------------------------------------------
  //-------------------------------------------
  //Funcion Obtenerdatos y colocarlos dentro del input-------
  //---------------------------------------------------------

  function obtenerDatos(res) {
    for (var i = 0; i < res.length; i++) {

      $("#name3").val() = nombre ;
      $("#email3").val() = email;
      $("#password3").val() = password;
      $("#repassword3").val('');
      $("#telefono3").val() = telefono;
      $("#empresa3").val() = empresa;
      $("#persona3").val() = rol;

    }
  }


  //No funcional
  //_-----------------------------------------
  //---Filtros de Busqueda--------------------

  /*//Varibales que lo acompaña
  
  var contenido_fila;
  var coincidencias;
  var exp;
 
  //Opción buscar
  $('#btn-input').keyup(function(){
    if($(this).val().length >=3 ){
      filtrar($(this).val());
    }
    console.log($(this).val().length);
  });
  
  //Función filtrar
  function filtrar(cadena){
    $('#tableBodyUser tr').each(function(){
      contenido_fila=$(this).find('td:eq(0)').html();
      exp = new RegExp(cadena, 'gi');
      coincidencias = contenido_fila.match(exp);
      console.log("coincidencias:" + coincidencias);
      console.log("contenido" + contenido_fila);
      if(coincidencias != null){
        $(this).addClass('resaltar');
      }else{
        $(this).addClass('ocultar');
      }
      
    });
 
 
  }
  //--/.Fin Filtro------------------------------*/
  //--------------------------------------------


});//-/.Function Ready

//Array-----------------------------
var id_fila_selected = [];
//Fin Array-------------------------

//Funcion seleccionar Input---------
//----------------------------------
function seleccionar(id_fila) {
  //2702id_fila_selected=id_fila;
  id_fila_selected.push(id_fila);
  console.log("fila seleccionadda");
  console.log(id_fila);
  console.log(id_fila_selected);

}//--/.Fin function------------------


//Function Eliminar campo----------
//---------------------------------
function eliminar(id_fila) {
  /*$('#'+id_fila).remove();
  reordenar();*/
  console.log("filaID" + id_fila);
  $('#fila' + id_fila).remove();
}//--/