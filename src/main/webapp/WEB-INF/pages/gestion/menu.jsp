<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>


<!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        PROYECTO EJEMPLO
                    </a>
                </li>
                <li>
                    <a href="<c:url value='/gestion/alumno/list.htm'/>">Gestion Alumnos</a>
                </li>
                <li>
                    <a href="<c:url value='/gestion/asignatura/list.htm'/>">Gestion Asignaturas</a>
                </li>
                <li>
                    <a href="<c:url value='/gestion/matricula/list.htm'/>">Matriculas</a>
                </li>
               
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->




