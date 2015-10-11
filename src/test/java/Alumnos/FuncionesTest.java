/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Alumnos;

import ctic.gestion.util.Funciones;
import java.util.Calendar;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author rociomunoz
 */
public class FuncionesTest {
    
    public FuncionesTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }
    
    @Test
    public void ToInt() {
        
        String cadena = "12345";
        boolean resultado;
        Integer valor = Funciones.toInt(cadena);
        if (valor instanceof Integer) {
            resultado = true;
        } else {
            resultado = false;
        }
        Assert.assertTrue(resultado);
        
    }
    
    @Test
    public void ToCalendar() {
        
        String fecha = "11/11/1985";
        String formato = "dd/MM/yyyy";
        
        Calendar cFecha = Funciones.toCalendar(fecha, formato);
        
        int dia = cFecha.get(Calendar.DAY_OF_MONTH);
        int mes = cFecha.get(Calendar.MONTH) + 1;
        int anyo = cFecha.get(Calendar.YEAR);
        
        if (dia == 11 && mes == 11 && anyo == 1985) {
            Assert.assertTrue(true);
        } else {
            Assert.assertFalse(false);
        }
        
    }
}
