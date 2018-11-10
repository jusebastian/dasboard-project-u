$(document).on('ready', function () {


  //Mostra datos----------------------------
  


  //var base_url = $("#base_url").val();
  //var URL = base_url + 'clientes/listarProducto';

  var cont = 0;
  for (var i = 0; i < 10; i++) {

    //var id = data[i];
    //inserte el contenido, especificado por el parámetro,
    //$('#categoria').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
    var valor = '<tr id="fila' + cont + '" >' +
      '<th scope="row"> ' + i + '</th>' +
      '<td id="nombre">' + "dos " + i + '</td>' +
      '<td id="finalidad">' + "tres" + i + '</td>' +
      '<td><button  class="btn btn-warning"  data-toggle="modal" data-target=".forget-modal-4" id="bt_edit" onclick="seleccionar(' + i + ')">Editar</button></td>' +
      '<td><button class="btn btn-danger" id="bt_del" onclick="eliminar(' + i + ')">Eliminar</button></td>' +
      '</tr>';
    $('#tbodyProducto').append(valor);
    console.log(valor);
    cont++;

  }

  /*$('#bt_del').click(function(){
    eliminar(id_fila_selected);
  });*/

  /*var tr = $('tr');
  addRowHandlers();
  console.log(tr);*/

  //Funcional------------------------------------
  //---------------------------------------------
  //Get Ajax-------------------------------------
  /*
    $.ajax({
      type: 'GET',
      url: 'api/proyecto/all',
      success: function (data) {
        var cont = 0;
        for (var i = 0; i < data.length; i++) {
          var id = data[i];
          //inserte el contenido, especificado por el parámetro,
          //$('#categoria').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
          var valor = '<tr id="fila' + cont + '" >' +
            '<th scope="row">' + id.id +'</th>' +
            '<td>' + id.titulo+ '</td>' +
            '<td>' + id.finalidad + i + '</td>' +
            '<td><button  class="btn btn-warning"  id="bt_edit" onclick="seleccionar(' + i + ')">Editar</button></td>' +
            '<td><button class="btn btn-danger" id="bt_del" onclick="eliminar(' + i + ')">Eliminar</button></td>' +
            '</tr>';
          $('#tbodyProducto').append(valor);
          console.log(valor);
          cont++;
  
        }
      }
  
    });//--/.Function ajax---------------------------*/

  //-------------------------------------------------
  //Funcional
  //_-----------------------------------------
  //---Filtros de Busqueda--------------------
  var buscar = $('#buscarProyecto');
  proyecto = $('#tableId #tbodyProducto tr #nombre');

  //Image = $('ul li .chat-img i');
  $(proyecto).each(function () {
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

}); //--./Fin Ready

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
}//--/.Fin Function-----------------

//Function Edita Campo--------------
//----------------------------------

function editar(id_fila) {
 var item = $("#tipoTrabajo");
 //item.val() = 
}


/*this.Edit = function (item) {
  var el = document.getElementById('edit-name');
  // Display value in the field
  el.value = this.countries[item];
  // Display fields
  document.getElementById('spoiler').style.display = 'block';
  self = this;
  document.getElementById('saveEdit').onsubmit = function() {
    // Get value
    var country = el.value;
    if (country) {
      // Edit value
      self.countries.splice(item, 1, country.trim());
      // Display the new list
      self.FetchAll();
      // Hide fields
      CloseInput();
    }
  }
};*/

//----------------------------------



