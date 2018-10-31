$(document).on('ready',function(){

  var base_url = $("#base_url").val();
  var URL = base_url + 'clientes/listarProducto';
  
  $.ajax({
    url: URL,
    type: 'POST',
    DataType: 'json',
    success: function(data) {
      var valor = '<tr>' +
        '<td>' + data.id + '</td>' +
        '<td>' + data.codigo + '</td>' +
        '<td>' + data.nombre + '</td>' +
        '<td>' + data.descripcion + '</td>' +
        '<td><button class="btn btn-danger fa fa-trash"></button>&nbsp;&nbsp;<button class="btn btn-warning fa fa-pencil"></button></td>' +
        '</tr>';
      $("#tbodyProducto").html(valor);
    }
  });

  

});