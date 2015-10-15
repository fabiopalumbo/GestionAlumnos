<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>

<div id="padre">
    <div id="flotante"></div>
    <div id="hijo">

        <div>

            <div>
                <img src="../img/estudiante.png">
                <a href="<c:url value='/gestion/alumno/list.htm'/>">Gestion Alumnos</a>
            </div>
            <div>
                <img src="../img/asignatura.png">
                <a href="<c:url value='/gestion/asignatura/list.htm'/>">Gestion Asignaturas</a>
            </div>

        </div>

    </div>
</div>



