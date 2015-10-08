<%@ include file="/taglibs.jsp" %>
<jsp:directive.page import="org.displaytag.sample.*"/>
<security:authorize ifAnyGranted="ROLE_USER,ROLE_ADMIN">
    <head>        
        <script type="text/javascript" src="<c:url value='/js/funcionesBalance.js'/>" charset="UTF-8"></script>
        <script type="text/javascript" src="<c:url value='/js/funcionesInformesXLS.js'/>" charset="UTF-8"></script>
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
              
            <!-- Ventana modal para mostrar la ventana de agrupacion -->
            <div class="modal fade" id="modal-agrupar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">Agrupar</h4>
                        </div>
                        <div class="modal-body">
                            <div id="form-agrupar">
                                <div class="form-group">
                                    <label for="comboNivel1" class="label-agrupar"><span>NIVEL 1: </span></label>                                 
                                    <select id="comboNivel1" class="form-control select-agrupar" name="comboNivel1">                                    
                                        <option <c:if test="${comboNivel1 == 'No Aplica'}"> selected </c:if> value="No Aplica">No Aplica</option>
                                        <option <c:if test="${comboNivel1 == 'Distribuidora'}"> selected </c:if> value="Distribuidora">Distribuidora</option>
                                        <option <c:if test="${comboNivel1 == 'Id Tipo PF'}"> selected </c:if> value="Id Tipo PF">Id Tipo PF</option>
                                        <option <c:if test="${comboNivel1 == 'Grupo'}"> selected </c:if> value="Grupo">Grupo</option>
                                        <option <c:if test="${comboNivel1 == 'Nivel Tensión'}"> selected </c:if> value="Nivel Tensión">Nivel Tensión</option>
                                             
                                    </select>                                                                    
                                </div>
                                <div class="form-group">
                                    <label for="comboNivel2" class="label-agrupar"><span>NIVEL 2: </span></label>
                                    <select id="comboNivel2" class="form-control select-agrupar" name="comboNivel2">
                                        <option <c:if test="${comboNivel2 == 'No Aplica'}"> selected </c:if> value="No Aplica">No Aplica</option>
                                        <option <c:if test="${comboNivel2 == 'Distribuidora'}"> selected </c:if> value="Distribuidora">Distribuidora</option>
                                        <option <c:if test="${comboNivel2 == 'Id Tipo PF'}"> selected </c:if> value="Id Tipo PF">Id Tipo PF</option>
                                        <option <c:if test="${comboNivel2 == 'Grupo'}"> selected </c:if> value="Grupo">Grupo</option>
                                        <option <c:if test="${comboNivel2 == 'Nivel Tensión'}"> selected </c:if> value="Nivel Tensión">Nivel Tensión</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="comboNivel3" class="label-agrupar"><span>NIVEL 3: </span></label>                                                                                                   
                                    <select id="comboNivel3" class="form-control select-agrupar" name="comboNivel3">
                                        <option <c:if test="${comboNivel3 == 'No Aplica'}"> selected </c:if> value="No Aplica">No Aplica</option>
                                        <option <c:if test="${comboNivel3 == 'Distribuidora'}"> selected </c:if> value="Distribuidora">Distribuidora</option>
                                        <option <c:if test="${comboNivel3 == 'Id Tipo PF'}"> selected </c:if> value="Id Tipo PF">Id Tipo PF</option>
                                        <option <c:if test="${comboNivel3 == 'Grupo'}"> selected </c:if> value="Grupo">Grupo</option>
                                        <option <c:if test="${comboNivel3 == 'Nivel Tensión'}"> selected </c:if> value="Nivel Tensión">Nivel Tensión</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="comboNivel4" class="label-agrupar"><span>NIVEL 4: </span></label>                                                                                                   
                                    <select id="comboNivel4" class="form-control select-agrupar" name="comboNivel4">
                                        <option <c:if test="${comboNivel4 == 'No Aplica'}"> selected </c:if> value="No Aplica">No Aplica</option>
                                        <option <c:if test="${comboNivel4 == 'Distribuidora'}"> selected </c:if> value="Distribuidora">Distribuidora</option>
                                        <option <c:if test="${comboNivel4 == 'Id Tipo PF'}"> selected </c:if> value="Id Tipo PF">Id Tipo PF</option>
                                        <option <c:if test="${comboNivel4 == 'Grupo'}"> selected </c:if> value="Grupo">Grupo</option>
                                        <option <c:if test="${comboNivel4 == 'Nivel Tensión'}"> selected </c:if> value="Nivel Tensión">Nivel Tensión</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <p class="valError" id="mensajeError"><i class=""></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="botonAgruparInformes" class="btn btn-eon">Agrupar</button>
                            <button id="botonGuardarInformes" class="btn btn-eon">Guardar</button>
                            <a href="#" class="btn btn-eon" data-dismiss="modal"><fmt:message key="tipo_grupo.button.cancelar"></fmt:message></a>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="submenu sub-exportar">
                <h2><fmt:message key="informes.submenu.exportar.title"></fmt:message></h2>
            <form id="form-exportar" method="POST" class="form-inline" role="form" action="<c:url value='exportarBalance.htm'/>">
                <input type="hidden" id="idTipoBalanceExportar" name="idTipoBalanceExportar" value=""/>
                <input type="hidden" id="idBalanceExportar" name="idBalanceExportar" value=""/>
                <input type="hidden" id="errorExportar" name="errorExportar" value=""/>
                <input type="hidden" id="mostrar" name="mostrar" value="${mostrar}" />
                <input type="hidden" id="agrupar" name="agrupar" value="${agrupar}" />
                <input type="hidden" id="ordenar" name="ordenar" value="${ordenar}" />
                <input type="hidden" id="download_exportar_token_value_id" name="download_exportar_token_value_id"/>

                <div class="form-group">
                    <label for=""><fmt:message key="informes.submenu.exportar.label.desde"></fmt:message></label>
                        <div class="form-calendar">
                            <input type="text" class="form-control calendario" id="fDesdeExportar" required name="fDesdeExportar" placeholder="dd/mm/aaaa"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for=""><fmt:message key="informes.submenu.exportar.label.hasta"></fmt:message></label>
                        <div class="form-calendar">
                            <input type="text" class="form-control calendario" id="fHastaExportar" required name="fHastaExportar" placeholder="dd/mm/aaaa"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for=""><fmt:message key="informes.submenu.exportar.label.profundidad"></fmt:message></label>
                        <select class="form-control" id="comboProfundidad" name="comboProfundidad">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>Total</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for=""><fmt:message key="informes.submenu.exportar.label.tipo"></fmt:message></label>
                        <select class="form-control" id="comboTipo" name="comboTipo">
                            <option>${nemonico}</option>
                            <option>Horario</option>
                            <option>Diario</option>
                        </select>
                    </div>
                    <button id="botonExportar" type="submit" class="btn btn-eon"><fmt:message key="informes.submenu.exportar.button"></fmt:message></button>
                <a href="#" class="cerrar-submenu"><fmt:message key="informes.button.cancelar"></fmt:message></a>
                </form>
            </div>

        <!-- Solo el rol Admin podra crear nuevos balances -->
        <security:authorize access="hasRole('ROLE_ADMIN')">    
            <div class="submenu sub-nuevo">
                <h2><fmt:message key="informes.submenu.nuevo.title"></fmt:message></h2>
                <form id="form-nuevoBal" method="POST" class="form-inline" role="form" action="<c:url value='nuevoBalance.htm'/>">
                    <input type="hidden" id="idTipoBalanceNuevo" name="idTipoBalanceNuevo" value=""/>
                    <div class="form-group">
                        <label for=""><fmt:message key="informes.submenu.nuevo.label.descripcion"></fmt:message></label>
                            <input type="text" class="form-control" id="descripcion" size="75" maxlength="250" required name="descripcion">
                        </div>
                        <div class="form-group">
                            <label for=""><fmt:message key="informes.submenu.nuevo.label.desde"></fmt:message></label>
                            <div class="form-calendar">
                                <input type="text" class="form-control calendario" id="fDesdeNuevo" value="${fechaDefectoDesde}" required name="fDesdeNuevo" placeholder="dd/mm/aaaa"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for=""><fmt:message key="informes.submenu.nuevo.label.hasta"></fmt:message></label>
                            <div class="form-calendar">
                                <input type="text" class="form-control calendario" id="fHastaNuevo"  value="${fechaDefectoHasta}" required name="fHastaNuevo" placeholder="dd/mm/aaaa"/>
                        </div>
                    </div>
                    <button id="botonNuevoBal" type="submit" class="btn btn-eon"><fmt:message key="informes.submenu.nuevo.button"></fmt:message></button>
                    <a href="#" class="cerrar-submenu"><fmt:message key="informes.button.cancelar"></fmt:message></a>
                    </form>

                </div>
        </security:authorize>

        <div class="submenu sub-filtrar">
            <h2><fmt:message key="informes.submenu.filtrar.title"></fmt:message></h2>
            <form id="form-filtrar" name="form-filtrar" method="POST" class="form-inline" role="form" action="<c:url value='filtroBalances.htm'/>">
                <input type="hidden" id="idTipoBalanceFiltrar" name="idTipoBalanceFiltrar" value="${idTipoBalanceFiltrar}"/>
                <input type="hidden" id="filtro" name="filtro" value="${filtro}"/>
                <div class="form-group">
                    <label for=""><fmt:message key="informes.submenu.filtrar.label.desde"></fmt:message></label>
                        <div class="form-calendar">
                            <input type="text" class="form-control calendario" id="fDesdeFiltrar" value="${fechaDefectoDesde}" required name="fDesdeFiltrar" placeholder="dd/mm/aaaa">
                    </div>
                </div>
                <div class="form-group">
                    <label for=""><fmt:message key="informes.submenu.filtrar.label.hasta"></fmt:message></label>
                        <div class="form-calendar">
                            <input type="text" class="form-control calendario" id="fHastaFiltrar" value="${fechaDefectoHasta}" required name="fHastaFiltrar" placeholder="dd/mm/aaaa"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for=""><fmt:message key="informes.submenu.filtrar.label.tipo"/></label>

                    <select <c:if test="${fn:length(listaTipoBalance) == 1}"> disabled=""</c:if> class="form-control" id="comboTipoBalance" name="comboTipoBalance">
                        <c:forEach var="tipoBalance" items="${listaTipoBalance}">
                            <option <c:if test="${tipoBalance.id_tipo_balance == tipoBalanceSelected.id_tipo_balance}"> selected="true" </c:if> value=<c:out value="${tipoBalance.id_tipo_balance}"/>>
                                <c:out value="${tipoBalance.descripcion}" />
                            </option>     
                        </c:forEach>		
                    </select>
                </div>
                <button id="botonFiltrar" type="submit" class="btn btn-eon"><fmt:message key="informes.submenu.filtrar.button"></fmt:message></button>
                <a href="#" class="cerrar-submenu"><fmt:message key="informes.button.cancelar"></fmt:message></a>
                </form>
            </div>

            <div id="submenu-CNMC" class="submenu sub-exportarCNMC">
                <h2><fmt:message key="informes.submenu.cnmc.title"></fmt:message></h2>
            <form:form id="form-CNMC" name="form-CNMC" method="POST" class="form-inline" role="form" action="exportarCNMC.xls" commandName="val">       
                <form:input path="download_token_value_id" type="hidden" id="download_token_value_id"/>
                <form:input path= "idBalance" type="hidden" id="idBalanceExpCNMC" name="idBalanceCNMC" /> 
                <form:input path= "fDesdeBalance" type="hidden" id="fDesdeExpCNMC" name="Fecha_Desde" placeholder="dd/mm/aaaa"/>
                <form:input path= "fHastaBalance" type="hidden" id="fHastaExpCNMC" name="Fecha_Hasta" placeholder="dd/mm/aaaa"/>
                <form:input path= "horaBalance" type="hidden" id="horaExpCNMC" name="HoraCNMC"/>
                <div class="form-group">
                    <fmt:message key="informes.submenu.cnmc.label.desde"></fmt:message>
                        <div class="form-calendar">
                        <form:input path="fDesdeExportar" type="text" class="form-control calendario" id="fDesdeCNMC" name="fDesdeFiltrar"  placeholder="dd/mm/aaaa"/>                                                       
                    </div>
                </div>                                
                <form:errors id="errFDesde" path="fDesdeExportar" class="valError"/>
                <div class="form-group" id="calHasta">
                    <fmt:message key="informes.submenu.cnmc.label.hasta"></fmt:message>
                        <div class="form-calendar">                    
                        <form:input path="fHastaExportar" type="text" class="form-control calendario" id="fHastaCNMC" name="fHastaFiltrar" placeholder="dd/mm/aaaa"/>                    
                    </div>
                    <form:errors id="errFHasta" path="fHastaExportar" class="valError"/>
                </div>
                <div class="form-group" id="controlHoraCNMC">
                    <fmt:message key="informes.submenu.cnmc.label.hora"/>
                    <form:input path= "horaExportar" type="text" class="form-control" id="txtHoraCNMC" size="3" maxlength="2"/>
                    <form:errors id="errHora" path="horaExportar" class="valError" />
                </div>
                <div class="form-group">
                    <form:checkbox path="dh" id="checkCNMC" name="checkCNMC"/>
                    <label for="checkCNMC"><span> DH</span></label>
                </div>
                <button id="botonExpCNMC" type="submit" class="btn btn-eon"><fmt:message key="informes.submenu.cnmc.button"></fmt:message></button>
                <a id="cancelarCNMC" href="#" class="cerrar-submenu"><fmt:message key="informes.button.cancelar"></fmt:message></a>
            </form:form>
        </div>           

            <!-- Solo el rol Admin podra Eliminar  balances -->
        <security:authorize access="hasRole('ROLE_ADMIN')">     
            <div class="submenu sub-eliminar">
                <h2><fmt:message key="informes.submenu.eliminar.title"></fmt:message></h2>
                <form id="form-eliminar" method="POST" class="form-inline" role="form" action="<c:url value='eliminar.htm'/>">
                    <input type="hidden" id="idBalance" name="idBalance" value=""/>
                    <input type="hidden" id="idTipoBalanceEliminar" name="idTipoBalanceEliminar" value=""/>

                    <span class="info-submenu"><fmt:message key="informes.submenu.eliminar.confirmacion"></fmt:message></span>
                    <button id="botonEliminar" type="submit" class="btn btn-eon"><fmt:message key="informes.submenu.eliminar.button"></fmt:message></button>
                    <a href="#" class="cerrar-submenu"><fmt:message key="informes.button.cancelar"></fmt:message></a>
                    </form> 
                </div>
        </security:authorize>


        <div class="container">
            <table id="tablaBalances" class="table table-condensed">
                <thead>
                    <tr>
                        <th>
                            <security:authorize access="hasRole('ROLE_ADMIN')"> 
                                <a id="sub-nuevo" class="abrir-submenu" href="#">
                                    <img src="<c:url value='/img/ico-nuevo.png'/>" data-toggle="tooltip" data-placement="bottom" title="<fmt:message key="informes.tooltip.nuevo.title"/>">
                                </a>
                                <a id="sub-eliminar" class="abrir-submenu" href="#">
                                    <img src="<c:url value='/img/ico-eliminar.png'/>" data-toggle="tooltip" data-placement="bottom" title="<fmt:message key="informes.tooltip.eliminar.title"/>">
                                </a>
                            </security:authorize>
                            <a id="sub-filtrar" class="abrir-submenu" href="#">
                                <img src="<c:url value='/img/ico-filtrar.png'/>" data-toggle="tooltip" data-placement="bottom" title="<fmt:message key="informes.tooltip.filtrar.title"/>">
                            </a>
                            <a id="sub-exportar" href="#">
                                <img src="<c:url value='/img/ico-exportar.png'/>" data-toggle="tooltip" data-placement="bottom" title="<fmt:message key="informes.tooltip.exportar.title"/>">
                            </a>
                            <a id="exportarPerdidas" href="exportarPerdidas.xls">
                                <img src="<c:url value='/img/ico-perdidas.png'/>" data-toggle="tooltip" data-placement="bottom" title="<fmt:message key="informes.tooltip.perdidas.title"/>">                                
                            </a>                                                                        
                            <a id="sub-exportarCNMC" href="#">
                                <img src="<c:url value='/img/ico-cnmc.png'/>" data-toggle="tooltip" data-placement="bottom" title="<fmt:message key="informes.tooltip.cnmc.title"/>">
                            </a>
                            <a id="verAgruparDatos" href="#">
                                <img src="<c:url value='/img/ico-arbol.png'/>" data-toggle="tooltip" data-placement="bottom" title="Agrupar">
                            </a>
                            
                            <!--<a href="javascript:verAgruparDatos()" ><img src="<c:url value='/img/ico-grafica.png'/>" data-toggle="tooltip" data-placement="bottom" title="Ver grafica"></a>-->
                        </th>

                        <th><fmt:message key="informes.tabla.columna.version"/></th>
                        <th><fmt:message key="informes.tabla.columna.desde"/></th>
                        <th><fmt:message key="informes.tabla.columna.hasta"/></th>
                        <th><fmt:message key="informes.tabla.columna.estado"/></th>
                        <th><fmt:message key="informes.tabla.columna.ejecutado"/></th>
                    </tr>
                </thead>
                <tbody>

                <form id="form-visor" method="POST" class="form-inline" role="form" action="<c:url value='visorInformesSaldo.htm'/>">
                    <input type="hidden" value="BBDD" name="tipo_agrupacion" id="tipo_agrupacion"/>
                    <input type="hidden" value="" name="id_balance_visor" id="id_balance_visor"/>
                    <input type="hidden" value="" name="id_tipo_balance_visor" id="id_tipo_balance_visor"/>

                </form>

                <c:forEach var="balance" items="${listaBalancesXTipo}">
                    <tr>  

                        <td name="id_balance"><input name="checkBal" id="${balance.id_balance}" value="${balance.id_balance}" type="checkbox"/>
                            <label for="${balance.id_balance}"><span></span></label><a class="visor" href="#"/><c:out value="${balance.descripcion}" /></a>                            
                            <input type="hidden" id= "estado" value="${balance.descripcionEstado}">
                        </td>

                        <td name="version"><c:out value="${balance.version}" /></td>
                        <td name="fecha_inicio"><fmt:formatDate value="${balance.fecha_inicio}" pattern="dd/MM/yyyy" /></td>
                        <td name="fecha_fin"><fmt:formatDate value="${balance.fecha_fin}" pattern="dd/MM/yyyy" /></td>
                        <td name="descripcionEstado"><c:out value="${balance.descripcionEstado}" /></td>
                        <td name="fecha_lanzamiento"><fmt:formatDate value="${balance.fecha_lanzamiento}" pattern="dd/MM/yyyy HH:mm:ss" />
                            <!-- Incluyo dos campos ocultos para utilizar las fechas -->
                            <input type="hidden" id= "fDesde_${balance.id_balance}" value="<fmt:formatDate value="${balance.fecha_inicio}" pattern="dd/MM/yyyy" />">
                            <input type="hidden" id= "fHasta_${balance.id_balance}" value="<fmt:formatDate value="${balance.fecha_fin}" pattern="dd/MM/yyyy" />">
                        </td>
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
    </security:authorize>
            
            
   <!-- Si no tiene permisos para mostrar la pagina, llamamos al error 403   -->        
    <security:authorize ifNotGranted="ROLE_USER,ROLE_ADMIN">
        <div class="container">
            <div class="div-centrado">
                <img class="img-centrado" src="<c:url value='/img/viesgo.svg'/>"/>
                <div>
                    <label><fmt:message key="403.message"></fmt:message></label>
                    </div>    
                    <div>
                        <a class="btn btn-lg btn-eon btn-block" href="<c:url value='/auth/login.htm'/>">
                        <fmt:message key="error.button.Inicio" />
                    </a>  
                </div>
            </div>
        </div>
    </security:authorize>




</body>


