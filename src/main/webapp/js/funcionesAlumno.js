$(document).ready(function() {



//Limpia los errores de intentos de entrar.
    limpiaErroresLogin();
    iniciarToolTips();
    inicializarCalendarios();



  
   

    //Evento submit al eliminar un tipoBalance
    $("#btnEliminar_alumno").click(function(event) {

        event.preventDefault();
        
        var numAlumnosSelected = $("input:checked").length;
        if (numAlumnosSelected > 0) {
            var arrayIdAlumno = "";
            $("input:checked").each(function() {
                var values = $(this).val() + ";";
                arrayIdAlumno += values;
            });
            
            
            $("#listaIdAlumno").val(arrayIdAlumno)
            
            $("#form-eliminar").submit();

        }
        else if (numAlumnosSelected == 0) {

            mostrarVentanaModal("Seleccione un registro de la tabla");
            return false;
        }

    });


    $('#btnNuevo_alumno').click(function() {
        $('#modal-alumnoNuevo').modal('show')
    });
    
    $('#btnEditar_alumno').click(function() {
        
        var numAlumnosSelected = $("input:checked").length;
        if (numAlumnosSelected == 1) {
            var arrayIdAlumno = "";
            var value = $("input:checked").val();
            
            var etiquetaNombre = value + "nombre";
            var etiquetaApellidos = value + "apellidos";
            
            
            $('#'+etiquetaApellidos).html();
            
            $('#apellidosEditar').val($('#'+etiquetaApellidos).html());
            $('#nombreEditar').val($('#'+etiquetaNombre).html());
            $('#idAlumnoEditar').val(value);
            $('#modal-alumnoEditar').modal('show');
            
             
        }
        else if (numAlumnosSelected == 0) {

            mostrarVentanaModal("Seleccione un registro de la tabla");
            return false;
        }
        
        
        
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






function mostrarVentanaModal(mensaje) {
    $("#myModal").modal('show');
    $("#myModal .modal-body").text(mensaje);
}

function cerrarAgruparDatos() {
    $('#modal-agrupar').modal('hide');
}

