<%@ include file="/taglibs.jsp" %>
<jsp:directive.page import="org.displaytag.sample.*"/>
    <head>        
        <script type="text/javascript" src="<c:url value='/js/funcionesBalance.js'/>" charset="UTF-8"></script>
        <script type="text/javascript" src="<c:url value='/js/funcionesInformesXLS.js'/>" charset="UTF-8"></script>
        <script type="text/javascript" src="<c:url value='/js/funcionesFechas.js'/>" charset="UTF-8"></script>
    </head>
    <body>

         <div class="container">
             <div id="barraAcciones">
                 
                 <a href="<c:url value='/nuevo'/>"><img src="img/add_32.png"></a>
                 <a href="<c:url value='/eliminar'/>"><img src="img/cancel20.png"></a>
                 <a href="<c:url value='/editar'/>"><img src="img/edit.png"></a>
                 
             </div>
             
            <table id="tablaAlumnos" class="table table-condensed">
                <thead>
                    <tr>
                        
                        <th>Nombre</th>
                        <th>Apellidos</th>
                    </tr>
                </thead>
                <tbody>
                <c:forEach var="alumno" items="${listaAlumnos}">
                    <tr>  
                        <td name="id"><input name="checkBal" id="${alumno.idAlumno}" value="${alumno.idAlumno}" type="checkbox"/>
                        <label for="${alumno.idAlumno}"><span></span></label>
                        </td>
           

                        <td name="nombre"><c:out value="${alumno.nombre}" /></td>
                        <td name="apellidos"><c:out value="${alumno.apellidos}" /></td>
                    </tr>
                </c:forEach>
                </tbody>            
            </table>
        </div>

</body>


