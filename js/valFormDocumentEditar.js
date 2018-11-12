$(document).on('ready', function () {
  //Expresiones regulares
  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var letra = /[a-zA-Z]/;
  var numero = /^([0-9])*$/;
  var fecha = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;

  $("#submitseven").click(function () {


    //--Alerta Entify----------------------------------------------------
    alertify.success('Datos Actualizados Correctamente');
    alertify.error('Los datos no fueorn Actualizados');
    //--./Alerta Entify--------------------------------------------------

    //Mensaje Alerta Boostrap-----------------------------------------------------------------------
    
    /*var Alerta = '<div class="alert alert-success alert-dismissible">'
      + '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
      '<strong>' + ' Success! ' + '</strong>' + 'Datos editados y almacenados Correctamente'
      + '</div>';
    $("#resultado3").append(Alerta);


    var Alerta2 = '<div class="alert alert-danger alert-dismissible">'
      + '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
      '<strong>' + ' Danger! ' + '</strong>' + 'Los datos no fueorn editados y almacenados '
      + '</div>';
    $("#resultado4").append(Alerta2);*/

    //Fin mensaje alerta Boostrap----------------------------------------------------------------------

    /**Variables globales*/
    var visitas = 0;
    var puntuacion = 0;
    var tamano = 0;
    var estado = true;

    //Variables inicializadas o definidas
    var tipoTrabajo = $("#tipoTrabajo1").val();
    var tituloProyecto = $("#tituloProyecto1").val();
    var nombreAutor = $("#nombreAutor1").val().split(",");
    var textarea = $("#textarea1").val();
    var file = $("#file1").val();
    var categoria = $("#categoria1").val();
    var tipoPrograma = $("#tipoPrograma1").val();
    var palabraClave = $("#palabraClave1").val().split(",");
    var Abstract = $("#Abstract1").val();
    var finalidad = $("#finalidad1").val();
    var fechaPublicacion = $("#fechaPublicacion1").val();

    //Condiciones Campos

    //Validando campo Select----------------
    if (tipoTrabajo == 0) {
      $("#mensaje01").fadeIn("slow");
      $("#mensaje01").slideToggle("fast");
      return false;
    } else {
      $("#mensaje01").fadeOut();
      //mostrarDatosInput();
    }
    //--------------------------------------


    //Validando campo Select-------------------

    if (categoria == 0) {
      $("#mensaje02").fadeIn("slow");
      $("#mensaje02").slideToggle("fast");
      return false;
    } else {
      $("#mensaje02").fadeOut();
    }

    //------------------------------------------

    console.log(tituloProyecto == "");
    console.log(tituloProyecto.length > 10);
    console.log(!letra.test(tituloProyecto));
    console.log("----------------------------------------")

    //-----------------------------------------------------
    //Validando Input Tìtulo--------------------------------

    if ((tituloProyecto == "")) {
      $("#mensaje03").fadeIn("slow");
      $("#mensaje03").slideToggle("fast");
      return false;
    } else if ((tituloProyecto.length > 50)) {
      $("#alerta04").fadeIn("slow");
      $("#alerta04").slideToggle("fast");
      $("#tituloProyecto1").val('');
      return false;
    } else if ((!letra.test(tituloProyecto))) {
      $("#alerta04").fadeOut();
      $("#alerta05").fadeIn("slow");
      $("#alerta05").slideToggle("fast");
      $("#tituloProyecto1").val('');
      return false;
    } else {
      $("#mensaje03").fadeOut();
    }

    //-----------------------------------------------------

    //Validando Correos Autores----------------------------

    if (nombreAutor == "") {
      $("#mensaje06").fadeIn("slow");
      $("#mensaje06").slideToggle("fast");
      return false;
    } else if (!validarEmail(nombreAutor)) {
      $("#alerta07").fadeIn("slow");
      $("#alerta07").slideToggle("fast");
      $("#nombreAutor1").val('');
      return false;
    } else {
      $("#mensaje06").fadeOut();
    }

    //-------------------------------------------------------

    //Validando Textarea-------------------------------------

    if (textarea == "") {
      $("#mensaje08").fadeIn("slow");
      $("#mensaje08").slideToggle("fast");
      return false;
    } else if (textarea.length > 500) {
      $("#alerta09").fadeIn("slow");
      $("#alerta09").slideToggle("fast");
      $("#textarea1").val('');
      return false;
    } else {
      $("#mensaje08").fadeOut();
    }
    //-------------------------------------------------------

    //Validando Archivo--------------------------------------

    if (file == "") {
      $("#mensaje010").fadeIn("slow");
      $("#mensaje010").slideToggle("fast");
      return false;
    } else {
      $("#mensaje010").fadeOut();
    }

    //--------------------------------------------------------

    //Validando el programa-----------------------------------

    if (tipoPrograma == 0) {
      $("#mensaje011").fadeIn("slow");
      $("#mensaje011").slideToggle("fast");
      return false;
    } else {
      $("#mensaje011").fadeOut();
    }

    //---------------------------------------------------------

    //Validando palabras Claves--------------------------------

    if (palabraClave == "") {
      $("#mensaje012").fadeIn("slow");
      $("#mensaje012").slideToggle("fast");
      return false;
    } else if ((!validarPalabraClave(palabraClave))) {
      $("#alerta013").fadeIn("slow");
      $("#alerta013").slideToggle("fast");
      $("#palabraClave1").val('');
      //console.log(JSON.stringify(validarPalabraClave(palabraClave)));
      return false;
    } else {
      $("#mensaje012").fadeOut();
    }
    //--------------------------------------------------------

    //Validando Texarea---------------------------------------

    if (Abstract == "") {
      $("#mensaje014").fadeIn("slow");
      $("#mensaje014").slideToggle("fast");
      return false;
    } else if (Abstract.length > 500) {
      $("#alerta015").fadeIn("slow");
      $("#alerta015").slideToggle("fast");
      $("#Abstract1").val('');
      return false;
    } else {
      $("#mensaje014").fadeOut();
    }

    //---------------------------------------------------------

    //Validaciòn Finalidad-------------------------------------

    if (finalidad == "") {
      $("#mensaje016").fadeIn("slow");
      $("#mensaje016").slideToggle("fast");
      return false;
    } else if ((!letra.test(finalidad))) {
      $("#alerta017").fadeIn("slow");
      $("#alerta017").slideToggle("fast");
      $("#finalidad1").val('');
      return false;
    } else if ((finalidad.length > 50)) {
      $("#alerta018").fadeIn("slow");
      $("#alerta018").slideToggle("fast");
      $("#finalidad1").val('');
      return false;
    } else {
      $("#mensaje016").fadeOut();
    }
    //----------------------------------------------------------

    //Objeto date
    var hoy = new Date;
    //Validaciòn Fecha------------------------------------------

    if (fechaPublicacion == "") {
      $("#mensaje019").fadeIn("slow");
      $("#mensaje019").slideToggle("fast");
      return false;
    } else if (fechaPublicacion < hoy) {
      $("#alerta020").fadeIn("slow");
      $("#alerta020").slideToggle("fast");
      return false;
    } else if ((!validate_fecha(fechaPublicacion))) {
      $("#alerta021").fadeIn("slow");
      $("#alerta021").slideToggle("fast");
      return false;
    } else {
      $("#mensaje019").fadeOut();
      ajaxPost(file);
    }

    //----------------------------------------------------------
    //Limpiar campos
    limpiarCampos();
    //$("#demo").show();
    $('#recargar').load('cargar_documento.html');

  }); //Fin submitFour---------------------------------------------------

  //_----------------------------------------------------------
  //Función Limpia Campos
  function limpiarCampos() {

    $("#tipoTrabajo1").val('');
    $("#tituloProyecto1").val('');
    $("#nombreAutor1").val('')
    $("#textarea1").val('');
    $("#file1").val('');
    $("#categoria1").val('');
    $("#tipoPrograma1").val('');
    $("#palabraClave1").val('')
    $("#Abstract1").val('');
    $("#finalidad1").val('');
    $("#fechaPublicacion1").val('');

  }


  //Funciones
  //-----------------------------------------------------

  //Funcion Retorne un booleano ValidarEmail------------------------------
  function validarEmail(nombreAutor) {
    var valido = false;
    for (var i = 0; i < nombreAutor.length; i++) { //Recorro el array
      nombreAutor[i] = nombreAutor[i].trim();
      if (!expre.test(nombreAutor[i])) { //Si el e-mail no es válido
        valido = false; //El estado de la validación será false
        console.log(nombreAutor[i] + "  No Valido");
        break; //Salgo del bucle

      } else {
        valido = true;
        console.log(nombreAutor[i]);
      }
    }
    return valido;
  }


  //--------------------------------------------------


  //Funciòn Retorna ValidarPalabraClave seoarados por comas

  function validarPalabraClave(palabraClave) {
    var validarLetra = false;
    for (var j = 0; j < palabraClave.length; j++) {
      palabraClave[j] = palabraClave[j].trim();
      if (!letra.test(palabraClave[j])) {
        validarLetra = false;
        console.log(palabraClave[j] + "No valido");
        break;
      } else {
        validarLetra = true;
        console.log(palabraClave[j]);
      }
    }
    return validarLetra;
  }



  //--------------------------------------------------

  //Validar solo Letras

  function soloLetras(tituloProyecto) {
    key = tituloProyecto.keyCode || tituloProyecto.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-38-46-164";
    teclado_especial = false;

    //Iterando
    for (var i in especiales) {
      if (key == especiales[i]) {
        teclado_especial = true;
        break;
      }
    }

    //Condiciones
    if (letras.indexOf(teclado) == -1 && !teclado_especial) {
      return false;
    }

  }

  //--------------------------------------------------


  //--------------------------------------------------
  //Validar dias-------------------------------------
  function isValidDate(day, month, year) {
    var dteDate;

    // En javascript, el mes empieza en la posicion 0 y termina en la 11 
    //   siendo 0 el mes de enero
    // Por esta razon, tenemos que restar 1 al mes
    month = month - 1;
    // Establecemos un objeto Data con los valore recibidos
    // Los parametros son: año, mes, dia, hora, minuto y segundos
    // getDate(); devuelve el dia como un entero entre 1 y 31
    // getDay(); devuelve un num del 0 al 6 indicando siel dia es lunes,
    //   martes, miercoles ...
    // getHours(); Devuelve la hora
    // getMinutes(); Devuelve los minutos
    // getMonth(); devuelve el mes como un numero de 0 a 11
    // getTime(); Devuelve el tiempo transcurrido en milisegundos desde el 1
    //   de enero de 1970 hasta el momento definido en el objeto date
    // setTime(); Establece una fecha pasandole en milisegundos el valor de esta.
    // getYear(); devuelve el año
    // getFullYear(); devuelve el año
    dteDate = new Date(year, month, day);

    //Devuelva true o false...
    return ((day == dteDate.getDate()) && (month == dteDate.getMonth()) && (year == dteDate.getFullYear()));
  }

  //------------------------------------------------


  //Funcion validar fecha----------------------------
  function validate_fecha(fechaPublicacion) {
    var patron = new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");

    if (fechaPublicacion.search(patron) == 0) {
      var values = fechaPublicacion.split("-");
      if (isValidDate(values[2], values[1], values[0])) {
        return true;
      }
    }
    return false;
  }

  //-------------------------------------------------
  //Funcion valida tipo de archivo y tamaño
  function fileValidation() {
    var fileInput = file
    //var filePath = fileInput.value;
    var allowedExtensions = /(.doc|.pdf|)$/i;
    if (!allowedExtensions.exec(fileInput)) {
      alert('Please upload file having extensions .doc/.pdf only.');
      fileInput.value = '';
      return false;
    } else {
      //Image preview
      if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#imagePreview').innerHTML = '<div>' + e.target.result + '</div>';
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    }
  }

  //------------------------------------------------------------------------
  //Mostrar input------------------------------------------------------------
  function mostrarDatosInput() {
    var catSelected = $("#tipoTrabajo");
    var opcionSelected = $("categoriasSelec");
    //var opcionSelected = catSelected.options[catSelected.selectedIndex].val();

    opcionSelected.val() = catSelected.val();

  }

  /*$('select#tipoTrabajo').change(function(){
    $('categoriasSelec').val($(this).val());  
  });*/




  //Validar Tamaño Archivo
  /*function arcValidation(file) {
  
      // this.files[0].size recupera el tamaño del archivo
      // alert(this.files[0].size);
  
      var fileName = file.files[0].name;
      var fileSize = file.files[0].size;
  
      if (fileSize > 3000000) {
          alert('El archivo no debe superar los 3MB');
          this.value = '';
          this.files[0].name = '';
      } else {
          // recuperamos la extensión del archivo
          var ext = fileName.split('.').pop();
  
          // console.log(ext);
          switch (ext) {
              case 'doc':
              case 'pdf':
                  break;
              default:
                  alert('El archivo no tiene la extensión adecuada');
                  this.value = ''; // reset del valor
                  this.files[0].name = '';
          }
          return file;
  
      } */





  //--------------------------------------------------


  //function validar formato archivo------------------
  /*
  
    var fileInput = file;
    var allowedExtensions = /(.doc|.pdf)$/i;
  
    if(!allowedExtensions.exec(fileInput)){
      console.alert('Please upload file having extensions');
      file = '';
      return false;
      
    }else{
  
      if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
        };
        reader.readAsDataURL(fileInput.files[0]);
  
          var FileSize = file;
          var filesi = FileSize.file;
    
          // Si hay (por lo menos) un archivo seleccionado
          if (filesi.length > 0) {
            if (filesi[0].size > 200 * 1000) { // Validar la restricción
              FileSize.setCustomValidity("El archivo seleccionado no debe ser mayor a 200MB");
              return;
            }
          }else{
            // No hay incumplimiento de la restricción
            FileSize.setCustomValidity("");
          }
      
      }
  
    }
  */

  //---------------------------------------------------------------
  //---------------------------------------------------------------
  //Funcion para obtener categoria para modal
  $("#categoria1").empty(); //deja en vacio los campos

  $.ajax({

    type: "GET",
    url: "/api/categoria/all",
    success: function(data){
      console.log(data);
      //Retorna Json data
      //Iterando los valores de JSON
      for (var i = 0; i < data.length; i++){
        var id = data[i];
        //inserte el contenido, especificado por el parámetro,
        $('#categoria1').append('<option value=">' + id.id + '">' + id.nombre + '</option>');
      }
      
    },
    error: function (e){
      console.log(e);
    }
    

  });
  //-----------------------------------------------------------
  //--./Fin Ajax-----------------------------------------------

  //----------------------------------------------------------------
  //Function Ajax---------------------------------------------------

  function ajaxPost(file) {

    var formData = new FormData();
    formData.append("file", file);

    $.ajax({
      type: 'POST',
      enctype: 'multipart/form-data',
      url: '/api/uploadFile',
      data: formdata,
      processData: false,
      contentType: false,
      cache: false,
      success: function (result) {
        var json = $.parseJSON(result);
        var fileDownloadUp = json.fileDownloadUri;
        console.log("datos almacenados");
        saveProject(fileDownloadUp);
        /*$("#resultado").html(response)*/
      },
      error: function (e) {
        alert("Error!");
        console.log()
      },
      /*contentType: "application/json",*/
      /*dataType: 'json',*/
    });

    function saveProject(fileDownloadUp) {
      var parametros = {
        'tipo_proyecto': tipoTrabajo,
        'titulo': tituloProyecto,
        'nombreAutor': nombreAutor,
        'resumen': textTarea,
        'url': fileDownloadUp,
        'programa': tipoPrograma,
        'visitas': visitas,
        'puntuacion': puntuacion,
        'tamano': tamano,
        'palabras_claves': palabraClave,
        'abstract': Abstract,
        'finalidad': finalidad,
        'estado': estado,
        'fecha_publicacion': fechaPublicacion,
      };

      console.log(JSON.stringify(parametros));


      /*$.ajax({
  
      });*/
    }//--./Funcion downloasUp----------------

  } //--./Funcion AjaxPost-------------------

  $('#tipoTrabajo1').change(function () {
    $('#categoriasSelec1').val($("#tipoTrabajo1 option:selected").text());
  });





}); //Funcion Ready

//Seleccionar el valo de un select y mostrarlo en un input
/*$(document).on('change', '#tipoTrabajo', function(event) {
$('#categoriasSelec').val($("#tipoTrabajo option:selected").text());
});*/

