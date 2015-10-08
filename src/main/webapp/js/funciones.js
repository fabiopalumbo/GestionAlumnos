
$(document).ready(function() {

    limpiaErroresLogin();
    iniciarToolTips();
    eventosSubmenu();
    inicializarCalendarios();

    swIE8 = isIE8();


    /*Creo que no se usa y se podria borrar*/
    $('.avanzado').css('display', 'none');
    $(".btn-avanzado").click(function() {
        $(".avanzado").slideToggle();
    });
    /*Creo que no se usa y se podria borrar*/
    $('.mas_datos').css('display', 'none');
    $(".btn-mas_datos").click(function() {
        $(".mas_datos").slideToggle();
    });

});

function mostrarVentanaModal(mensaje) {
    $("#myModal").modal('show');
    $("#myModal .modal-body").text(mensaje);
}

function limpiaErroresLogin() {
    //Borra los mensajes de error del login
    $("#j_username").focus(function() {
        $("#messageError").empty();
    });
    $("#j_password").focus(function() {
        $("#messageError").empty();
    });

}

/*================= FUNCIONES GLOBALES ===============================*/

/*Funcion global: Activa los menus desplegables*/
function eventosSubmenu() {

    // Submenu	
    $('.abrir-submenu').click(function() {
        var NOMBRE = $(this).attr('id');
        $('.' + NOMBRE + '').slideToggle();
        return false;
    });
    $(".cerrar-submenu").click(function() {
        $(this).parents('.submenu').slideToggle();
    });
}

/*Funcion global: Calcula la diferencia de dias entre 2 fechas con formato dd/MM/yyyy*/
function getDiffDias(fecha1, fecha2) {
    var d1 = fecha1.split("/");
    var dat1 = new Date(d1[2], parseFloat(d1[1]) - 1, parseFloat(d1[0]));
    var d2 = fecha2.split("/");
    var dat2 = new Date(d2[2], parseFloat(d2[1]) - 1, parseFloat(d2[0]));

    var fin = dat2.getTime() - dat1.getTime();
    var dias = Math.floor(fin / (1000 * 60 * 60 * 24))

    return dias;
}

/*Funcion global: Detecta teclas numericas*/
function teclaNumerica(keyCode) {
    if (((keyCode >= 48) && (keyCode <= 57)) || ((keyCode >= 96) && (keyCode <= 105))) {
        // Si pulsa numeros
        return true;
    } else {
        if ((keyCode > 36) && (keyCode < 41)) {
            // Teclas de control
            return true;
        } else {
            if ((keyCode == 8) || (keyCode == 127) || (keyCode == 190) || (keyCode == 189)
                    || (keyCode == 109) || (keyCode == 110)) {
                // 8 => BackSpace
                // 127 => Enter 
                // 189 y 109=> - (teclado normal y numérico)
                // 188 y 110=> . (teclado normal y numérico)
                return true;
            } else {
                return false;
            }
        }
    }
}

/*Funcion global: Inicializa los Tooltips de las imagenes en cabeceras de tablas*/
function iniciarToolTips() {
    $('td a img').tooltip();
    $('th a img').tooltip();
}

/*Funcion global: Inicializa los calendarios*/
function inicializarCalendarios() {

    //Abrir calendario
    $(".calendario").datepicker({
        dateFormat: 'dd/mm/yy',
        showOn: "button",
        buttonImage: "../img/ico-calendar.png",
        buttonImageOnly: true,
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    });
}


function force_logout(){
    
    alert("prueba");
    
    
    
}




/*================= FUNCIONES BOOTSTRAP ===============================*/

/*Lo utiliza BootStrap*/
function isIE8() {

    jQuery.uaMatch = function(ua) {

        ua = ua.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
                /(webkit)[ \/]([\w.]+)/.exec(ua) ||
                /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
                /(msie) ([\w.]+)/.exec(ua) ||
                ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
                [];
        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };

    if (!jQuery.browser) {
        matched = jQuery.uaMatch(navigator.userAgent);
        browser = {};

        if (matched.browser) {
            browser[ matched.browser ] = true;
            browser.version = matched.version;
        }

        // Chrome is Webkit, but Webkit is also Safari.
        if (browser.chrome) {
            browser.webkit = true;
        } else if (browser.webkit) {
            browser.safari = true;
        }

        jQuery.browser = browser;

        var isIE = false;
        if (navigator.userAgent.match(/msie/i)) {
            isIE = true;
        }

        //alert(isIE + jQuery.browser.version);
    }

    return(isIE && jQuery.browser.version.toString().indexOf('8') !== (-1));
}
/*Lo utiliza BootStrap*/
function getOption(textoOption, idOption) {

    var o;

    if (swIE8) {
        // NO FUNCIONA EN IE8 -> $('#idProvincia').append(new Option(this.nombre,this.id));	

        o = new Option(textoOption, idOption);
        $(o).html(textoOption);

    } else {

        o = new Option(textoOption, idOption);
    }

    return o;
}



var fileDownloadCheckTimer;
    function blockUIForDownload(variable) {
        var token = new Date().getTime(); //use the current timestamp as the token value
        $('#' + variable).val(token);
        $.blockUI({
            message: '<div><div id=modal class=content modal><div class=loadingAnimation modalLoading></div><p>Procesando...</p></div></div>',
        });
              
        fileDownloadCheckTimer = window.setInterval(function() {
            var cookieValue = $.cookie('fileDownloadToken');
            if (cookieValue == token)
                finishDownload();
        }, 1000);
    }

    function finishDownload() {
        window.clearInterval(fileDownloadCheckTimer);
        $.removeCookie('fileDownloadToken'); //clears this cookie value
        $.unblockUI();
    }
