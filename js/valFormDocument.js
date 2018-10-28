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
      return false;
    } else if ((!letra.test(tituloProyecto))) {
      $("#alerta2").fadeOut();
      $("#alerta1").fadeIn("slow");
      $("#alerta1").slideToggle("fast");
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
      return false;
    } else if ((finalidad.length > 50)) {
      $("#alerta6").fadeIn("slow");
      $("#alerta6").slideToggle("fast");
      return false;
    } else {
      $("#mensaje21").fadeOut();
    }
    //----------------------------------------------------------

    //Validaciòn Fecha------------------------------------------

    if (fechaPublicacion == "" || (!fecha.test(fechaPublicacion))) {

      $("#mensaje22").fadeIn("slow");
      $("#mensaje22").slideToggle("fast");
      return false;
    } else {
      $("#mensaje22").fadeOut();
      ajaxPost(file);
    }

    //----------------------------------------------------------


  }); //Fin submitFour


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

  //Validar solo nùmeros

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

  //Function Ajax

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
        /*'tipoFacultad' : tipoFacultad,*/
        /*'semestre' : semestre,*/
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