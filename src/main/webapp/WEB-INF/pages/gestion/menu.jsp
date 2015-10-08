<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<nav class="navbar navbar-eon navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>            
            <div id="titulo" class="navbar-brand"><img src="<c:url value='/img/logo_viesgo.png'/>"><small>${tipoBalanceSelected.descripcion}</small>                 

                <span>
                    <small> 
                        <c:if test="${balanceSelected!= null}">
                            <c:if test="${fn:length(balanceSelected.descripcion)>15}">
                                ${fn:substring(balanceSelected.descripcion, 0, 15)}(
                            </c:if>
                            <c:if test="${fn:length(balanceSelected.descripcion)<=15}">
                                ${balanceSelected.descripcion}(
                            </c:if>

                            <fmt:formatDate value="${balanceSelected.fecha_inicio}" pattern="dd/MM/yyyy" />-
                            <fmt:formatDate value="${balanceSelected.fecha_fin}" pattern="dd/MM/yyyy" />)
                            Version:<c:out value="${balanceSelected.version}" />           
                        </c:if>
                    </small> 
                </span>




            </div>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li><a id="botonInformes" href="<c:url value='/gestBal/informes.htm'/>"><img src="<c:url value='/img/ico-informes.png'/>" alt="Informes"><fmt:message key="menu.informes"/></a></li>
                        <security:authorize access="hasRole('ROLE_ADMIN')"> 
                    <li class="dropdown">
                        <a href="#" id="mantenimiento" role="button" class="dropdown-toggle" data-toggle="dropdown"><img src="<c:url value='/img/ico-mantenimiento.png'/>" alt="Mantenimiento"><fmt:message key="menu.mantenimiento"></fmt:message><span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="mantenimiento">
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="${ctx}/gestBal/tipoGrupo/list.htm">Grupo Balance</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="${ctx}/gestBal/grupoXntt/list.htm">Configuración Grupos</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="${ctx}/gestBal/tipoBalance/list.htm">Tipo Balance</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" id="plantillaCNMC" role="button" class="dropdown-toggle" data-toggle="dropdown"><img src="<c:url value='/img/ico-plantilla.png'/>" alt="Plantillas CNMC"><fmt:message key="menu.cnmc"></fmt:message><span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="mantenimiento">
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="${ctx}/gestBal/plantillaCNMC/showDownload.htm">Descarga plantilla CNMC</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="${ctx}/gestBal/plantillaCNMC/showUpload.htm">Actualiza plantilla CNMC</a></li>                                
                        </ul>
                    </li>
                </security:authorize>
                <li><a href="<c:url value='/gestBal/ayuda.htm'/>"><img src="<c:url value='/img/ico-ayuda.png'/>"><fmt:message key="menu.ayuda"/></a></li>
                <li><a href="<c:url value='/auth/logout.htm'/>"><img src="<c:url value='/img/ico-salir.png'/>"><fmt:message key="menu.salir"/></a></li>
            </ul>
        </div><!-- /.navbar-collapse -->          
    </div><!-- /.container-fluid -->
</nav>
