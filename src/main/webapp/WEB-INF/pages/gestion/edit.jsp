<%@ include file="/taglibs.jsp"%>

<head>
    <title><fmt:message key="ejemplo.title"/></title>
</head>

<h3><fmt:message key="ejemplo.title.form"/>:</h3>

<div class="ficha">
	<div class="container">
		<div class="row">
			<form:form commandName="formTipoBalance" method="post" action="save.htm" autocomplete="off"
					   id="formTipoBalance" cssClass="well form-horizontal">

				<form:hidden path="id"/>

				<div class="col-md-12">
					<label for="id_tipo_balance" class="control-label">* <fmt:message key="tb.id_tipo_balance"/>:</label>
                                        <form:input path="id_tipo_balance" id="id_tipo_balance" required="true"/>
                                        
                                        <label for="descripcion" class="control-label">* <fmt:message key="tb.descripcion"/>:</label>
                                        <form:input path="descripcion" id="descripcion" required="true"/>
                                        
                                        <label for="fecha_inicio" class="control-label">* <fmt:message key="tb.fecha_inicio"/>:</label>
                                        <form:input path="fecha_inicio" id="fecha_inicio" required="true"/>
                                        
                                        <label for="fecha_fin" class="control-label">* <fmt:message key="tb.fecha_fin"/>:</label>
                                        <form:input path="fecha_fin" id="fecha_fin" required="true"/>
                                        
                                        <label for="nivel_inicial" class="control-label">* <fmt:message key="tb.nivel_inicial"/>:</label>
                                        <form:input path="nivel_inicial" id="nivel_inicial" required="true"/>
                                        
					
				</div>
			</div>
			<div class="row">

				 <div class="botonera col-md-12">

					<c:if test="${empty formTipoBalance.fecha_inicio}">
						<button type="submit" class="btn btn-primary" name="save" id="save">
							<i class="icon-ok icon-white"></i> <fmt:message key="button.save"/>
						</button>

						<c:if test="${not empty formTipoBalance.id && empty formTipoBalance.fecha_inicio}">
							<security:authorize ifAllGranted="ROLE_ADMIN">
								<a href="<c:url value="delete.htm?id=${formTipoBalance.id}" />" class="btn btn-default" id="cancel">
									<i class="icon-remove"></i> <fmt:message key="button.delete"/>
								</a>
							</security:authorize>
						</c:if>
					</c:if>

					<a href="<c:url value="list.htm" />" class="btn btn-default" id="cancel">
						<i class="icon-remove"></i> <fmt:message key="button.cancel"/>
					</a>

				</div>

			</form:form>
		</div>
	</div>
</div>