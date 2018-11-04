$(document).on('ready', function () {

  //Ejemplo --  prueba
  var cont = 0;
  for (var i = 0; i < 10; i++) {

    //var id = data[i];
    //inserte el contenido, especificado por el parámetro,
    //$('#categoria').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
    var valor = '<tr id="fila' + cont + '" >' +
      '<th scope="row"> ' +  i + '</th>' +
      '<td>' + "dos " + i + '</td>' +
      '<td>' + "tres" + i + '</td>' +
      '<td>' + "cuatro" + i + '</td>' +
      '<td>' + "cinco" + i + '</td>' +
      '<td>' + "seis" + i + '</td>' +
      '<td><button  class="btn btn-warning"  id="bt_edit" onclick="seleccionar(' + i + ')">Editar</button></td>' +
      '<td><button class="btn btn-danger" id="bt_del" onclick="eliminar(' + i + ')">Eliminar</button></td>' +
      '</tr>';
    $('#tableBodyUser').append(valor);
    console.log(valor);
    cont++;

  }

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
          '<td>' + id.nombre + '</td>' +
          '<td>' + id.email + '</td>' +
          '<td>' + id.telefono + '</td>'+
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
}//--/.Fin Function-----------------