$(document).ready(function() {
iniciarToolTips();
inicializarCalendarios();


//Ocultar elementos Nueva Columna
    $('#inputNewColumn_descripcion').css('display', 'none');
    $('#inputNewColumn_nemonico').css('display', 'none');
    $('#btnAddColumn').css('display', 'none');
    $('#lblMensajeColumn').css('display', 'none');
    $("#divPanelClonar").css('display', 'none'); // Por defecto es manual


    //Boton borrar columna 
    $('#imgDeleteColumn').click(function() {

        var id_columna = $('#nombre_columna').val();
        //Abrir ventana modal preguntando confirmacion
        //mostrarVentanaModal("¿Estás seguro de borrar la columna " + columna);

        $.ajax({
            url: "deleteColumna.htm",
            type: "POST",
            data: {'id_columna': id_columna},
            success: function(data) {
                $('#inputNewColumn_descripcion').css('display', 'none');
                $('#inputNewColumn_nemonico').css('display', 'none');
                $('#btnAddColumn').css('display', 'none');

                $('#lblMensajeColumn').text(data);
                $('#lblMensajeColumn').css('display', 'inline');
                $('#lblMensajeColumn').fadeOut(6000, function() {
                });

                recargaComboColumnas();


            },
            error: function() {
                $('#inputNewColumn_descripcion').css('display', 'none');
                $('#inputNewColumn_nemonico').css('display', 'none');
                $('#btnAddColumn').css('display', 'none');
                $('#lblMensajeColumn').text("Se ha producido un error");
                $('#lblMensajeColumn').css('display', 'inline');
                $('#lblMensajeColumn').fadeOut(6000, function() {
                });
            }
        });


    });

    //Boton nueva columna
    $('#imgNewColumn').click(function() {
        $('#inputNewColumn_descripcion').css('display', 'inline');
        $('#inputNewColumn_nemonico').css('display', 'inline');
        $('#btnAddColumn').css('display', 'inline');
        $('#lblMensajeColumn').css('display', 'none');
    });

    //Boton añadir columna
    $('#btnAddColumn').click(function(e) {


        //Peticion Ajax para enviar la columna
        e.preventDefault();
        var descripcion = $('#inputNewColumn_descripcion').val();
        var nemonico = $('#inputNewColumn_nemonico').val();

        $.ajax({
            url: "addColumna.htm",
            type: "POST",
            data: {'descripcion': descripcion, 'nemonico': nemonico},
            success: function(data) {
                $('#inputNewColumn_descripcion').css('display', 'none');
                $('#inputNewColumn_nemonico').css('display', 'none');
                $('#btnAddColumn').css('display', 'none');

                $('#lblMensajeColumn').text(data);
                $('#lblMensajeColumn').css('display', 'inline');
                $('#lblMensajeColumn').fadeOut(6000, function() {
                });
                //alert(data);
                if (data.length > 0) {
                    recargaComboColumnas();
                }
                else {

                    //alert("No recarga");
                }


            },
            error: function() {
                $('#inputNewColumn_descripcion').css('display', 'none');
                $('#inputNewColumn_nemonico').css('display', 'none');
                $('#btnAddColumn').css('display', 'none');
                $('#lblMensajeColumn').text("Se ha producido un error");
                $('#lblMensajeColumn').css('display', 'inline');
                $('#lblMensajeColumn').fadeOut(6000, function() {
                });
            }
        });


    });

    //Boton Filtrar
    $('#sub-filtrar').click(function() {
        $('#modal-filtrarBalance').modal('show');
    });


    //Boton Nuevo
    $('#sub-nuevo').click(function() {
        $('#modal-nuevoTipoBalance').modal('show');
    });


/*
    $('#botonNuevo').click(function(e){
        
        e.preventDefault();
        var fechaInicio = $('#fecha_inicio').val();
        var fechaFin = $('#fecha_fin').val();
        
        var dateFechaInicio = stringToDate(fechaInicio);
        var dateFechaFin = stringToDate(fechaFin);
        
        
    })*/


    //Editar Tipo balance

    $("[name='descripcion_tipo_balance']").click(function() {

        var idEditar = $(this).siblings("td[name=id_tipo_balance]").children("label").attr("for");
        var descripcionEditar = $(this).text().trim();
        var nivelEditar = $(this).siblings("td[name=nivel_tipo_balance]").text();
        var nemonicoEditar = $(this).siblings("td[name=nemonico_tipo_balance]").text();

        var fechaInicioEditar = $(this).siblings("td[name=fecha_inicio_tipo_balance]").text();
        var fechaFinEditar = $(this).siblings("td[name=fecha_fin_tipo_balance]").text();

        //Peticion Ajax para buscar el id de la columna
        $.ajax({
            url: "getColumnaByNemonico.htm",
            type: "POST",
            data: {'nemonico': nemonicoEditar},
            success: function(data) {
                var idColumna = data;
                $("#nombre_columna").val(idColumna);
            },
            error: function() {
            }
        });

        $("#idEditar").val(idEditar);
        $("#descripcion").val(descripcionEditar);
        $("#comboNivelInicial").val(nivelEditar);
        $("#fecha_inicio").val(fechaInicioEditar);
        $("#fecha_fin").val(fechaFinEditar);

        var option = $("select#id_tipo_balance option[value='" + idEditar + "']");
        option.remove();

        $('#modal-nuevoTipoBalance').modal('show');



    });

$('#modal-nuevoTipoBalance').on('hidden.bs.modal', function () {
  
  recargaComboTiposBalance();
  
  //Limpio los datos de la ventana 
   $("#descripcion").val("");
   $("#comboNivelInicial").val(0);
   $("#nuevoTipoBalance").attr('checked', true);
  
})


    


    $('#verAgruparDatos').click(function() {

        var numBalancesSelected = $("input[name='checkBal']:checked").length;

        if (numBalancesSelected === 1) {
            var id = $("input[name='checkBal']:checked").val();
            $("#idTipoBalanceAgrupar").val(id);

            //Recojo la agrupacion y lo seteo en la ventana modal
            var agrupacion = $("#agrupacion" + id).val();
            if (agrupacion != "") {
                var arrayAgrupacion = agrupacion.split(";");
                $("#comboNivel1").val(arrayAgrupacion[0]);
                $("#comboNivel2").val(arrayAgrupacion[1]);
                $("#comboNivel3").val(arrayAgrupacion[2]);
                $("#comboNivel4").val(arrayAgrupacion[3]);

            }
            else {

                $("#comboNivel1").val("No Aplica");
                $("#comboNivel2").val("No Aplica");
                $("#comboNivel3").val("No Aplica");
                $("#comboNivel4").val("No Aplica");

            }

            $('#modal-agrupar').modal('show');
        }
        else {
            //Mensaje de error
            mostrarVentanaModal("Seleccione un registro de la tabla");
        }

    });

    //Boton Filtrar 
    $("#botonFiltrar").click(function(e) {

        e.preventDefault();
        var fechaInicio = $("#fecha_inicio_filtro").val();
        var fechaFin = $("#fecha_fin_filtro").val();

        if (fechaInicio == "") {

            $("#fecha_inicio_filtro").val("01/01/2000");
        }
        if (fechaFin == "") {
            $("#fecha_fin_filtro").val("01/01/3000");
        }

        $("#form-filtrar").submit();

    });

    //Boton Eliminar
    $('#botonEliminarTB').click(function() {
        var numBalancesSelected = $("input[name='checkBal']:checked").length;

        if (numBalancesSelected === 1) {
            var idTipoBalance = $("input[name='checkBal']:checked").val();

            $("#idTipoBalanceEliminar").val(idTipoBalance);
            $("#form-eliminar").submit();
        }
        else if (numBalancesSelected === 0) {
            mostrarVentanaModal("Seleccione un registro de la tabla");
            return false;
        }
        else {
            mostrarVentanaModal("No es posible seleccionar mas de un balance");
            return false;
        }
    });

    //Boton Clonar 

    $('input[type=radio][name=checkNuevoTipoBalance]').change(function() {
        $("#divPanelClonar").slideToggle("slow", "swing", function() {
        });

    });

});


function mostrarVentanaModal(mensaje) {
    $("#myModal").modal('show');
    $("#myModal .modal-body").text(mensaje);
}

function recargaComboColumnas() {

    $.ajax({
        url: "getColumnas.htm",
        type: "POST",
        success: function(listColumnas) {

            $('#nombre_columna').children().remove();
            $.each(listColumnas, function() {
                $("#nombre_columna").append('<option value="' + this.id_columna + '">' + this.nemonico + '</option>')

            })


        },
        error: function() {

        }
    });

}

function inicializarCalendarios() {
    //Abrir calendario
    $(".calendario").datepicker({
        dateFormat: 'dd/mm/yy',
        showOn: "button",
        buttonImage: "../../img/ico-calendar.png",
        buttonImageOnly: true,
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    });


}

function recargaComboTiposBalance() {

    $.ajax({
        url: "getTipoBalances.htm",
        type: "POST",
        success: function(listTipoBalances) {
           
            $('select#id_tipo_balance').children().remove();
            $.each(listTipoBalances, function() {
                $("select#id_tipo_balance").append('<option value="' + this.id_tipo_balance + '">' + this.descripcion + '</option>')

            })


        },
        error: function() {
       
        }
    });

}





