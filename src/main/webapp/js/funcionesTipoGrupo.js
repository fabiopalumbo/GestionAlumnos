$(document).ready(function() {
    if (document.getElementById("modal-nuevoGrupo")){
        //valErrorNew
        if (document.getElementsByClassName("valError").length){ 
            $('#modal-nuevoGrupo').modal('show');             
        }else{
            $('#modal-nuevoGrupo').modal('hide'); 
        }
    }

    if (document.getElementById("modal-editGrupo")){
        if (document.getElementsByClassName("valErrorEdit").length){ 
            $('#modal-editGrupo').modal('show');             
        }else{
            $('#modal-editGrupo').modal('hide');             
        }
    }

    //Evento submit al eliminar un tipoGrupo
    $("#botonEliminarTG").click(function() {
        var numRegistrosSel = $("input:checkbox[name='checkGrp']:checked").length;
        if (numRegistrosSel == 1) {
            var idGrupo = $("input:checkbox[name='checkGrp']:checked").val();
            $("#idGrupo").val(idGrupo);
        }
        else if (numRegistrosSel == 0) {
            //alert("Seleccione un registro de la tabla");
            $('#myModal').modal('show');
            $('#myModal .modal-body').text('Seleccione un registro de la tabla');
            return false;
        }
        else {
            var array = [];
            $("input:checkbox[name='checkGrp']:checked").each(function() {
                array.push($(this).val());
            });
            var idGrupo = array.join(';');
            $("#idGrupo").val(idGrupo);
        }
    });    
    
});

function verFichaNuevoGrupo() {
    $('#modal-nuevoGrupo').modal('show');
    //$('#mensaje').text('  ');
    //$("#imgEspera").css('visibility', 'hidden'); 
}     

function cerrarFichaNuevoGrupo(){
    $('#modal-nuevoGrupo').modal('hide'); 
}

function verFichaEditGrupo(idGrupo) {    
    $.ajax({
        type: 'POST',
        url: 'edit.htm',
        data: {'id_grupo': idGrupo},
        dataType: 'json',
        success: function(data) {             
            $('#id_grupoEdit').val(idGrupo);
            $('#cod_grupoEdit').val(data.cod_grupo);
            $('#descripcionedit').val(data.descripcion);
            $('#actividadEdit').val(data.actividad);
            $('#comboFlujoEdit').val(data.flujo);
            $('#comboClienteEdit').val(data.cliente);
            $('#comboTipoMedidaEdit').val(data.tipo_medida);            
            //$('#formTipoGrupo').val(data);                    
        },
        error: function (xhr, ajaxOptions, thrownError) {            
            alert(xhr.status);  
            alert(thrownError);
        }
    });    
    $('#modal-editGrupo').modal('show');
}     

function cerrarFichaEditGrupo(){
    $('#modal-editGrupo').modal('hide'); 
}

