$(document).ready(function() {
        if (document.getElementById("modal-nuevoGrupoXNTT")){
            //valErrorNew
            if (document.getElementsByClassName("valError").length){ 
                $('#modal-nuevoGrupoXNTT').modal('show');     
            }else{
                $('#modal-nuevoGrupoXNTT').modal('hide');     
            }
    }

    if (document.getElementById("modal-editGrupoXNTT")){                    
            if (document.getElementsByClassName("valErrorEdit").length){                             
                $('#modal-editGrupoXNTT').modal('show');             
            }else{
                $('#modal-editGrupoXNTT').modal('hide');             
            }
    }
        
    //Evento submit al eliminar un tipoGrupoXNTT
    $("#botonEliminarTGXNT").click(function() {
        var numRegistrosSel = $("input:checkbox[name='checkGXNT']:checked").length;
        if (numRegistrosSel == 1) {
            var idEliminar = $("input:checkbox[name='checkGXNT']:checked").val();
            $("#idGrupoXnttEliminar").val(idEliminar);
        }
        else if (numRegistrosSel == 0) {
            //alert("Seleccione un registro de la tabla");
            $("#myModal").modal('show');
            $("#myModal .modal-body").text("Seleccione un registro de la tabla");
            return false;
        }
        else {
            var array = [];
            $("input:checkbox[name='checkGXNT']:checked").each(function() {
                array.push($(this).val());
            });
            var idEliminar = array.join(';');
            $("#idGrupoXnttEliminar").val(idEliminar);
        }
    });
    
    // coeficiente nueva configuracion
    $("#txtCoeficienteNew").keydown(function(e) {
        // controla las pulsaciones permitiendo solo numeros punto decimal signo - y teclas de control (bckspc, del...)
        var keyCode = (e.keyCode == 'undefined') ? e.which : e.keyCode;        
        return teclaNumerica(keyCode);
    });
    // coeficiente filtro configuracion
    $("#txtCoeficienteFil").keydown(function(e) {
        // controla las pulsaciones permitiendo solo numeros punto decimal signo - y teclas de control (bckspc, del...)
        var keyCode = (e.keyCode == 'undefined') ? e.which : e.keyCode;        
        return teclaNumerica(keyCode);
    });
    // coeficiente edicion configuracion
    $("#txtCoeficienteEdt").keydown(function(e) {
        // controla las pulsaciones permitiendo solo numeros punto decimal signo - y teclas de control (bckspc, del...)
        var keyCode = (e.keyCode == 'undefined') ? e.which : e.keyCode;        
        return teclaNumerica(keyCode);
    });
    
       // Comprueba el submenu de exportacion del informe CNMC
    if (($("#errFDesde").length > 0) || ($("#errFHasta").length > 0) || ($("#errHora").length > 0)) {
        // Oculta o muestra la fecha 
        var texto = document.getElementById("txtHoraCNMC").value;
        var id_balance= document.getElementById("idBalanceExpCNMC").value;
        if ((texto != null) && (texto != "")) {
            document.getElementById("fHastaCNMC").value = undefined;
            document.getElementById("calHasta").style.display = "none";
        } else {
            document.getElementById("calHasta").style.display = "inline";
            document.getElementById("fHastaCNMC").value = document.getElementById("fHastaExpCNMC").value;
       }
       // marca el balance que esta siendo exportado
       $("input[name='checkBal'][value="+id_balance+"]").attr('checked',true);        
        // Hay errores mantiene el menu
        $("#submenu-CNMC").slideDown();
    } else {
        //No hay errores lo oculta
        $("#submenu-CNMC").slideUp();
    }        
     $('#modal-editGrupoXNTT').on('hidden.bs.modal', function () {
            $(this).removeData('modal');
     });
    
});

function verFichaNuevoGrupoXNTT() {
    $('#modal-nuevoGrupoXNTT').modal('show');
    //$('#mensaje').text('  ');
    //$("#imgEspera").css('visibility', 'hidden'); 
}     

function cerrarFichaNuevoGrupoXNTT(){
    $('#modal-nuevoGrupoXNTT').modal('hide'); 
}

function verFichaFiltroGrupoXNTT() {
    $('#modal-filtroGrupoXNTT').modal('show');
    //$('#mensaje').text('  ');
    //$("#imgEspera").css('visibility', 'hidden'); 
}     

function cerrarFichaFiltroGrupoXNTT(){
    $('#modal-filtroGrupoXNTT').modal('hide'); 
    $('#modal-filtroGrupoXNTT').removeData("modal");
}

function verFichaEditGrupoXNTT(idGrupoXNT) {    
    $.ajax({
        type: 'POST',
        url: 'edit.htm',
        data: {'id_grupo_x_ntt': idGrupoXNT},
        dataType: 'json',
        success: function(data) {             
            $('#id_grupo_x_ntt').val(idGrupoXNT);
            $('#id_tipo_balanceEdit').val(data.id_tipo_balance);
            $('#id_grupoEdit').val(data.id_grupo);
            $('#id_tipo_varusoEdit').val(data.id_tipo_varuso);
            $('#id_tipo_pfEdit').val(data.id_tipo_pf);
            $('#id_tipo_magnitudEdit').val(data.id_tipo_magnitud);
            $('#p1Edit').val(data.p1);
            $('#p2Edit').val(data.p2);
            $('#part_espEdit').val(data.part_esp);
            $('#txtCoeficienteEdt').val(data.coeficiente);
            $('#id_nivel_tensionEdit').val(data.id_nivel_tension);
            $('#tipo_fronteraEdit').val(data.tipo_frontera);
            $('#id_origen_gdrEdit').val(data.id_origen_gdr);
            //$('#formTipoGrupo').val(data);                                  
        },
        error: function (xhr, ajaxOptions, thrownError) {            
            alert(xhr.status);  
            alert(thrownError);
        }
    });    
    $('#modal-editGrupoXNTT').modal('show');
}     

function cerrarFichaEditGrupoXNTT(){
    $('#modal-editGrupoXNTT').find(".valErrorEdit").empty();
    $('#modal-editGrupoXNTT').modal('hide'); 
    
}
