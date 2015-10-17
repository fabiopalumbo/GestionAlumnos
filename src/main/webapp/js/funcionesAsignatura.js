$(document).ready(function() {





  $("btnInicio_asig").click(function(event){
      
      
  });
   

    $("#btnEliminar_asig").click(function(event) {

        event.preventDefault();
        
        var numAsigSelected = $("input:checked").length;
        if (numAsigSelected > 0) {
            var arrayIdAsig = "";
            $("input:checked").each(function() {
                var values = $(this).val() + ";";
                arrayIdAsig += values;
            });
            
            
            $("#listaIdAsignatura").val(arrayIdAsig);
            
            $("#form-eliminar").submit();

        }
        else if (numAsigSelected == 0) {

            mostrarVentanaModal("Seleccione un registro de la tabla");
            return false;
        }

    });


    $('#btnNuevo_asig').click(function() {
        $('#modal-asignaturaNuevo').modal('show')
    });
    
    $('#btnEditar_asig').click(function() {
        
        var numAlumnosSelected = $("input:checked").length;
        if (numAlumnosSelected == 1) {
            var arrayIdAlumno = "";
            var value = $("input:checked").val();
            
            var etiquetaNombre = value + "nombre";
            var etiquetaDescripcion = value + "descripcion";
            
            
            $('#'+etiquetaDescripcion).html();
            
            $('#descripcionEditar').val($('#'+etiquetaDescripcion).html());
            $('#nombreEditar').val($('#'+etiquetaNombre).html());
            $('#idAsignaturaEditar').val(value);
            $('#modal-asignaturaEditar').modal('show');
            
             
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



