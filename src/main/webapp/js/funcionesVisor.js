$(document).ready(function() {    
    //document.body.style.cursor = 'wait';
    var showLoadingModal = function(cadenaTexto){
            var content = "<div><div id='modal' class='content_modal'>";
            content = content + "<div class='loadingAnimation'></div>"
            content = content + "<p>" + cadenaTexto + "</p>";
            content = content + "</div></div>";

            var div = document.createElement("div");
            div.className = "modalLoading";
            div.id = "openModal";
            div.innerHTML = content;
            var lastChild = document.body.lastChild;
            document.body.insertBefore(div, lastChild.nextSibling);
            $(".modalLoading").css("display","block");
    };


    var hideLoadingModal = function(){
                    $(".modalLoading").css("display","none");
                    $(".modalLoading").remove();
    };
            
    showLoadingModal('Cargando el balance ... ');

    /*Inicializacion del visor de Dias y captura de eventos*/
    $('#visorBalancesSaldo').treegrid({
        animate: false,
        collapsible: true,
        singleSelect: false,
        idField: 'id',
        onLoadSuccess: function() {             
//            alert('entra');
            hideLoadingModal();
        },
        onLoadError: function () {
//            alert('mal');
            hideLoadingModal();
        }          
    });
    /*Inicializacion del visor de Dias y captura de eventos*/
    $('#visorBalancesDias').treegrid({
        animate: true,
        collapsible: true,
        singleSelect: false,
        idField: 'id',
        onLoadSuccess: function() {
//            alert('entra');
            hideLoadingModal();
        },
        onLoadError: function () {
//            alert('mal');
            hideLoadingModal();
        }                
    });

    /*Inicializacion del visor de Dias y captura de eventos*/
    $('#visorBalancesHoras').treegrid({
        animate: true,
        collapsible: true,
        singleSelect: false,
        idField: 'id',
        onLoadSuccess: function() {
//            alert('entra');
            hideLoadingModal();
        },
        onLoadError: function () {
//            alert('mal');
            hideLoadingModal();
        }        
    });


    $('#saldo').click(function() {             
        //document.body.style.cursor = 'default';        
        $('#form-visorSaldo').submit();                
    });

    $('.dias').click(function() {
        var dia = $(this).text();
        $('#diaSelected').val(dia);
        $('#form-visorDias').submit();
    });
    
    $('.diasPos').click(function() {        
        $("#form-visorPos").submit();
    });
       
    $('.diasAnt').click(function() {                
        $("#form-visorAnt").submit();
    });
    
    $('.botonVolver').click(function() {
        var url = window.location.href;
        window.history.back();
        //$('*').css('cursor', 'default');
        //if (url.indexOf("#")>-1) {
        //    window.history.go(-2);
        // }
        // else {
        // window.history.back();
        // }
        //$('#form-volver').submit();
    });

    $('.botonInicio').click(function() {

        $("#form-inicioSaldo").submit();
    });

    $('#desplegarSaldo').click(function() { 
        showLoadingModal('Cargando ... ');
        $.ajax({
            type: 'POST',
            url: 'desplegarInformesSaldo.htm',
            success: function() {     
                $('#visorBalancesSaldo').treegrid('reload');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    });
    
    $('#desplegarDias').click(function() { 
        showLoadingModal('Cargando ... ');
        $.ajax({
            type: 'POST',
            url: 'desplegarInformesDias.htm',
            success: function() {                
                $('#visorBalancesDias').treegrid('reload');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    });
          
    $('#desplegarHoras').click(function() { 
        showLoadingModal('Cargando ... ');
        $.ajax({
            type: 'POST',
            url: 'desplegarInformesHoras.htm',
            success: function() {                
                $('#visorBalancesHoras').treegrid('reload');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    });    
   
    /*Evento OnClick sobre el boton de exportar en el Visor de Saldo*/
    $('#sub-exportarSaldo').click(function() {
        
        var nodosSelected = $('#visorBalancesSaldo').treegrid('getChecked');
        //$("#fDesdeExportar").val(fechaInicio);
        //$("#fHastaExportar").val(fechaFin);
        $(".sub-exportarSaldo").slideToggle();
        

    });
    

    /*Evento OnClick sobre el boton de exportar en el Visor de Dias*/
    $('#sub-exportarDias').click(function() {

        var nodosSelected = $('#visorBalancesDias').treegrid('getChecked');
        //$("#fDesdeExportar").val(fechaInicio);
        //$("#fHastaExportar").val(fechaFin);
        $(".sub-exportarDias").slideToggle();

    });
    
    /*Evento OnClick sobre el boton de exportar en el Visor de Dias*/
    $('#sub-exportarHoras').click(function() {

        var nodosSelected = $('#visorBalancesHoras').treegrid('getChecked');
        //$("#fDesdeExportar").val(fechaInicio);
        //$("#fHastaExportar").val(fechaFin);
        $(".sub-exportarHoras").slideToggle();

    });
             
    //Evento submit al exportar un balance.
    //FUNCION COMUN A LOS 3 VISORES (SALDO, DIAS, HORAS)
    $("#botonExportarVisor").click(function(event) {

        event.preventDefault();

        $("#idBalanceExportar").val(idBalance);

        //Compruebo que las fechas esten comprendidas en el periodo del balance
       

        var fechaFiltroDesde = $("#fDesdeExportar").val();
        var fechaFiltroHasta = $("#fHastaExportar").val();
        
         var fechaInicioBalance = $("#fechaDesde").val();
        var fechaFinBalance = $("#fechaHasta").val();
        
        var profundidad = $("#comboProfundidad").val();
        var idBalance = $("#idBalanceExportar").val();
        // alert(idBalance);

        if (periodoValido(fechaInicioBalance, fechaFinBalance, fechaFiltroDesde, fechaFiltroHasta)) {
            //showLoadingModal('Realizando extraccion Excel ... ');
            $("#form-exportarVisor").submit();  

            $(".sub-exportarSaldo").slideToggle();
            $(".sub-exportarDias").slideToggle();
            $(".sub-exportarHoras").slideToggle();     
            
        }
        else {
            //alert("Revise el periodo seleccionado para realizar la exportacion");
            mostrarVentanaModal("Revise el periodo seleccionado para realizar la exportacion")
        }
    });
    
    
    /*Bloqueo pantalla hasta que se descargue el informe*/
    $("#form-exportarVisor").submit(function() {
        blockUIForDownload('download_exportar_token_value_id');
    });
    
    $('#verAgruparDatosVisor').click(function() {
        $('#modal-agrupar').modal('show')
    });
    
    $('#botonGuardarSaldo').click(function(){
        
        var idBalance = $("#form-inicioSaldo #id_balance_visor").val();
        var idTipoBalance = $("#form-inicioSaldo #id_tipo_balance_visor").val();
        var profundidad = $("#form-inicioSaldo #profundidad").val();
        var comboNivel1 = $("#form-agrupar #comboNivel1").val();
        var comboNivel2 = $("#form-agrupar #comboNivel2").val();
        var comboNivel3 = $("#form-agrupar #comboNivel3").val();
        var comboNivel4 = $("#form-agrupar #comboNivel4").val();
        var comboNivel5 = $("#form-agrupar #comboNivel5").val();
        
        var agrupacion;
        $.ajax({
            type: 'POST',
            url: 'agruparTipoBalance.htm',
            data: {'idTipoBalanceAgrupar': idTipoBalance, 'comboNivel1': comboNivel1, 'comboNivel2': comboNivel2, 'comboNivel3': comboNivel3, 'comboNivel4': comboNivel4, 'comboNivel5': comboNivel5},
            dataType: 'json',
            success: function(data) {                   
                agrupacion = data;
                if(agrupacion.error !== null && agrupacion.error.length>2)
                {                    
                    $('#form-agrupar #mensajeError').text('' + agrupacion.error);
                } else {
                    $('#modal-agrupar').modal('hide');
                    showLoadingModal('Cargando ... ');
                    $('#form-agrupar #mensajeError').text('');
                    $('#form-exportarVisor #mostrar').val(agrupacion.mostrar);
                    $('#form-exportarVisor #agrupar').val(agrupacion.agrupar);
                    $('#form-exportarVisor #ordenar').val(agrupacion.ordenar);
                    $.ajax({                        
                        type: 'POST',
                        url: 'visorInformesSaldo.htm',
                        data: {'tipo_agrupacion':'BBDD','id_balance_visor':idBalance, 'id_tipo_balance_visor': idTipoBalance, 'profundidad': profundidad},
                        success: function() {                            
                            $('#visorBalancesSaldo').treegrid('reload');
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);  
                alert(thrownError);
            }
        });            
        
        
    })
    
    $('#botonGuardarDias').click(function(){
        
        var idBalance = $("#form-inicioSaldo #id_balance_visor").val();
        var idTipoBalance = $("#form-inicioSaldo #id_tipo_balance_visor").val();
        var profundidad = $("#form-inicioSaldo #profundidad").val();
        var comboNivel1 = $("#form-agrupar #comboNivel1").val();
        var comboNivel2 = $("#form-agrupar #comboNivel2").val();
        var comboNivel3 = $("#form-agrupar #comboNivel3").val();
        var comboNivel4 = $("#form-agrupar #comboNivel4").val();
        var comboNivel5 = $("#form-agrupar #comboNivel5").val();
        
        var agrupacion;
        $.ajax({
            type: 'POST',
            url: 'agruparTipoBalance.htm',
            data: {'idTipoBalanceAgrupar': idTipoBalance, 'comboNivel1': comboNivel1, 'comboNivel2': comboNivel2, 'comboNivel3': comboNivel3, 'comboNivel4': comboNivel4, 'comboNivel5': comboNivel5},
            dataType: 'json',
            success: function(data) {                   
                agrupacion = data;
                if(agrupacion.error !== null && agrupacion.error.length>2)
                {                    
                    $('#form-agrupar #mensajeError').text('' + agrupacion.error);
                } else {
                    $('#modal-agrupar').modal('hide');
                    showLoadingModal('Cargando ... ');
                    $('#form-agrupar #mensajeError').text('');
                    $('#form-exportarVisor #mostrar').val(agrupacion.mostrar);
                    $('#form-exportarVisor #agrupar').val(agrupacion.agrupar);
                    $('#form-exportarVisor #ordenar').val(agrupacion.ordenar);
                    $.ajax({                        
                        type: 'POST',
                        url: 'visorInformesDias.htm',
                        data: {'tipo_agrupacion':'BBDD','id_balance_visor':idBalance, 'id_tipo_balance_visor': idTipoBalance, 'profundidad': profundidad},
                        success: function() {                            
                            $('#visorBalancesDias').treegrid('reload');
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);  
                alert(thrownError);
            }
        });            
        
        
    })
    
     $('#botonGuardarHoras').click(function(){
        
        var idBalance = $("#form-inicioSaldo #id_balance_visor").val();
        var idTipoBalance = $("#form-inicioSaldo #id_tipo_balance_visor").val();
        var profundidad = $("#form-inicioSaldo #profundidad").val();
        var comboNivel1 = $("#form-agrupar #comboNivel1").val();
        var comboNivel2 = $("#form-agrupar #comboNivel2").val();
        var comboNivel3 = $("#form-agrupar #comboNivel3").val();
        var comboNivel4 = $("#form-agrupar #comboNivel4").val();
        var comboNivel5 = $("#form-agrupar #comboNivel5").val();
        var diaSelected = $("#form-visorHoras #diaSelected").val();
        
        var agrupacion;
        $.ajax({
            type: 'POST',
            url: 'agruparTipoBalance.htm',
            data: {'idTipoBalanceAgrupar': idTipoBalance, 'comboNivel1': comboNivel1, 'comboNivel2': comboNivel2, 'comboNivel3': comboNivel3, 'comboNivel4': comboNivel4, 'comboNivel5': comboNivel5},
            dataType: 'json',
            success: function(data) {                   
                agrupacion = data;
                if(agrupacion.error !== null && agrupacion.error.length>2)
                {                    
                    $('#form-agrupar #mensajeError').text('' + agrupacion.error);
                } else {
                    $('#modal-agrupar').modal('hide');
                    showLoadingModal('Cargando ... ');
                    $('#form-agrupar #mensajeError').text('');
                    $('#form-exportarVisor #mostrar').val(agrupacion.mostrar);
                    $('#form-exportarVisor #agrupar').val(agrupacion.agrupar);
                    $('#form-exportarVisor #ordenar').val(agrupacion.ordenar);
                    $.ajax({                        
                        type: 'POST',
                        url: 'visorInformesHoras.htm',
                        data: {'tipo_agrupacion':'BBDD','id_balance_visor':idBalance, 'id_tipo_balance_visor': idTipoBalance, 'profundidad': profundidad, 'diaSelected': diaSelected},
                        success: function() {                            
                            $('#visorBalancesHoras').treegrid('reload');
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);  
                alert(thrownError);
            }
        });            
        
        
    })
    
    $('#botonAgruparSaldo').click(function() {        
        var idBalance = $("#form-inicioSaldo #id_balance_visor").val();
        var idTipoBalance = $("#form-inicioSaldo #id_tipo_balance_visor").val();
        var profundidad = $("#form-inicioSaldo #profundidad").val();
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
                if(agrupacion.error !== null && agrupacion.error.length>2)
                {                    
                    $('#form-agrupar #mensajeError').text('' + agrupacion.error);
                } else {
                    $('#modal-agrupar').modal('hide');
                    showLoadingModal('Cargando ... ');
                    $('#form-agrupar #mensajeError').text('');
                    $('#form-exportarVisor #mostrar').val(agrupacion.mostrar);
                    $('#form-exportarVisor #agrupar').val(agrupacion.agrupar);
                    $('#form-exportarVisor #ordenar').val(agrupacion.ordenar);
                    $.ajax({                        
                        type: 'POST',
                        url: 'visorInformesSaldo.htm',
                        data: {'tipo_agrupacion':'agrupar', 'id_balance_visor':idBalance, 'id_tipo_balance_visor': idTipoBalance, 'profundidad': profundidad},
                        success: function() {                            
                            $('#visorBalancesSaldo').treegrid('reload');
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);  
                alert(thrownError);
            }
        });            
    }); 
    
    $('#botonAgruparDias').click(function() {                
        var idBalance = $("#form-inicioSaldo #id_balance_visor").val();
        var idTipoBalance = $("#form-inicioSaldo #id_tipo_balance_visor").val();                
        var profundidad = $("#form-inicioSaldo #profundidad").val();        
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
                if(agrupacion.error !== null && agrupacion.error.length>2)
                {                    
                    $('#form-agrupar #mensajeError').text('' + agrupacion.error);
                } else {
                    $('#modal-agrupar').modal('hide');
                    showLoadingModal('Cargando ... ');
                    $('#form-agrupar #mensajeError').text('');  
                    $('#form-exportarVisor #mostrar').val(agrupacion.mostrar);
                    $('#form-exportarVisor #agrupar').val(agrupacion.agrupar);
                    $('#form-exportarVisor #ordenar').val(agrupacion.ordenar);
                    $.ajax({                        
                        type: 'POST',
                        url: 'visorInformesDias.htm',
                        data: {'id_balance_visor':idBalance, 'id_tipo_balance_visor': idTipoBalance, 'profundidad': profundidad, 'recarga': true},
                        success: function() {                            
                            $('#visorBalancesDias').treegrid('reload');
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);  
                alert(thrownError);
            }
        });            
    }); 
    
    $('#botonAgruparHoras').click(function() {
        var idBalance = $("#form-inicioSaldo #id_balance_visor").val();
        var idTipoBalance = $("#form-inicioSaldo #id_tipo_balance_visor").val();
        var profundidad = $("#form-inicioSaldo #profundidad").val();
        var diaSelected = $("#form-visorHoras #diaSelected").val();
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
                if(agrupacion.error !== null && agrupacion.error.length>2)
                {                    
                    $('#form-agrupar #mensajeError').text('' + agrupacion.error);
                } else {
                    $('#modal-agrupar').modal('hide');
                    showLoadingModal('Cargando ... ');
                    $('#form-agrupar #mensajeError').text('');    
                    $('#form-exportarVisor #mostrar').val(agrupacion.mostrar);
                    $('#form-exportarVisor #agrupar').val(agrupacion.agrupar);
                    $('#form-exportarVisor #ordenar').val(agrupacion.ordenar);
                    $.ajax({                        
                        type: 'POST',
                        url: 'visorInformesHoras.htm',
                        data: {'id_balance_visor':idBalance, 'id_tipo_balance_visor': idTipoBalance, 'profundidad': profundidad, 'diaSelected': diaSelected},
                        success: function() {                            
                            $('#visorBalancesHoras').treegrid('reload');
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);  
                alert(thrownError);
            }
        });            
    }); 
    
});

function cerrarAgruparDatosVisor(){
    $('#modal-agrupar').modal('hide'); 
}

    
//function exportarBalance() {
//    var mostrar = $("#form-exportar #mostrar").val();
//    var agrupar = $("#form-exportar #agrupar").val();
//    var ordenar = $("#form-exportar #ordenar").val();
//    var comboProfundidad = $("#form-exportar #comboProfundidad").val();
//    var comboTipo = $("#form-exportar #comboTipo").val();
//    var idTipoBalanceExportar = $("#form-exportar #idTipoBalanceExportar").val();    
//    var idBalanceExportar = $("#form-exportar #idBalanceExportar").val();    
//    var idBalanceExportarSaldo = $("#form-exportar #idBalanceExportarSaldo").val();
//    var fDesdeExportar = $("#form-exportar #fDesdeExportar").val();
//    var fHastaExportar = $("#form-exportar #fHastaExportar").val(); 
//    $.ajax({
//        type: 'POST',
//        url: 'exportarBalance.htm',        
//        data: {'mostrar': mostrar, 'agrupar': agrupar, 'ordenar': ordenar, 'fDesdeExportar': fDesdeExportar, 'fHastaExportar': fHastaExportar, 'comboProfundidad': comboProfundidad, 'comboTipo': comboTipo, 'idTipoBalanceExportar': idTipoBalanceExportar, 'idBalanceExportar': idBalanceExportar, 'idBalanceExportarSaldo': idBalanceExportarSaldo},                
//        //data: {'Id_Balance': $("#form-exportar #idBalanceExportarSaldo").val(),  'fDesdeBalance': $("#form-exportar #fDesdeExportar").val(), 'fHastaBalance': $("#form-exportar #fHastaExportar").val()},
////        dataType: 'json',
//        success: function(data) {
//           alert(data);
//           //window.location.href = data;
//        },
//        error: function(){
////            cerrarLoadingModal();
//            alert('error');            
//        }
//    }).done(function(data) {
//        alert( "success" );
//        alert(data);
//    });
//}

//function cerrarLoadingModal() {
//    $(".modalLoading").css("display","none");
//    $(".modalLoading").remove();
//}

//    /*Evento OnClick sobre el boton grafica*/
//    $('#sub-graficaSaldo').click(function() {
//
//        //Detectar filas seleccionadas
//        var arrayNodosSaldo = $('#visorBalancesSaldo').treegrid('getChecked');
//        //Parametros del nodo (id, _parentId, region, state)
//
//        var arrayJson = JSON.stringify(arrayNodosSaldo);
//
//        var options = {
//            "backdrop": "static",
//            "draggable": true,
//            "resizable": true
//        }
//
//        // alert(arrayJson);
//
//        $.ajax({
//            type: 'POST',
//            url: "generarGrafica.htm",
//            dataType: "json",
//            //contentType: "application/json; charset=utf-8",
//            data: {arrayDatos: arrayJson},
//            success: function(data) {
//                //    alert('sucess' + data.saldo);
//                $('#basicModal').modal(options);
//                //  alert('entra');
//                // alert(data.toString());
//                // alert(arrayDatos.toString());
//            },
//            error: function() {
//                //alert('error');
//            },
//        });
//
//
//
//    });
//
//    /*Evento OnClick sobre el boton grafica*/
//    $('#sub-graficaDiaria').click(function() {
//
//        //Detectar filas seleccionadas
//        var arrayNodosSaldo = $('#visorBalancesSaldo').treegrid('getChecked');
//        //Parametros del nodo (id, _parentId, region, state)
//        var arrayJson = JSON.stringify(arrayNodosSaldo);
//
//        var options = {
//            "backdrop": "static",
//            "draggable": true,
//            "resizable": true
//        }
//
//
//
//        $.ajax({
//            type: 'POST',
//            url: "generarGrafica.htm",
//            dataType: "json",
//            //contentType: "application/json; charset=utf-8",
//            data: {arrayDatos: arrayJson},
//            success: function(data) {
//                //alert('sucess');
//                $('#basicModal').modal(options);
//                // alert('entra');
//                //  alert(data.toString());
//                //  alert(arrayDatos.toString());
//            },
//            error: function() {
//                //    alert('error');
//            },
//        });
//
//
//
//    });
//
//
//    $('#basicModal').on('shown.bs.modal', function() {
//        grafica.replot();
//        return false;
//    });
//
//
//
//    var valoreschar1 = [[[1, 2], [3, 5.12], [5, 13.1], [7, 33.6], [9, 25], [9, 100], [11, 240.9], [13, 800]]];
//    $.jqplot.config.enablePlugins = true;
//    var grafica = $.jqplot('chart1', valoreschar1,
//            {title: 'Grafica por defecto',
//                axes: {yaxis: {min: -10, max: 850}},
//                series: [{color: '#5FAB78'}]
//            });
//
//
//
//    $('#sub-graficaDias').click(function() {
//        //Detectar filas seleccionadas
//        var arrayNodosDias = $('#visorBalancesDias').treegrid('getChecked');
//        //Parametros del nodo (id, _parentId, region, state)
//        //  alert('grafica dias');
//    });
//
//    $('#sub-graficaHoras').click(function() {
//        //Detectar filas seleccionadas
//        var arrayNodosHoras = $('#visorBalancesHoras').treegrid('getChecked');
//        //Parametros del nodo (id, _parentId, region, state)
//        // alert('grafica horas');
//    });