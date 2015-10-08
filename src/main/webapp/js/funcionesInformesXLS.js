$(document).ready(function() {

    eventosSubmenuXls();

   

    // Prepara la informacion del submenu para exportar un informe CNMC
    $("#sub-exportar").click(function(event) {

        var numBalancesSelected = $("#tablaBalances > tbody > tr > td > input:checked").length;

        if (numBalancesSelected == 1) {

            var fechaInicio = $("#tablaBalances > tbody > tr > td > input:checked").parent().siblings("td[name=fecha_inicio]").text();
            var fechaFin = $("#tablaBalances > tbody > tr > td > input:checked").parent().siblings("td[name=fecha_fin]").text();
            $("#fDesdeExportar").val(fechaInicio);
            $("#fHastaExportar").val(fechaFin);
            $(".sub-exportar").slideToggle();
        } else {
            //alert('Selecciona un unico registro');
            
            mostrarVentanaModal("Selecciona un unico registro");
        }

    });

    //Evento submit al exportar perdidas
    $("#exportarPerdidas").click(function(event) {
        event.preventDefault();
        if ($("#tablaBalances > tbody > tr > td > input:checked").length) {
            // Si llega desde INFORMES            
            var numBalancesSelected = $("#tablaBalances > tbody > tr > td > input:checked").length;
            if (numBalancesSelected == 1) {
                //redirecciona a generar el informe 
                var idBalance = $("#tablaBalances > tbody > tr > td > input:checked").val();
                var baseUrl = location.href.substring(0, location.href.lastIndexOf('/'));
                var urlPerdidas = baseUrl + "/exportarPerdidas.xls?Id_Balance=" + idBalance;
                //            $('*').css('cursor', 'wait');          
                $("#exportarPerdidas").attr('href', urlPerdidas);
                location.href = urlPerdidas;
                $("#exportarPerdidas").submit();
            } else if (numBalancesSelected == 0) {
                //alert("Seleccione un registro de la tabla");
                
                mostrarVentanaModal("Seleccione un registro de la tabla");
                return false;
            }
            else {
               // alert("No es posible generar el informe de nivel de tensión para más de un balance");
                mostrarVentanaModal("No es posible generar el informe de nivel de tensión para más de un balance");
                
                return false;
            }
        } else {
            var idBalance = $("#idBalanceExportarSaldo").val();
            if (idBalance != null) {
                var baseUrl = location.href.substring(0, location.href.lastIndexOf('/'));
                var urlPerdidas = baseUrl + "/exportarPerdidas.xls?Id_Balance=" + idBalance;
                //            $('*').css('cursor', 'wait');          
                $("#exportarPerdidas").attr('href', urlPerdidas);
                location.href = urlPerdidas;
                $("#exportarPerdidas").submit();
            } else {
                //alert("Es necesario seleccionar un balance");
               
                mostrarVentanaModal("Seleccione un registro de la tabla");
            }

        }
    });

    // Prepara la informacion del submenu para exportar un informe CNMC
    $("#sub-exportarCNMC").click(function(event) {
        var numBalancesSelected = $("#tablaBalances > tbody > tr > td > input:checked ").length;
        if (numBalancesSelected == 1) {
            //redirecciona a generar el informe CNMC
            var idBalance = $("#tablaBalances > tbody > tr > td > input:checked").val();
            var desde = 'fDesde_' + idBalance;
            var hasta = 'fHasta_' + idBalance;
            var valorDesde = document.getElementById(desde).value;
            var valorHasta = document.getElementById(hasta).value;
            document.getElementById("idBalanceExpCNMC").value = idBalance;
            document.getElementById("fDesdeExpCNMC").value = valorDesde;
            document.getElementById("fHastaExpCNMC").value = valorHasta;
            //asigna los valores a los campos de fecha para que sean visibles
            document.getElementById("fDesdeCNMC").value = valorDesde;
            document.getElementById("fHastaCNMC").value = valorHasta;
            document.getElementById("txtHoraCNMC").value = "";
            document.getElementById("horaExpCNMC").value = "";
            document.getElementById("calHasta").style.display = "inline";
            document.getElementById("fHastaCNMC").value = document.getElementById("fHastaExpCNMC").value;
            $("#submenu-CNMC").slideToggle();
        } else if (numBalancesSelected == 0) {
            //alert("Seleccione un registro de la tabla");
           
             mostrarVentanaModal("Seleccione un registro de la tabla");
            return false;
        }
        else {
            //alert("No es posible generar el informe CNMC para más de un balance");
          
             mostrarVentanaModal("No es posible generar el informe CNMC para más de un balance");
            return false;
        }
    });

    $("#checkCNMC").click(function(event) {
        if ($("#checkCNMC").is(':checked')) {
            document.getElementById("fHastaCNMC").value = document.getElementById("fHastaExpCNMC").value;
            document.getElementById("txtHoraCNMC").value = "";
            document.getElementById("calHasta").style.display = "inline";
            document.getElementById("controlHoraCNMC").style.display = "none";
        } else {
            //se muestra la hora vacia y la fecha hasta
            document.getElementById("fHastaCNMC").value = document.getElementById("fHastaExpCNMC").value;
            document.getElementById("calHasta").style.display = "inline";
            document.getElementById("controlHoraCNMC").style.display = "inline";
            document.getElementById("txtHoraCNMC").value = "";

        }
    });

    //Evento submit al exportar perdidas
    $("#botonExpCNMC").click(function(event) {
        var numBalancesSelected = $("#tablaBalances > tbody > tr > td > input:checked").length;
        if (numBalancesSelected == 1) {
            // recupera la hora marcada            
            var hora = document.getElementById("txtHoraCNMC").value;
            document.getElementById("horaExpCNMC").value = hora;
        } else if (numBalancesSelected == 0) {
            //alert("Seleccione un registro de la tabla");
          
            mostrarVentanaModal("Seleccione un registro de la tabla");
            return false;
        }
        else {
            //alert("No es posible generar el informe de nivel de tensión para más de un balance");
           
             mostrarVentanaModal("No es posible generar el informe de nivel de tensión para más de un balance");
            return false;
        }
    });

    // Si cambia la FDesde se oculta el posible mensaje de error
    $("#fDesdeCNMC").change(function() {
        $("#errFDesde").css("display", "none");
    });

    // Si cambia la FHasta se oculta el posible mensaje de error
    $("#fHastaCNMC").change(function() {
        $("#errFHasta").css("display", "none");
    });


    // Si cambia la hora se oculta el posible mensaje de error
    $("#txtHoraCNMC").change(function() {
        $("#errHora").css("display", "none");
    });

    $("#txtHoraCNMC").keydown(function(e) {
        // controla las pulsaciones permitiendo solo numeros y teclas de control (bckspc, del...)
        var keyCode = (e.keyCode == 'undefined') ? e.which : e.keyCode;
        if (((keyCode >= 48) && (keyCode <= 57)) || ((keyCode >= 96) && (keyCode <= 105))) {
            return true;
        } else {
            if ((keyCode > 36) && (keyCode < 41)) {
                return true;
            } else {
                if ((keyCode == 8) || (keyCode == 127)) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    });

    $("#txtHoraCNMC").keyup(function(e) {
        // Oculta o muestra la fecha 
        var texto = document.getElementById("txtHoraCNMC").value;
        if ((texto != null) && (texto != "")) {
            document.getElementById("fHastaCNMC").value = undefined;
            document.getElementById("calHasta").style.display = "none";
        } else {
            document.getElementById("calHasta").style.display = "inline";
            document.getElementById("fHastaCNMC").value = document.getElementById("fHastaExpCNMC").value;
        }
    });
});

function eventosSubmenuXls() {


    // Comprueba el submenu de exportacion del informe CNMC
    if (($("#errFDesde").length > 0) || ($("#errFHasta").length > 0) || ($("#errHora").length > 0)) {
        // Oculta o muestra la fecha 
        var texto = document.getElementById("txtHoraCNMC").value;
        var id_balance = document.getElementById("idBalanceExpCNMC").value;
        if ((texto != null) && (texto != "")) {
            document.getElementById("fHastaCNMC").value = undefined;
            document.getElementById("calHasta").style.display = "none";
        } else {
            document.getElementById("calHasta").style.display = "inline";
            document.getElementById("fHastaCNMC").value = document.getElementById("fHastaExpCNMC").value;
        }
        // marca el balance que esta siendo exportado
        $("input[name='checkBal'][value=" + id_balance + "]").attr('checked', true);
        // Hay errores mantiene el menu
        $("#submenu-CNMC").slideDown();
    } else {
        //No hay errores lo oculta
        $("#submenu-CNMC").slideUp();
    }
    // Comprueba el submenu de exportacion de los grupos 
    //  metemos un campo ID oculto y si falla una validacion se marca este campo, asi evitamos comprobar todos        
    if (document.getElementById("submenu-nuevoGrupo")) {

        if (document.getElementsByClassName("valError").length) {
            $("#submenu-nuevoGrupo").slideDown();
        } else {
            $("#submenu-nuevoGrupo").slideUp();
        }
    }
}

function exportarPerdidas() {
    // Si llega desde el Visor de SALDO
    idBalance = $("#idBalance").val();
    var baseUrl = location.href.substring(0, location.href.lastIndexOf('/'));
    var urlPerdidas = baseUrl + "/exportarPerdidas.xls?Id_Balance=" + idBalance;
    $("#exportarPerdidas").attr('href', urlPerdidas);
    location.href = urlPerdidas;
}

//Evento submit al exportar perdidas
function exportarCNMC() {
    // Si llega desde el Visor de SALDO
    idBalance = $("#idBalance").val();
    var baseUrl = location.href.substring(0, location.href.lastIndexOf('/'));
    var urlCNMC = baseUrl + "/exportarCNMC.xls?Id_Balance=" + idBalance;
    $("#exportarCNMC").attr('href', urlCNMC);
    location.href = urlCNMC;

}
