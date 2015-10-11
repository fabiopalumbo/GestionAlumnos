<%@ include file="/taglibs.jsp" %>
<jsp:directive.page import="org.displaytag.sample.*"/>
<head>        
    <script type="text/javascript" src="<c:url value='/js/funcionesGestor.js'/>" charset="UTF-8"></script>
    <script type="text/javascript" src="<c:url value='/js/funcionesFechas.js'/>" charset="UTF-8"></script>
</head>
<body>

    <!-- Ventana modal para mostrar mensajes cliente y servidor -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Mensaje</h4>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-eon" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>   

    <!-- Ventana modal Nuevo/Editar Alumno -->
    <div class="modal fade" id="modal-alumnoNuevo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-sm">
            <div class="modal-content">
                <form id="form-nuevo" method="POST" role="form" action="<c:url value='/nuevo.htm'/>">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">Nuevo Alumno</h4>
                    </div>
                    <div class="modal-body">

                        <div id="form-agrupar">

                            <div class="form-group">
                                <label for="nombre" class="label-agrupar"><span>Nombre </span></label>
                                <input id="nombre" name="nombre"/>
                            </div>
                            <div class="form-group">
                                <label for="apellidos" class="label-agrupar"><span>Apellidos </span></label>
                                <input id="apellidos" name="apellidos"/>
                            </div>

                            <div class="form-group">
                                <p class="valError" id="mensajeError"><i class=""></i></p>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-eon">Aceptar</button>
                        <a href="#" class="btn btn-eon" data-dismiss="modal"><fmt:message key="tipo_grupo.button.cancelar"></fmt:message></a>
                        </div>
                    </form>
                </div>
            </div> 
        </div>

        <div class="modal fade" id="modal-alumnoEditar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-sm">
                <div class="modal-content">
                    <form id="form-editar" method="POST" role="form" action="<c:url value='/editar.htm'/>">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">Editar Alumno</h4>
                    </div>
                    <div class="modal-body">

                        <div id="form-aeditar">

                            <div class="form-group">
                                <label for="nombre" class="label-agrupar"><span>Nombre </span></label>
                                <input id="nombreEditar" name="nombreEditar" required/>
                            </div>
                            <div class="form-group">
                                <label for="apellidos" class="label-agrupar"><span>Apellidos </span></label>
                                <input id="apellidosEditar" name="apellidosEditar" required/>
                                <input type="hidden" id="idAlumnoEditar" name="idAlumnoEditar" value=""/>
                            </div>

                            <div class="form-group">
                                <p class="valError" id="mensajeError"><i class=""></i></p>
                            </div>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="submit" id="botonEditarAlumnos" class="btn btn-eon">Editar</button>
                        <a href="#" class="btn btn-eon" data-dismiss="modal"><fmt:message key="tipo_grupo.button.cancelar"></fmt:message></a>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    <form id="form-eliminar" method="POST" role="form" action="<c:url value='/eliminar.htm'/>">
        <input type="hidden" id="listaIdAlumno" name="listaIdAlumno" value=""/>
    </form>
    <div class="container">
        <div id="barraAcciones">

            <a id="btnNuevo" href="#"><img src="img/add_32.png"></a>
            <a id="btnEliminar" href="#"><img src="img/cancel20.png"></a>
            <a id="btnEditar" href="#"><img src="img/edit.png"></a>

        </div>

        <table id="tablaAlumnos" class="table table-condensed">
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="alumno" items="${listaAlumnos}">
                    <tr>  
                        <td name="id_alumno">
                            <input name="checkBal" id="${alumno.idAlumno}" value="${alumno.idAlumno}" type="checkbox"/>
                        </td>


                        <td id="${alumno.idAlumno}nombre" name="nombre"><c:out value="${alumno.nombre}" /></td>
                        <td id="${alumno.idAlumno}apellidos"name="apellidos"><c:out value="${alumno.apellidos}" /></td>
                    </tr>
                </c:forEach>
            </tbody>            
        </table>
    </div>

    <!-- Activamos ventana modal si hay mensajes del servidor -->            
    <c:if test = "${fn:length(message)>0}">
        <script type="text/javascript">
            var message = '<c:out value="${message}"/>';
            mostrarVentanaModal(message);
        </script> 
    </c:if>   

</body>


