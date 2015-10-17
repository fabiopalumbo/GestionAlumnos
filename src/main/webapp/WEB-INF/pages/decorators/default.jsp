<%@ include file="/taglibs.jsp" %>

<!DOCTYPE html>
<html lang="es">

    <head>
        <meta http-equiv="Cache-Control" content="no-store" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
       

        <title>Gestion de Alumnos</title>

         
        <link rel="stylesheet" type="text/css" media="all" href="<c:url value='/css/bootstrap.css'/>" />
        <link rel="stylesheet" type="text/css" media="all" href="<c:url value='/css/style.css'/>" />
        <link rel="stylesheet" type="text/css" media="all" href="<c:url value='/css/jquery-ui-1.10.4.min.css'/>" />
        
        <link rel="stylesheet" type="text/css" media="all" href="<c:url value='/css/simple-sidebar.css'/>" />
        
       <script type="text/javascript" src="<c:url value='/js/jquery.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/jquery-ui.min.js'/>"></script>
    
        <script type="text/javascript" src="<c:url value='/js/jquery.placeholder.js'/>"></script>                             
        <script type="text/javascript" src="<c:url value='/js/bootstrap.js'/>"></script>
        <decorator:head />
        
    </head>

    <body>
        <div id="wrapper">
       <%@ include file="/WEB-INF/pages/gestion/menu.jsp" %>
            <decorator:body />
       </div>
    <!-- /#wrapper -->  

    </body>

</html>
