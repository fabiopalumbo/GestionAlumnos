<%@ include file="/taglibs.jsp" %>

<title>Login</title>
<body id="login">
   
    
    <div class="bg-portada"></div>
    <div class="logo-cabecera">
        
    </div>
    
    <form method="post" id="loginForm" class="form-horizontal form-centrado" action="<c:url value='/gestion/login.htm'/>">
         <h2 class="form-signin-heading">Acceso</h2>
        
        <div class="form-group">
            <label for="inputUser" class="col-sm-4 control-label">Usuario</label>
            <div class="col-sm-8">
                <input name="username" id="username" class="form-control"  placeholder="Usuario" required tabindex="1">
            </div>
        </div>
        <div class="form-group">
            <label for="inputPassword" class="col-sm-4 control-label">Password</label>
            <div class="col-sm-8">
                <input type="password" class="form-control" id="password" name="password" placeholder="Contraseña" tabindex="2">
            </div>
        </div>
         <button type="submit" class="btn btn-lg btn-eon btn-block" name="login" id="login" tabindex="4" value="Login">Entrar</button>
    </form>



    <script type="text/javascript">
    
    $(document).ready(function() {
                 
            $("input[type='text']:visible:enabled:first", document.forms['loginForm']).focus();
        });
    </script>
</body>

