$(document).ready(function() {
//    if (document.getElementById("modal-agrupar")){
//        if (document.getElementsByClassName("valError").length){ 
//            $('#modal-agrupar').modal('show');     
//        }else{
//            $('#modal-agrupar').modal('hide');     
//        }
//    }

//Inicializo el tipo de informe a filtrar

//Si hay mas de 1 tipo de balance, por defecto se muestra el submenu filtro
//    filtroBalances();


//Limpia los errores de intentos de entrar.
    limpiaErroresLogin();
    iniciarToolTips();
    inicializarCalendarios();

    //Evento submit al filtrar por un tipoBalance
    $("#botonFiltrar").click(function(event) {
        //event.preventDefault();
        var fDesdeFiltrar = $("#fDesdeFiltrar").val();
        var fHastaFiltrar = $("#fHastaFiltrar").val();
        if (compareDates(fDesdeFiltrar, fHastaFiltrar)) {

            mostrarVentanaModal("La fecha desde es superior a la fecha hasta. Vuelve a introducir los datos");

            return false;
        }
        else {
            var tipoBalance = $("#comboTipoBalance").val();
            $("#idTipoBalanceFiltrar").val(tipoBalance);
            $("#form-filtrar").submit();
        }
    });



    //Evento submit al añadir un nuevo balance
    $("#botonNuevoBal").click(function(event) {
        if ($("#descripcion").val().length > 0) {
//            var tipoBalance = $("#comboTipoBalance").val();
            //var idTipoBalanceFiltrar = $("#idTipoBalanceFiltrar").val();
            /*
             if (idTipoBalanceFiltrar == "") {
             alert("Debe filtrar primero por un tipo de balance.");
             return false;
             }
             */
            // alert(tipoBalance);
//            var texto = $("#comboTipoBalance option:selected").text();
//            $("#idTipoBalanceNuevo").val(tipoBalance);

            //Validacion fechas
            var fDesdeNuevo = $("#fDesdeNuevo").val();
            var fHastaNuevo = $("#fHastaNuevo").val();

            if (compareDates(fDesdeNuevo, fHastaNuevo)) {

                mostrarVentanaModal("La fecha desde es superior a la fecha hasta. Vuelve a introducir los datos")
                return false;
            }
        } else {

            mostrarVentanaModal("Debe indicarse un nombre de balance")
            return false;
        }
//        else {
//            $("#form-nuevoBal").submit();
//        }

    });

    $("#form-CNMC").submit(function() {
        blockUIForDownload('download_token_value_id');
    });
    
    

    $("#botonExpCNMC").click(function(event) {

        //Comprobar que existe plantilla Activa 

        event.preventDefault();
        event.stopPropagation();

        $.ajax({
            url: "checkPlantillaActiva.htm",
            type: "POST",
            contentType: false, // tell jQuery not to set contentType
            success: function(data) {

                if (data < 0) {

                    mostrarVentanaModal("No es posible generar el informe de la CNMC porque no hay una plantilla activa")
                }
                else {

                    $("#form-CNMC").submit();



                }
            },
            error: function() {
                //alert('error');
            }
        });



    });

    //Evento submit al exportar un balance
    $("#botonExportar").click(function(event) {

        event.preventDefault();
        var numBalancesSelected = $("input:checked").length;
        if (numBalancesSelected == 1) {
            var idBalance = $("input:checked").val();
            $("#idBalanceExportar").val(idBalance);

            //Compruebo que las fechas esten comprendidas en el periodo del balance
            var fechaInicio = $("input:checked").parent().siblings("td[name=fecha_inicio]").text();
            var fechaFin = $("input:checked").parent().siblings("td[name=fecha_fin]").text();


            var fechaFiltroDesde = $("#fDesdeExportar").val();
            var fechaFiltroHasta = $("#fHastaExportar").val();

            if (periodoValido(fechaInicio, fechaFin, fechaFiltroDesde, fechaFiltroHasta)) {
                var tipoBalance = $("#comboTipoBalance").val();
                $("#idTipoBalanceExportar").val(tipoBalance);
               
                $("#form-exportar").submit();
                $(".sub-exportar").slideToggle();
            }
            else {
                mostrarVentanaModal("Revise el periodo seleccionado para realizar la exportacion");
            }

        }
        else if (numBalancesSelected == 0) {
            mostrarVentanaModal("Seleccione un registro de la tabla");
            return false;
        }
        else {
            mostrarVentanaModal("No es posible seleccionar mas de un balance");
            return false;
        }

    });
    
    /*Bloqueo pantalla hasta que se descargue el informe*/
    $("#form-exportar").submit(function() {
        blockUIForDownload('download_exportar_token_value_id');
    });

    //Evento submit al eliminar un tipoBalance
    $("#botonEliminar").click(function(event) {

        event.preventDefault();
        var numBalancesSelected = $("input:checked").length;
        if (numBalancesSelected > 0) {
            var arrayIdBalances = "";
            $("input:checked").each(function() {
                var values = $(this).val() + ";";
                arrayIdBalances += values;
            });
            //var idBalance = $("input:checked").val();

            $("#idBalance").val(arrayIdBalances);

            var tipoBalance = $("#comboTipoBalance").val();
            $("#idTipoBalanceEliminar").val(tipoBalance);
            $('*').css('cursor', 'wait');
            $("#form-eliminar").submit();

        }
        else if (numBalancesSelected == 0) {

            mostrarVentanaModal("Seleccione un registro de la tabla");
            return false;
        }

    });


    $("#botonInformes").click(function() {

//        var tipoBalance = $("#comboTipoBalance").val();
//        var href = document.getElementById('botonInformes').pathname;
//        href = href + '?idTipoBalance=' + tipoBalance;
//
//        $("#botonInformes").attr(url, href);

        //var tipoBalance = $("#comboTipoBalance").val();
        var href = document.getElementById('botonInformes').pathname;
        //href = href + '?idTipoBalance=' + tipoBalance;
        $("#botonInformes").attr(url, href);



    });


    /*
     * Evento para generar el visor de saldos
     */
    $(".visor").click(function() {

        var id_balance = $(this).siblings('label').attr('for');
        var tipoBalance = $("#comboTipoBalance").val();
        var estado = $(this).siblings('input#estado').attr('value');
        if (estado == "PUBLICABLE") {
            $('#id_balance_visor').val(id_balance);
            $('#id_tipo_balance_visor').val(tipoBalance);
            //$('*').css('cursor', 'wait');
            $("#form-visor").submit();
        } else {

            mostrarVentanaModal("El balance debe estar en estado publicable.");
            return false;
        }
    });

    $('#verAgruparDatos').click(function() {
        $('#modal-agrupar').modal('show')
    });

    $('#botonAgruparInformes').click(function() {
        var comboNivel1 = $("#form-agrupar #comboNivel1").val();
        var comboNivel2 = $("#form-agrupar #comboNivel2").val();
        var comboNivel3 = $("#form-agrupar #comboNivel3").val();
        var comboNivel4 = $("#form-agrupar #comboNivel4").val();
        var comboNivel5 = $("#form-agrupar #comboNivel5").val();
        var agrupacion;
        $.ajax({
            type: 'POST',
            url: 'agruparVisor.htm',
            data: {'comboNivel1': comboNivel1, 'comboNivel2': comboNivel2, 'comboNivel3': comboNivel3, 'comboNivel4': comboNivel4, 'comboNivel5': comboNivel5},
            dataType: 'json',
            success: function(data) {
                agrupacion = data;
                if (agrupacion.error !== null && agrupacion.error.length > 2)
                {
                    $('#form-agrupar #mensajeError').text('' + agrupacion.error);
                } else {
                    $('#form-agrupar #mensajeError').text('');
                    $('#form-exportar #mostrar').val(agrupacion.mostrar);
                    $('#form-exportar #agrupar').val(agrupacion.agrupar);
                    $('#form-exportar #ordenar').val(agrupacion.ordenar);
                    $('#modal-agrupar').modal('hide');
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert("Error");
                alert(xhr.status);
                alert(thrownError);
            }
        });
    });
    
    $('#botonGuardarInformes').click(function() {
        var comboNivel1 = $("#form-agrupar #comboNivel1").val();
        var comboNivel2 = $("#form-agrupar #comboNivel2").val();
        var comboNivel3 = $("#form-agrupar #comboNivel3").val();
        var comboNivel4 = $("#form-agrupar #comboNivel4").val();
        var comboNivel5 = $("#form-agrupar #comboNivel5").val();
        var idTipoBalanceAgrupar = $("#comboTipoBalance").val()
        var agrupacion;
        $.ajax({
            type: 'POST',
            url: 'agruparTipoBalance.htm',
            data: {'idTipoBalanceAgrupar':idTipoBalanceAgrupar, 'comboNivel1': comboNivel1, 'comboNivel2': comboNivel2, 'comboNivel3': comboNivel3, 'comboNivel4': comboNivel4, 'comboNivel5': comboNivel5},
            dataType: 'json',
            success: function(data) {
                agrupacion = data;
                if (agrupacion.error !== null && agrupacion.error.length > 2)
                {
                    $('#form-agrupar #mensajeError').text('' + agrupacion.error);
                } else {
                    $('#form-agrupar #mensajeError').text('');
                    $('#form-exportar #mostrar').val(agrupacion.mostrar);
                    $('#form-exportar #agrupar').val(agrupacion.agrupar);
                    $('#form-exportar #ordenar').val(agrupacion.ordenar);
                    $('#modal-agrupar').modal('hide');
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert("Error");
                alert(xhr.status);
                alert(thrownError);
            }
        });
    });

});

function getDiffDias(fecha1, fecha2) {
    var d1 = fecha1.split("/");
    var dat1 = new Date(d1[2], parseFloat(d1[1]) - 1, parseFloat(d1[0]));
    var d2 = fecha2.split("/");
    var dat2 = new Date(d2[2], parseFloat(d2[1]) - 1, parseFloat(d2[0]));

    var fin = dat2.getTime() - dat1.getTime();
    var dias = Math.floor(fin / (1000 * 60 * 60 * 24))

    return dias;
}


function inicializarCalendarios() {
    //Abrir calendario
    $(".calendario").datepicker({
        dateFormat: 'dd/mm/yy',
        showOn: "button",
        buttonImage: "../img/ico-calendar.png",
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



function iniciarToolTips() {


    $('td a img').tooltip();
    $('th a img').tooltip();
}

function limpiaErroresLogin() {
    //Borra los mensajes de error del login
    $("#j_username").focus(function() {
        $("#messageError").empty();
    });
    $("#j_password").focus(function() {
        $("#messageError").empty();
    });

}



function filtroBalances() {
    var numOpcionesCombo = $("#comboTipoBalance option").size();
    var filtro = $("#filtro").val();
    var numFilas = $("#tablaBalances >tbody >tr").size();
    if (numOpcionesCombo > 1) {
        $('.sub-filtrar').slideToggle();
    }
    else if (numOpcionesCombo == 1) {
        $("#comboTipoBalance option").attr("selected", true);
        if (numFilas == 0 && filtro == 1) {

            $("#botonFiltrar").click();
        }

    }
}


function mostrarVentanaModal(mensaje) {
    $("#myModal").modal('show');
    $("#myModal .modal-body").text(mensaje);
}

function cerrarAgruparDatos() {
    $('#modal-agrupar').modal('hide');
}

