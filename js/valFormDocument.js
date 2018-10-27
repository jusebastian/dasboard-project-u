$(document).on('ready', function () {

  var expre = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var letra = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  var numero = /^([0-9])*$/;
  var fecha = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;

  $("#submitFour").click(function () {


    console.log("Datos cargados");

    /*var datos = new FormData("#formulario1");*/

    /**Variables globales*/
    var visitas = 0;
    var puntuacion = 0;
    var tamano = 0;
    var estado = true;

    var tipoTrabajo = $("#tipoTrabajo").val();
    var tituloProyecto = $("#tituloProyecto").val();
    var nombreAutor = $("#nombreAutor").val().split(",");
    var textarea = $("#textarea").val();
    var file = $("#file").val();
    /*var tipoFacultad = $("#tipoFacultad").val();*/
    var tipoPrograma = $("#tipoPrograma").val();
    /*var semestre = $("#semestre").val();*/
    var palabraClave = $("#palabraClave").val().split(",");
    var Abstract = $("#Abstract").val();
    var finalidad = $("#finalidad").val();
    /*var estado = $("#estado").val();*/
    var fechaPublicacion = $("#fechaPublicacion").val();

    //variable
    //valido = false; //Variable que indicar el estado de la validación

    //recorrido
    //console.log(nombreAutor);

    console.log(palabraClave);
    
    
    /*if(valido){
      validar();
    }else{
      alert("Correos invalidos")
    }*/
   
      //console.log(nombreAutor);

      if (tipoTrabajo == 0) {
        $("#mensaje11").fadeIn("slow");
        $("#mensaje11").slideToggle("fast");
        return false;
        
      } else {
        $("#mensaje11").fadeOut();
      }

      if (tituloProyecto == "" ) {
        $("#mensaje12").fadeIn("slow");
        $("#mensaje12").slideToggle("fast");
        return false;
      }else if(!letra.test(tituloProyecto) || tituloProyecto.length > 100){
        alert("Verifica que sea letras y no sea mayo de 100 caracteres");
        return false;
      }


      if (nombreAutor == ""){
        $("#mensaje12").fadeOut();
        $("#mensaje13").fadeIn("slow");
        $("#mensaje13").slideToggle("fast");
        return false;
      }else if(!validarEmail(nombreAutor)){
        alert("Debe ser un correo valido")
        return false;
      }else{
        $("#mensaje13").fadeOut();
      }


      if (textarea == "") {
        $("#mensaje14").fadeIn("slow");
        $("#mensaje14").slideToggle("fast");
        return false;
      } else {
        $("#mensaje14").fadeOut();
      }


      if (file == "") {
        
        $("#mensaje15").fadeIn("slow");
        $("#mensaje15").slideToggle("fast");
        return false;
      } else {
        $("#mensaje16").fadeOut();
      }


      /*if(tipoFacultad == 0){
          $("#mensaje15").fadeOut();
          $("#mensaje16").fadeIn("slow");
          $("#mensaje16").slideToggle("fast");
          return false;
        }else{*/
          if (tipoPrograma == 0) {
            
            $("#mensaje17").fadeIn("slow");
            $("#mensaje17").slideToggle("fast");
            return false;
          } else {
            $("#mensaje17").fadeOut();
          }
          
          if (!validarPalabraClave(palabraClave)) {
            
            $("#mensaje18").fadeIn("slow");
            $("#mensaje18").slideToggle("fast");
            return false;
          } else {
            $("#mensaje18").fadeOut();
          }


          if (Abstract == "") {
            
            $("#mensaje19").fadeIn("slow");
            $("#mensaje19").slideToggle("fast");
            return false;
          } else {
            $("#mensaje19").fadeOut();
          }


          if (finalidad == "") {
            
            $("#mensaje20").fadeIn("slow");
            $("#mensaje20").slideToggle("fast");
            return false;
          } else {
            $("#mensaje21").fadeOut();
          }


          if (fechaPublicacion == "" || !fecha.test(fechaPublicacion)) {
            
            $("#mensaje22").fadeIn("slow");
            $("#mensaje22").slideToggle("fast");
            return false;
          }else{
            $("#mensaje22").fadeOut();
            //ajaxPost();
          }

    /*console.log(tipoTrabajo);
    console.log(tituloProyecto);
    console.log(datos.get('#tipoTrabajo'));
    console.log(datos.get('#tituloProyecto'));*/

  }); //Opcion envio de datos submitFour



  //-----------------------------------------------------



  $("#limpiar").click(function () {
    var tipoTrabajo = $("#tipoTrabajo").val();
    var tituloProyecto = $("#tituloProyecto").val();
    /*var nombreAutor = $("#nombreAutor").val();*/
    var textarea = $("#textarea").val();
    var file = $("#file").val();
    /*var tipoFacultad = $("#tipoFacultad").val();*/
    var tipoPrograma = $("#tipoPrograma").val();
    /*var semestre = $("#semestre").val();*/
    var palabraClave = $("#palabraClave").val();
    var Abstract = $("#Abstract").val();
    var finalidad = $("#finalidad").val();
    /*var estado = $("#estado").val();*/
    var fechaPublicacion = $("#fechaPublicacion").val();

    tipoTrabajo == "";
    tituloProyecto == "";
    nombreAutor == "";
    textarea == "";
    file == "";
    /*tipoFacultad == "";*/
    tipoPrograma == "";
    /*semestre == "";*/
    palabraClave == "";
    Abstract == "";
    finalidad == "";
    fechaPublicacion == "";

  });//Limpiar Formulario


  //-----------------------------------------------
  function validarArchivo(){

  }

  //Funcion Retorne un booleano ValidarEmail
  function validarEmail(nombreAutor){
    var valido = false;
    for (var i = 0; i < nombreAutor.length; i++){ //Recorro el array
      nombreAutor[i] = nombreAutor[i].trim();
      if (!expre.test(nombreAutor[i])){ //Si el e-mail no es válido
          valido = false; //El estado de la validación será false
          console.log(nombreAutor[i] + "  No Valido");
          break; //Salgo del bucle
          
      }else{
        valido = true;
        console.log(nombreAutor[i]);
      }
    }
    return valido;
  }


  //--------------------------------------------------

  //Funciòn Retorna ValidarPalabraClave

  function validarPalabraClave(palabraClave){
    var validarLetra = false;
    for(var j = 0; j < palabraClave.length; j++){
      palabraClave[j] = palabraClave[j].trim();
      if(!letra.test(palabraClave[j])){
        validarLetra = false;
        console.log(palabraClave[j] + "No valido");
        break;
      }else{
        validarLetra = true;
        console.log(palabraClave[j]);
      }
    }
    return validarLetra;
  }


  //--------------------------------------------------






  //--------------------------------------------------

  //Validar Tamaño Archivo
  /*function  arcValidation(file){

    // this.files[0].size recupera el tamaño del archivo
	// alert(this.files[0].size);
	
  var fileName = file.files[0].name;
	var fileSize = file.files[0].size;

	if(fileSize > 3000000){
		alert('El archivo no debe superar los 3MB');
		this.value = '';
		this.files[0].name = '';
	}else{
		// recuperamos la extensión del archivo
		var ext = fileName.split('.').pop();

		// console.log(ext);
		switch (ext) {
			case 'jpg':
			case 'jpeg':
			case 'png':
			case 'pdf': break;
			default:
				alert('El archivo no tiene la extensión adecuada');
				this.value = ''; // reset del valor
				this.files[0].name = '';
    }
    return file;

  }*/



  /*function checkFileSize() {
    var FileSize = file;
    var filesi = FileSize.file;
  
    // Si hay (por lo menos) un archivo seleccionado
    if (filesi.length > 0) {
       if (filesi[0].size > 200 * 1000) { // Validar la restricción
        FileSize.setCustomValidity("El archivo seleccionado no debe ser mayor a 200MB");
         return;
       }
    }
    // No hay incumplimiento de la restricción
    FS.setCustomValidity("");
  }*/

  //--------------------------------------------------

  //Function Ajax

  function ajaxPost() {

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
    }
  }//Funcion AjaxPost

});//Funcion