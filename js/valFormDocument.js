$(document).on('ready', function () {

  //Expresiones regulares
  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var letra = /[a-zA-Z]/;
  var numero = /^([0-9])*$/;
  var fecha = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;

  $("#submitFour").click(function () {

    /**Variables globales*/
    var visitas = 0;
    var puntuacion = 0;
    var tamano = 0;
    var estado = true;

    //Variables inicializadas o definidas
    var tipoTrabajo = $("#tipoTrabajo").val();
    var tituloProyecto = $("#tituloProyecto").val();
    var nombreAutor = $("#nombreAutor").val().split(",");
    var textarea = $("#textarea").val();
    var file = $("#file").val();
    var categoria = $("#categoria").val();
    var tipoPrograma = $("#tipoPrograma").val();
    var palabraClave = $("#palabraClave").val().split(",");
    var Abstract = $("#Abstract").val();
    var finalidad = $("#finalidad").val();
    var fechaPublicacion = $("#fechaPublicacion").val();

    //Condiciones Campos

    //Validando campo Select----------------
    if (tipoTrabajo == 0) {
      $("#mensaje10").fadeIn("slow");
      $("#mensaje10").slideToggle("fast");
      return false;
    } else {
      $("#mensaje11").fadeOut();
      //mostrarDatosInput();
    }
    //--------------------------------------


    //Validando campo Select-------------------

    if (categoria == 0) {
      $("#mensaje11").fadeIn("slow");
      $("#mensaje11").slideToggle("fast");
      return false;
    } else {
      $("#mensaje11").fadeOut();
    }

    //------------------------------------------

    console.log(tituloProyecto == "");
    console.log(tituloProyecto.length > 10);
    console.log(!letra.test(tituloProyecto));
    console.log("----------------------------------------")

    //-----------------------------------------------------
    //Validando Input Tìtulo--------------------------------

    if ((tituloProyecto == "")) {
      $("#mensaje12").fadeIn("slow");
      $("#mensaje12").slideToggle("fast");
      return false;
    } else if ((tituloProyecto.length > 50)) {
      $("#alerta2").fadeIn("slow");
      $("#alerta2").slideToggle("fast");
      $("#tituloProyecto").val('');
      return false;
    } else if ((!letra.test(tituloProyecto))) {
      $("#alerta2").fadeOut();
      $("#alerta1").fadeIn("slow");
      $("#alerta1").slideToggle("fast");
      $("#tituloProyecto").val('');
      return false;
    } else {
      $("#mensaje12").fadeOut();
    }

    //-----------------------------------------------------

    //Validando Correos Autores----------------------------

    if (nombreAutor == "") {
      $("#mensaje13").fadeIn("slow");
      $("#mensaje13").slideToggle("fast");
      return false;
    } else if (!validarEmail(nombreAutor)) {
      $("#alerta3").fadeIn("slow");
      $("#alerta3").slideToggle("fast");
      $("#nombreAutor").val('');
      return false;
    } else {
      $("#mensaje13").fadeOut();
    }

    //-------------------------------------------------------

    //Validando Textarea-------------------------------------

    if (textarea == "") {
      $("#mensaje14").fadeIn("slow");
      $("#mensaje14").slideToggle("fast");
      return false;
    }else if(textarea.length > 500){
      $("#alerta3_1").fadeIn("slow");
      $("#alerta3_1").slideToggle("fast");
      $("#textarea").val('');
      return false;
    } else {
      $("#mensaje14").fadeOut();
    }
    //-------------------------------------------------------

    //Validando Archivo--------------------------------------

    if (file == "") {
      $("#mensaje15").fadeIn("slow");
      $("#mensaje15").slideToggle("fast");
      return false;
    } else {
      $("#mensaje16").fadeOut();
    }

    //--------------------------------------------------------

    //Validando el programa-----------------------------------

    if (tipoPrograma == 0) {
      $("#mensaje17").fadeIn("slow");
      $("#mensaje17").slideToggle("fast");
      return false;
    } else {
      $("#mensaje17").fadeOut();
    }

    //---------------------------------------------------------

    //Validando palabras Claves--------------------------------

    if (palabraClave == "") {
      $("#mensaje18").fadeIn("slow");
      $("#mensaje18").slideToggle("fast");
      return false;
    } else if ((!validarPalabraClave(palabraClave))) {
      $("#alerta4").fadeIn("slow");
      $("#alerta4").slideToggle("fast");
      //$("#palabraClave").val('');
      //console.log(JSON.stringify(validarPalabraClave(palabraClave)));
      return false;
    } else {
      $("#mensaje18").fadeOut();
    }
    //--------------------------------------------------------

    //Validando Texarea---------------------------------------

    if (Abstract == "") {
      $("#mensaje19").fadeIn("slow");
      $("#mensaje19").slideToggle("fast");
      return false;
    }else if(Abstract.length > 500 ){
      $("#alerta4_1").fadeIn("slow");
      $("#alerta4_1").slideToggle("fast");
      $("#Abstract").val('');
      return false;
    } else {
      $("#mensaje19").fadeOut();
    }

    //---------------------------------------------------------

    //Validaciòn Finalidad-------------------------------------

    if (finalidad == "") {
      $("#mensaje20").fadeIn("slow");
      $("#mensaje20").slideToggle("fast");
      return false;
    } else if ((!letra.test(finalidad))) {
      $("#alerta5").fadeIn("slow");
      $("#alerta5").slideToggle("fast");
      $("#finalidad").val('');
      return false;
    } else if ((finalidad.length > 50)) {
      $("#alerta6").fadeIn("slow");
      $("#alerta6").slideToggle("fast");
      $("#finalidad").val('');
      return false;
    } else {
      $("#mensaje21").fadeOut();
    }
    //----------------------------------------------------------

    //Objeto date
    var hoy = new Date;
    //Validaciòn Fecha------------------------------------------

    if (fechaPublicacion == "" ) {
      $("#mensaje22").fadeIn("slow");
      $("#mensaje22").slideToggle("fast");
      return false;
    }else if(fechaPublicacion < hoy){
      $("#alerta8").fadeIn("slow");
      $("#alerta8").slideToggle("fast");
      return false;
    }else if((!validate_fecha(fechaPublicacion))){
      $("#alerta7").fadeIn("slow");
      $("#alerta7").slideToggle("fast");
      return false;
    } else {
      $("#mensaje22").fadeOut();
      ajaxPost(file);
    }

    //----------------------------------------------------------
    //Limpiar campos
    limpiarCampos();

  }); //Fin submitFour

  //_----------------------------------------------------------
  //Función Limpia Campos
  function limpiarCampos(){

    $("#tipoTrabajo").val('');
    $("#tituloProyecto").val('');
    $("#nombreAutor").val('')
    $("#textarea").val('');
    $("#file").val('');
    $("#categoria").val('');
    $("#tipoPrograma").val('');
    $("#palabraClave").val('')
    $("#Abstract").val('');
    $("#finalidad").val('');
    $("#fechaPublicacion").val('');

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
  function isValidDate(day,month,year)
  {
      var dteDate;
  
      // En javascript, el mes empieza en la posicion 0 y termina en la 11 
      //   siendo 0 el mes de enero
      // Por esta razon, tenemos que restar 1 al mes
      month=month-1;
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
      dteDate=new Date(year,month,day);
  
      //Devuelva true o false...
      return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
  }

  //------------------------------------------------


  //Funcion validar fecha----------------------------
  function validate_fecha(fechaPublicacion)
  {
      var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");
  
      if(fechaPublicacion.search(patron)==0)
      {
          var values=fechaPublicacion.split("-");
          if(isValidDate(values[2],values[1],values[0]))
          {
              return true;
          }
      }
      return false;
  }

  //-------------------------------------------------
  //Funcion valida tipo de archivo y tamaño
  function fileValidation(){
    var fileInput = file
    //var filePath = fileInput.value;
    var allowedExtensions = /(.doc|.pdf|)$/i;
    if(!allowedExtensions.exec(fileInput)){
        alert('Please upload file having extensions .doc/.pdf only.');
        fileInput.value = '';
        return false;
    }else{
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').innerHTML = '<div>'+e.target.result+'</div>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
  }

  //------------------------------------------------------------------------
  //Mostrar input------------------------------------------------------------
  function mostrarDatosInput(){
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
    }



  } //Funcion AjaxPost

}); //Funcion