

var fichero = new Array();



$(document).ready(function() {

 



    $("#divHistorico").css('display', 'none'); // Por defecto es nueva plantilla


    /* ===========================    VENTANA DESCARGA PLANTILLA CNMC* =====================================================*/


    /*Evento OnClick sobre el boton de descargar en la ventana de Descarga de plantillas*/
    $('#descargarByName').click(function() {
        var numBalancesSelected = $("input:checked").length;
        if (numBalancesSelected == 1) {
            var idPlantilla = $("input:checked").attr("id");
            $("#idPlantilla_descargar").val(idPlantilla);
            $("#form-descargar").submit();
        }
        else {
            //alert("Selecciona una plantilla");
            $('#myModalAviso').modal('show');
            $('#myModalAviso  .modal-body').text('Selecciona una plantilla');
        }
    });



    /*Evento onclick ventana Modal para borrar plantilla Activa*/
    $('#confirmDelete').click(function() {
        var listaIdPlantillas = $("input:checked").attr("id");
        var listaIdPlantillas = new Array();

        $("input:checked").each(function() {
            listaIdPlantillas.push($(this).attr("id"));
        });

        $("#idPlantilla_eliminar").val(listaIdPlantillas);
        $("#form-eliminar").submit();

    });


    /*Evento OnClick sobre el boton de borrar en la ventana de Descarga de plantillas*/
    $('#deletePlantilla').click(function() {

        var mensaje = "Confirma que deseas borrar las plantillas seleccionadas";
        var numBalancesSelected = $("input:checked").length;
        if (numBalancesSelected > 0) {

            var listaIdPlantillas = new Array();

            $("input:checked").each(function() {
                listaIdPlantillas.push($(this).attr("id"));
            });

            var i = 0;
            for (i = 0; i <= listaIdPlantillas.length; i++) {
                var idPlantilla = listaIdPlantillas[i];
                var idPlantillaSeleccionada = "activo" + idPlantilla;
                var idPlantillaActiva = $('#' + idPlantillaSeleccionada).attr("id");
                if (idPlantillaSeleccionada === idPlantillaActiva) {
                    //mostrar ventana modal
                    mensaje = "¿Estás seguro de borrar la plantilla activa?";

                    break;
                }
            }
            //Muestro ventana modal
            $('#myModal  .modal-body').text(mensaje);
            $('#myModal').modal('show');



        }
        else {
            //alert("Selecciona una plantilla");
            $('#myModalAviso').modal('show');
            $('#myModalAviso  .modal-body').text('Selecciona una plantilla');


        }
    });



    /*Evento OnClick sobre el boton de activar en la ventana de Descarga de plantillas*/
    $('#activarPlantilla').click(function() {
        var numBalancesSelected = $("input:checked").length;
        if (numBalancesSelected == 1) {

            var idPlantilla = $("input:checked").attr("id");
            $("#idPlantilla_activar").val(idPlantilla);
            $("#form-activar").submit();
        }
        else {
            //alert("Selecciona una plantilla");
            $('#myModalAviso').modal('show');
            $('#myModalAviso  .modal-body').text('Selecciona una plantilla');
        }
    });

     $("#form-activar").submit(function() {
        blockUIForDownload('token_activar');
    });

    /* ===========================    VENTANA ACTUALIZA PLANTILLA CNMC* =====================================================*/

    // call initialization file
    if (window.File && window.FileList && window.FileReader) {
        Init();
    }

    // initialize
    function Init() {
        var fileSelect = document.getElementById("fileSelect");
        var filedrag = document.getElementById("filedrag");
        var submitbutton = document.getElementById("submitbutton");

        // file select
        fileSelect.addEventListener("change", FileSelectHandler, false);

        // file drop

        filedrag.addEventListener("dragover", FileDragHover, false);
        filedrag.addEventListener("dragleave", FileDragHover, false);
        filedrag.addEventListener("drop", FileDragHover, false);
        filedrag.style.display = "block";
    }

    // file drag hover
    function FileDragHover(e) {
        e.stopPropagation();
        e.preventDefault();
        e.target.className = (e.type == "dragover" ? "hover" : "");
        var files = e.target.files || e.dataTransfer.files;
        fichero = files[0];
        $("#labelNombreFichero").empty();
        $("#labelNombreFichero").append(fichero.name);


    }

    // file selection
    function FileSelectHandler(e) {
        // cancel event and hover styling
        FileDragHover(e);
        // fetch FileList object

        var files = e.target.files || e.dataTransfer.files;
        fichero = files[0];
        $("#labelNombreFichero").empty();

    }




    /*VENTANA ACTUALIZA PLANTILLA CNMC*/
    /*Evento onChange sobre los radioButton de tipo de plantilla*/
    $('input[type=radio][name=checkTipoPlantilla]').change(function() {
        $("#divHistorico").slideToggle("slow", "swing", function() {
        });

    });

    /*Evento onChange sobre los radioButton de historico de plantillas.
     * Se cambia el color a cada fila seleccionada*/
    $('input[type=radio][name=checkHistorico]').change(function() {
        var tdSelected = $(this).closest("tr");

        $(".table").children('tbody').children('tr').each(function() {
            $(this).removeClass("selected");
        });
        tdSelected.addClass("selected");
    });

    $('#botonActualizar').click(function() {

        //Variable para validar si puedo enviar la peticion
        var peticionCorrecta = true;
        var tipoPlantilla = $("input[type='radio']:checked").val();
        //Compruebo que hay fichero seleccionado

        if (fichero.name != null) {

            //Comprobar que hay radioButton seleccionado
            if (tipoPlantilla === "actualiza") {

                if ($('input[type=radio][name=checkHistorico]:checked').length === 0) {
                    peticionCorrecta = false;
                    //alert("Selecciona una plantilla para actualizar de la lista");
                    //$("#mensajesServidor").css('display', 'block');
                    $("#mensajesServidor").fadeIn('slow');
                    $("#mensajesServidor").text("Selecciona una plantilla para actualizar de la lista");
                    
                    $("#mensajesServidor").removeClass("alert-danger alert-warning alert-success");
                    $("#mensajesServidor").addClass(" alert-danger");
                   
               
                }
            }
        }
        else {
            peticionCorrecta = false;
            //alert("No has seleccionado/arrastrado una Plantilla CNMC.");
            //$("#mensajesServidor").css('display', 'block');
            $("#mensajesServidor").fadeIn('slow');
            $("#mensajesServidor").text("No has seleccionado/arrastrado una Plantilla CNMC");
            $("#mensajesServidor").removeClass(" alert-danger alert-warning alert-success");
          
            $("#mensajesServidor").addClass(" alert-danger");



        }

        if (peticionCorrecta) {

            var fd = new FormData(document.getElementById("form-plantilla"));

            fd.append("fileSelectDrag", fichero);
            fd.append("tipoPlantilla", tipoPlantilla);
            fd.append("comentario", $("#textComentarios").val());
           // alert($('#textComentarios').val());
            if (tipoPlantilla === "actualiza") {
                var idActualizar = $("input[name='checkHistorico']:checked").val();
                fd.append("idActualizar", idActualizar);

            }

            $.ajax({
                url: "upload.htm",
                type: "POST",
                data: fd,
                processData: false, // tell jQuery not to process the data
                contentType: false,
                beforeSend: function(xhrObj) {
                    //xhrObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
                    //xhrObj.setRequestHeader("Accept-Charset","utf-8");
                },
                success: function(data) {
                    $("#mensajesServidor").text("");
                    $("#mensajesServidor").append("<strong>" + data[0] + "</strong>");
                    //$("#mensajesServidor").css('display', 'block');
                    $("#mensajesServidor").fadeIn('slow');
                    $("#nombreFichero").val('');
                    $("#textComentarios").val('');
                    var estadoNivel = data[1];
                    var listaPlantillas = data[2];
                    if (estadoNivel === "1") {
                        $("#mensajesServidor").removeClass("alert-danger alert-warning");
                        $("#mensajesServidor").addClass("alert-success");

                        //Recargo listaPlantillas

                        $.each(data[2], function(key, value) {

                            //alert( key + ": " + value );
                        });
                    }
                    else if (estadoNivel != "1") {
                        $("#mensajesServidor").addClass("alert-danger");
                    }
                },
                error: function() {
                    $("#mensajesServidor").text("");
                    $("#mensajesServidor").removeClass("alert-danger alert-warning alert-success");
                    $("#mensajesServidor").addClass("alert-danger");
                    $("#mensajesServidor").fadeIn('slow');
                    if (file.size > 10000000) {
                        $("#mensajesServidor").text("Error actualizando plantilla. El tama\u00f1o del fichero excede el limite permitido de 10 MB");

                    }
                    else {
                        $("#mensajesServidor").text("Se ha producido un error al subir la plantilla");

                    }
                }
            });
        }


    });

});

function mostrarVentanaModal(mensaje) {
    $("#myModal").modal('show');
    $("#myModal .modal-body").text(mensaje);
}