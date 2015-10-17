<%@ include file="/taglibs.jsp" %>
<jsp:directive.page import="org.displaytag.sample.*"/>
<head>        
    <script type="text/javascript" src="<c:url value='/js/funcionesAsignatura.js'/>" charset="UTF-8"></script>
    </head>
<body>
    <div id="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12"> 
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

                    <!-- Ventana modal Nuevo Asignatura -->
                    <div class="modal fade" id="modal-asignaturaNuevo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-sm">
                            <div class="modal-content">
                                <form id="form-nuevo" method="POST" role="form" action="<c:url value='/gestion/asignatura/nuevo.htm'/>">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="myModalLabel">Nueva Asignatura</h4>
                                    </div>
                                    <div class="modal-body">

                                        <div id="form-agrupar">

                                            <div class="form-group">
                                                <label for="nombre" class="label-agrupar"><span>Nombre </span></label>
                                                <input id="nombre" name="nombre"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="descripcion" class="label-agrupar"><span>Descripcion </span></label>
                                                <input id="apellidos" name="descripcion"/>
                                            </div>

                                            <div class="form-group">
                                                <p class="valError" id="mensajeError"><i class=""></i></p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-eon">Aceptar</button>
                                        <a href="#" class="btn btn-eon" data-dismiss="modal">Cancelar</a>
                                    </div>
                                </form>
                            </div>
                        </div> 
                    </div>

                                    <!-- Ventana modal Editar Asignatura -->
                    <div class="modal fade" id="modal-asignaturaEditar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-sm">
                            <div class="modal-content">
                                <form id="form-editar" method="POST" role="form" action="<c:url value='/gestion/asignatura/editar.htm'/>">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="myModalLabel">Editar Asignatura</h4>
                                    </div>
                                    <div class="modal-body">

                                        <div id="form-aeditar">

                                            <div class="form-group">
                                                <label for="nombreEditar" class="label-agrupar"><span>Nombre </span></label>
                                                <input id="nombreEditar" name="nombreEditar" required/>
                                            </div>
                                            <div class="form-group">
                                                <label for="descripcionEditar" class="label-agrupar"><span>Descripcion </span></label>
                                                <input id="descripcionEditar" name="descripcionEditar" required/>
                                                <input type="hidden" id="idAsignaturaEditar" name="idAsignaturaEditar" value=""/>
                                            </div>

                                            <div class="form-group">
                                                <p class="valError" id="mensajeError"><i class=""></i></p>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" id="botonEditarAsignaturas" class="btn btn-eon">Editar</button>
                                        <a href="#" class="btn btn-eon" data-dismiss="modal">Cancelar</a>
                                        </div>
                                    </form>
                                </div>
                            </div> 
                        </div>
                        <form id="form-eliminar" method="POST" role="form" action="<c:url value='/gestion/asignatura/eliminar.htm'/>">
                        <input type="hidden" id="listaIdAsignatura" name="listaIdAsignatura" value=""/>
                    </form>
                    <div class="container">
                        <div id="barraAcciones">

                            <a id="btnNuevo_asig" href="#"><img src="../../img/add_32.png"></a>
                            <a id="btnEliminar_asig" href="#"><img src="../../img/cancel20.png"></a>
                            <a id="btnEditar_asig" href="#"><img src="../../img/edit.png"></a>
                            <a id="btnInicio_asig" href="<c:url value='/gestion/asignatura/menu.htm'/>"><img src="../../img/home_32.png"></a>
                            <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>
                        
                        </div>

                        <table id="tablaAsignatura" class="table table-condensed">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <c:forEach var="asig" items="${listaAsignaturas}">
                                    <tr>  
                                         <td name="id_asignatura">
                                            <input name="checkBal" id="${asig.idAsignatura}" value="${asig.idAsignatura}" type="checkbox"/>
                                        </td>


                                        <td id="${asig.idAsignatura}nombre" name="nombre"><c:out value="${asig.nombre}" /></td>
                                        <td id="${asig.idAsignatura}descripcion" name="descripcion"><c:out value="${asig.descripcion}" /></td>
                                        
                                    </tr>
                                </c:forEach>
                            </tbody>            
                        </table>
                    </div>

                    <!-- Menu Toggle Script -->
                    <script>
                        $("#menu-toggle").click(function (e) {
                            e.preventDefault();
                            $("#wrapper").toggleClass("toggled");
                        });
                    </script>        

                    <!-- Activamos ventana modal si hay mensajes del servidor -->            
                    <c:if test = "${fn:length(message)>0}">
                        <script type="text/javascript">
            var message = '<c:out value="${message}"/>';
            mostrarVentanaModal(message);
                        </script> 
                    </c:if>  
                </div>
            </div>
        </div>
    </div>       

</body>


