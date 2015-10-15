/*
 * Compara si la fechaDesde es mayor que la fechaHasta
 * Devuelve true si hay erroes en los rangos de las fechas
 * @param {type} dateDesde
 * @param {type} dateHasta
 * @returns {Boolean}
 * 
 */

function stringToDate(fecha){
    
    var dia1 = fecha.substring(0,2);
    var mes1 = fecha.substring(3,5);
    var anyo1 = fecha.substring(6,10);
    var dFecha = new Date(anyo1, mes1-1, dia1);
    
    return dFecha;
}


function compareDates(fecha1, fecha2) {

    var dia1 = fecha1.substring(0,2);
    var mes1 = fecha1.substring(3,5);
    var anyo1 = fecha1.substring(6,10);
    
    var dia2 = fecha2.substring(0,2);
    var mes2 = fecha2.substring(3,5);
    var anyo2 = fecha2.substring(6,10);

    var dFecha1 = new Date(anyo1, mes1-1, dia1);
    var dFecha2 = new Date(anyo2, mes2-1, dia2);

    return dFecha2 < dFecha1;

}

function periodoValido(fechaDesde1, fechaHasta1, fechaDesde2, fechaHasta2) {

    //Fecha Desde 
    var dia1 = fechaDesde1.substring(0,2);
    var mes1 = fechaDesde1.substring(3,5);
    var anyo1 = fechaDesde1.substring(6,10);
    
    //Fecha Desde Filtro
    var dia2 = fechaDesde2.substring(0,2);
    var mes2 = fechaDesde2.substring(3,5);
    var anyo2 = fechaDesde2.substring(6,10);

    var dateFechaDesde1 = new Date(anyo1, mes1-1, dia1);
    var dateFechaDesde2 = new Date(anyo2, mes2-1, dia2);
    
    //Fecha Hasta 
    var dia3 = fechaHasta1.substring(0,2);
    var mes3 = fechaHasta1.substring(3,5);
    var anyo3 = fechaHasta1.substring(6,10);
    
     //Fecha Hasta Filtro
    var dia4 = fechaHasta2.substring(0,2);
    var mes4 = fechaHasta2.substring(3,5);
    var anyo4 = fechaHasta2.substring(6,10);

    var dateFechaHasta1 = new Date(anyo3, mes3-1, dia3);
    var dateFechaHasta2 = new Date(anyo4, mes4-1, dia4);
    
    var resultado1 = false;
    var resultado2 = false;
    if (dateFechaDesde1<=dateFechaDesde2)
        resultado1 = true;
    else
        resultado1 = false;

    if (dateFechaHasta1<dateFechaHasta2 || dateFechaDesde2>dateFechaHasta2)
        resultado2 = false;
    else
        resultado2 = true;

    if (resultado1 && resultado2)
        return true;
    else
        return false;
}