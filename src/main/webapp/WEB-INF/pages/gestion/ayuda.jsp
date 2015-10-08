
<%@ include file="/taglibs.jsp" %>
<jsp:directive.page import="org.displaytag.sample.*"/>
<security:authorize ifAnyGranted="ROLE_USER,ROLE_ADMIN">
    <div class="logo-cabecera">
        <img src="<c:url value='/img/viesgo.svg'/>"/>
    </div>
    <form class="form-centrado">
        <h2><fmt:message key="ayuda.title"></fmt:message></h2>
        <p>Versión ${version}</p>
        <p class="small">Versión Java ${version_java}</p>
    </form>
    <div class="form-descarga">
        <div class="row">
            <div class="col-sm-2">
                <img src="<c:url value='/img/ico-descarga.png'/>"/>
            </div>
            <div class="col-sm-10">
                <h3><fmt:message key="ayuda.label.manual"></fmt:message></h3>
                <p><a href="<c:url value='manual.htm'/>"><fmt:message key="ayuda.label.descargar"></fmt:message></a></p>
                </div>
            </div>
        </div>

</security:authorize>   