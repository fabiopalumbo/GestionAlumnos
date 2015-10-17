$(document).ready(function() {

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
    
    $("#verMatricula").click(function(event) {

        event.preventDefault();
        
        var numAlumnosSelected = $("input:checked").length;
        if (numAlumnosSelected == 1) {
            var arrayIdAlumno = "";
            $("input:checked").each(function() {
                var values = $(this).val() + ";";
                arrayIdAlumno += values;
            });
            
            
            $("#listaIdAlumnoMat").val(arrayIdAlumno)
            
            $("#form-verMatricula").submit();

        }
        else {

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



function mostrarVentanaModal(mensaje) {
    $("#myModal").modal('show');
    $("#myModal .modal-body").text(mensaje);
}



