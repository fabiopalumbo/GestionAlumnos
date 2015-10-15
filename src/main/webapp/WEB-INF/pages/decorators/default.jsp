<%@ include file="/taglibs.jsp" %>

<!DOCTYPE html>
<html lang="es">

    <head>
        <meta http-equiv="Cache-Control" content="no-store" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<link rel="icon" href="<c:url value="/favicon.ico"/>" />-->
        <!--<link rel="shortcut icon" href="<c:url value="/favicon.ico"/>"
              type="image/x-icon" />-->

        <title>Gestion de Alumnos</title>

         <link rel="stylesheet" type="text/css" media="all" href="<c:url value='/css/easyui.css'/>"/>
        <link rel="stylesheet" type="text/css" media="all" href="<c:url value='/css/bootstrap.css'/>" />
        <link rel="stylesheet" type="text/css" media="all" href="<c:url value='/css/style.css'/>" />
        <link rel="stylesheet" type="text/css" media="all" href="<c:url value='/css/jquery-ui-1.10.4.min.css'/>" />
        <link rel="stylesheet" type="text/css" media="all" href="<c:url value='/css/icon.css'/>"/>
                                
        <script type="text/javascript" src="<c:url value='/js/jquery.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/jquery-ui.min.js'/>"></script>
    
        <script type="text/javascript" src="<c:url value='/js/jquery.placeholder.js'/>"></script>                             
        <script type="text/javascript" src="<c:url value='/js/bootstrap.js'/>"></script>
      
        <script type="text/javascript" src="<c:url value='/js/html5shiv.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/funciones.js'/>"></script>

        <decorator:head />
        
    </head>

    <body beforeunonload="force_logout()">

        <security:authorize ifAnyGranted="ROLE_USER,ROLE_ADMIN"  >
            <%@ include file="/WEB-INF/pages/gestion/menu.jsp" %>
       </security:authorize>


        
            <decorator:body />
         

    </body>

</html>
