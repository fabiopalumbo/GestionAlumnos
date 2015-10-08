
<%@ include file="/taglibs.jsp" %>
<jsp:directive.page import="org.displaytag.sample.*"/>
<jsp:scriptlet>
    <![CDATA[
       
        org.displaytag.decorator.CheckboxTableDecorator decorator = new org.displaytag.decorator.CheckboxTableDecorator();
        decorator.setId("id");
        decorator.setFieldName("_chk");
        pageContext.setAttribute("checkboxDecorator", decorator);
            ]]>
</jsp:scriptlet>

<div class="row">
    <div class="col-md-12">
        <title><fmt:message key="tb.title"/></title>
        <h2><fmt:message key="tb.title"/></h2>

        <h5>${message}</h5>

        <button class="btn btn-primary" onclick="location.href = 'edit.htm'" style="float: right; margin-top: -30px">
            <i class="icon-plus icon-white"></i> Añadir Registro</button>

        <button class="btn btn-primary" onclick="location.href = 'delete.htm?id=${formTipoBalance.id}'" style="float: right; margin-top: -30px">
            <i class="icon-plus icon-white"></i> Borrar registro</button>

        <display:table name="tipoBalanceList" class="table table-condensed table-striped table-hover" requestURI="list.htm" id="tipoBalanceList" export="true" decorator="checkboxDecorator" pagesize="10" excludedParams="ajax">
            <display:column property="id" sortable="true" href="edit.htm" media="html" paramId="id" paramProperty="id" titleKey="tb.id"/>
            <display:column property="checkbox"/>
            <display:column property="id_tipo_balance" sortable="true" titleKey="tb.id_tipo_balance" escapeXml="true"/>

            <display:column property="descripcion" sortable="true" titleKey="tb.descripcion" escapeXml="true"/>
            <display:column property="fecha_inicio" sortable="true" format="{0,date,dd-MM-yyyy}" titleKey="tb.fecha_inicio"  escapeXml="true"/>
            <display:column property="fecha_fin" sortable="true" format="{0,date,dd-MM-yyyy}" titleKey="tb.fecha_fin" escapeXml="true" />
            <display:column property="nivel_inicial" sortable="true" titleKey="tb.nivel_inicial" escapeXml="true"/>
        </display:table>

        <h2><fmt:message key="empresa.title"/></h2>
        <display:table name="empresasList" class="table table-condensed table-striped table-hover" requestURI="list.htm" id="empresasList" export="true" pagesize="10" excludedParams="ajax">
            <display:column property="id" sortable="true" href="edit.htm" media="html" paramId="id" paramProperty="id" titleKey="tb.id"/>
            <display:column property="id_empresa" sortable="true" titleKey="empresa.id_empresa" escapeXml="true"/>
            <display:column property="descripcion" sortable="true" titleKey="empresa.descripcion" escapeXml="true"/>

        </display:table>

        <h2><fmt:message key="pf.title"/></h2>
        <display:table name="pfList" class="table table-condensed table-striped table-hover" requestURI="list.htm" id="pfList" export="true" pagesize="10" excludedParams="ajax">
            <display:column property="id" sortable="true" href="edit.htm" media="html" paramId="id" paramProperty="id" titleKey="tb.id"/>
            <display:column property="guid" sortable="true" titleKey="pf.guid" escapeXml="true"/>
            <display:column property="cups" sortable="true" titleKey="pf.cups" escapeXml="true"/>

        </display:table>
        
         <h2><fmt:message key="pm.title"/></h2>
        <display:table name="pmList" class="table table-condensed table-striped table-hover" requestURI="list.htm" id="pmList" export="true" pagesize="10" excludedParams="ajax">
            <display:column property="id" sortable="true" href="edit.htm" media="html" paramId="id" paramProperty="id" titleKey="tb.id"/>
            <display:column property="guidPm" sortable="true" titleKey="pm.guid" escapeXml="true"/>
            <display:column property="cups" sortable="true" titleKey="pm.cups" escapeXml="true"/>
            <display:column property="codigoRee" sortable="true" titleKey="pm.codigo_ree" escapeXml="true"/>

        </display:table>
        
        
          <h2><fmt:message key="pm.title"/></h2>
        <display:table name="tipoColumnaList" class="table table-condensed table-striped table-hover" requestURI="list.htm" id="pmList" export="true" pagesize="10" excludedParams="ajax">
            <display:column property="id" sortable="true" href="edit.htm" media="html" paramId="id" paramProperty="id" titleKey="tb.id"/>
            <display:column property="id_columna" sortable="true" titleKey="tc.id_columna" escapeXml="true"/>
            <display:column property="descripcion" sortable="true" titleKey="tc.descripcion" escapeXml="true"/>
            <display:column property="nemonico" sortable="true" titleKey="tc.nemonico" escapeXml="true"/>
             <display:column property="orden" sortable="true" titleKey="tc.orden" escapeXml="true"/>

        </display:table>


    </div>
</div>


