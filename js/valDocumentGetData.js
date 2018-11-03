$(document).on('ready', function () {

  //var base_url = $("#base_url").val();
  //var URL = base_url + 'clientes/listarProducto';

  for (var i = 0; i < 10; i++) {
    //var id = data[i];
    //inserte el contenido, especificado por el parámetro,
    //$('#categoria').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
    var valor = '<tr>' +
      '<th>' + 1+ '</th>' +
      '<td>' + 2 + '</td>' +
      '<td>' + 3 + '</td>' +
      '<td><button  class="btn btn-warning">Editar</button></td>' +
      '<td><button class="btn btn-danger">Eliminar</button></td>' +
      '</tr>';
    $('#tbodyProducto').append(valor);
    console.log(valor);
    
  }

  var tr = $('tr');
  addRowHandlers();
  console.log(tr);
  /*$.ajax({
    type: 'GET',
    url: 'api/proyecto/all',
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        var id = data[i];
        //inserte el contenido, especificado por el parámetro,
        //$('#categoria').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
        var valor = '<tr>' +
          '<th>' + id.id + '</th>' +
          '<td>' + id.titulo + '</td>' +
          '<td>' + id.finalidad + '</td>' +
          '<td><button  class="btn btn-warning">Editar</button></td>' +
          '<td><button class="btn btn-danger"></button></td>' +
          '</tr>';
        $("#tbodyProducto").append(valor);
      }
      //function
      //addRowHandlers();
    }
  });*/
  //funcion
  function addRowHandlers() {
    var table = $('#tableId');
    var rows = table.$('tr');
    for (i = 0; i < rows.length; i++) {
      var currentRow = rows[i];
      var createClickHandler = function (row) {
        return function () {
          var cell = row.$('td')[0];
          var id = cell.innerHTML;
          alert("id:" + id);
        };
      };

      currentRow.onclick = createClickHandler(currentRow);
    }
  }
  //window.onload = addRowHandlers();

});