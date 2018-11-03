$(document).on('ready', function(){





  //Ajax pata trae datos del servidor por meddio de get
  $.ajax({
    type:'GET',
    url: '/api/proyecto/all',
    success: function(data){
      console.log(data);
      //Retorna Json data
      //Iterando los valores de JSON
      for (var i = 0; i < data.length; i++){
        var id = data[i];
        //inserte el contenido, especificado por el parámetro,
        $('#Informacion').append('<li>' + '<div class="header">'  + 
                                          '<strong class="primary-font">'+ id.nombre + 
                                          '</div>'+ 
                                  '</li>');
        
      }
     
    }
});


success: function(data) {
  var program = "<ul>";
  for (var c = 0; c < data.programa.length; c++) {
    var infoprograma = "<li>" + "Programa: " + data.programa[c].programa;
    infoprograma += "Sinopsis: " + data.programa[c].sinopsis;
    infoprograma += "Conductor: " + data.programa[c].conductor;
    infoprograma += "Clasificacion: " + data.programa[c].clasificacion;
    infoprograma += " <em>" + data.programa[c].tipoProgram + "</em> </li>";
    program += infoprograma;
  }
  program += "</ul>";
  $("#programas").html(infoprograma);
}


});