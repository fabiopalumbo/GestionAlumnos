<%@ include file="/taglibs.jsp" %>
<jsp:directive.page import="org.displaytag.sample.*"/>
<head>        
    <script type="text/javascript" src="<c:url value='/js/funcionesMatricula.js'/>" charset="UTF-8"></script>
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

                    

                   


                    <div class="container">
                        <div id="barraAcciones">

                            <a id="btnNuevo_matricula" href="#"><img src="../../img/add_32.png"></a>
                            <a id="btnEliminar_matricula" href="#"><img src="../../img/cancel20.png"></a>
                            <a id="btnEditar_matricula" href="#"><img src="../../img/edit.png"></a>
                            <a id="btnInicio_matricula" href="<c:url value='/gestion/alumno/menu.htm'/>"><img src="../../img/home_32.png"></a>
                            <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>
                        </div>
                    
                    
                    <form id="form-matAlumno" method="POST" role="form" action="<c:url value='/gestion/asignatura/.htm'/>">
                          <select name="comboAlumno">
                            <c:forEach var="alumno" items="${alumnosCombo}">
                                <option value="${alumno.idAlumno}">${alumno.nombre}</option>  
                            </c:forEach>
                        </select>
                    </form>  

                        <table id="tablaAlumnos" class="table table-condensed">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Alumno</th>
                                    <th>Asignatura</th>
                                </tr>
                            </thead>
                            <tbody>
                                <c:forEach var="mat" items="${listaMatriculas}">
                                    <tr>  
                                        <td name="id_matricula">
                                            <input name="checkBal" id="${mat.idMatricula}" value="${mat.idMatricula}" type="checkbox"/>
                                        </td>


                                        <td><c:out value="${mat.nombreAlumno}" /></td>
                                        <td ><c:out value="${mat.nombreAsignatura}" /></td>
                                    </tr>
                                </c:forEach>
                            </tbody>            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
                            
   

    <!-- Menu Toggle Script -->
    <script>
    $("#menu-toggle").click(function(e) {
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

</body>


