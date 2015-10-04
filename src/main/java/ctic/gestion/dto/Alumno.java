/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ctic.gestion.dto;

/**
 *
 * @author rociomunoz
 */
public class Alumno {
    
    private String dni;
    private String nombre;
    private String apellidos;
    private boolean esDelegado;
    
    
    public Alumno(){
        
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public boolean isEsDelegado() {
        return esDelegado;
    }

    public void setEsDelegado(boolean esDelegado) {
        this.esDelegado = esDelegado;
    }
    
    
    
}
