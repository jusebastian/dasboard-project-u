$(document).on('ready', function () {

  //var base_url = $("#base_url").val();
  //var URL = base_url + 'clientes/listarProducto';

  var cont = 0;
  for (var i = 0; i < 10; i++) {

    //var id = data[i];
    //inserte el contenido, especificado por el parámetro,
    //$('#categoria').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
    var valor = '<tr id="fila' + cont + '" >' +
      '<th scope="row"> ' + i + '</th>' +
      '<td>' + "dos " + i + '</td>' +
      '<td>' + "tres" + i + '</td>' +
      '<td><button  class="btn btn-warning"  id="bt_edit" onclick="editar(' + i + ')">Editar</button></td>' +
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

  //----------------------------------------
  //Get Ajax-------------------------------
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

  //-----------------------------------------------

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






