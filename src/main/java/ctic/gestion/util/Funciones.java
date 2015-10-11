/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ctic.gestion.util;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author rmpinedo
 */
public class Funciones {

    // Formatos de fechas
    public static final String FORMATO_FECHA_DEFAULT = "dd/MM/yyyy";

    public static Integer toInt(String cadena) {

        Integer valorEntero = null;
        valorEntero = Integer.parseInt(cadena);

        return valorEntero;
    }

    public static Calendar toCalendar(String sFecha, String formato) {

        Date dFDesde = new Date();

        if (sFecha != null && !sFecha.equals("")) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat(formato);
                dFDesde = sdf.parse(sFecha);
            } catch (ParseException ex) {
                Logger.getLogger(Funciones.class.getName()).log(Level.SEVERE, null, ex);
            }
        }

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(dFDesde);

        return calendar;
    }

    /**
     * toDate
     *
     * Nos llega una fecha de tipo String y la devolvemos en un tipo Date con el
     * FORMATO_FECHA_DEFAULT.
     *
     * @param sFecha
     * @return Date
     */
    public static Date toDate(String sFecha) {
        return Funciones.toDate(sFecha, FORMATO_FECHA_DEFAULT);
    }

    /**
     * toDate
     *
     * Nos llega una fecha y un formato y devolvemos la misma en un tipo Date
     * con ese formato.
     *
     * @param sFecha
     * @param sFormato
     * @return Date
     */
    public static Date toDate(String sFecha, String sFormato) {
        java.util.Date dateRes = null;
        try {
            java.text.SimpleDateFormat fmt = new java.text.SimpleDateFormat(sFormato);
            fmt.setLenient(false);
            dateRes = fmt.parse(sFecha);
        } catch (Exception ee) {
        }
        return dateRes;
    }

    /**
     * toString
     *
     * Nos llega una fecha de tipo Date y la devolvemos en un String con el
     * FORMATO_FECHA_DEFAULT.
     *
     * @param dFecha
     * @return String
     */
    public static String toString(Date dFecha) {
        return Funciones.toString(dFecha, FORMATO_FECHA_DEFAULT);
    }

    /**
     * toString
     *
     * Recibimos una fecha de tipo Date y un formato, devolvemos la misma en un
     * String con el formato pedido.
     *
     * @param dFecha
     * @param sFormato
     * @return String
     */
    public static String toString(Date dFecha, String sFormato) {
        return new SimpleDateFormat(sFormato).format(dFecha);
    }

    /**
     * getDiasEntreFechas
     *
     * Devuelve en un entero los días que hay entre dos fechas de tipo Date.
     *
     * @param fecha1
     * @param fecha2
     * @return int
     */
    public static int getDiasEntreFechas(Date fecha1, Date fecha2) {
        int iRes = 0;
        GregorianCalendar cal1 = new GregorianCalendar();
        cal1.setTime(fecha1);
        GregorianCalendar cal2 = new GregorianCalendar();
        cal2.setTime(fecha2);
        //
        while (cal1.before(cal2)) {
            iRes++;
            cal1.add(Calendar.DAY_OF_YEAR, 1);
        }
        return ++iRes;
    }
    
    public static String getTimeDifference(long start, long end) {
        String timeDif = "";
        long milisegundos = end - start;
        long dia, hora, minuto, segundo;
        long restodia, restohora, restominuto, restosegundo;

        dia = milisegundos / 86400000;
        restodia = milisegundos % 86400000;

        hora = restodia / 3600000;
        restohora = milisegundos % 3600000;

        minuto = restohora / 60000;
        restominuto = restohora % 60000;

        segundo = restominuto / 1000;
        restosegundo = restominuto % 1000;


        if (dia == 1) {
            timeDif = "1 día";
        } else if (dia > 1) {
            timeDif = dia + " días";
        }

        if (hora > 0) {
            if (!timeDif.equals("")) {
                timeDif += timeDif + ", ";
            }
            if (hora == 1) {
                timeDif = timeDif + "1 hora";
            } else {
                if (!timeDif.equals("") || hora > 1) {
                    timeDif = timeDif + hora + " horas";
                }
            }
        }

        if (minuto > 0) {
            if (!timeDif.equals("")) {
                timeDif = timeDif + ", ";
            }
            if (minuto == 1) {
                timeDif = timeDif + "1 minuto";
            } else {
                if (!timeDif.equals("") || minuto > 1) {
                    timeDif = timeDif + minuto + " minutos";
                }
            }
        }

        if (segundo > 0) {
            if (!timeDif.equals("")) {
                timeDif = timeDif + ", ";
            }
            if (segundo == 1) {
                timeDif = timeDif + "1 segundo";
            } else {
                if (!timeDif.equals("") || segundo > 1) {
                    timeDif = timeDif + segundo + " segundos";
                }
            }
        }

        if (restosegundo > 0) {
            if (!timeDif.equals("")) {
                timeDif = timeDif + ", ";
            }
            if (restosegundo == 1) {
                timeDif = timeDif + "1 milisegundo";
            } else {
                if (!timeDif.equals("") || restosegundo > 1) {
                    timeDif = timeDif + restosegundo + " milisisegundos";
                }
            }
        }

        return timeDif;
    }
    
    
     public static Boolean esFecha25Horas(Date dFecha) {
        Boolean bEsFecha25Horas = null;

        if (dFecha != null) {
            bEsFecha25Horas = Boolean.FALSE;
            GregorianCalendar cal = new GregorianCalendar();
            cal.setTime(dFecha);
            // El día de 25 horas es el último domingo de octubre. Octubre en un
            // calendar es el mes 9.
            if (cal.get(GregorianCalendar.MONTH) == 9) {
                // Si es domingo
                if (cal.get(GregorianCalendar.DAY_OF_WEEK) == GregorianCalendar.SUNDAY) {
                    // Si es el último del mes
                    if (cal.get(GregorianCalendar.DATE) >= 25) {
                        bEsFecha25Horas = Boolean.TRUE;
                    }
                }
            }
        }

        return bEsFecha25Horas;
    }
}
