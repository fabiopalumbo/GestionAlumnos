/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ctic.gestion.dto;

import java.util.List;

/**
 *
 * @author rociomunoz
 */
public class Matricula {
    
    private Long idMatricula;
    private Long idAlumno;
    private String nombreAlumno;
    private Long IdAsignatura;
    private String nombreAsignatura;

    public Long getIdMatricula() {
        return idMatricula;
    }

    public void setIdMatricula(Long idMatricula) {
        this.idMatricula = idMatricula;
    }

    public Long getIdAlumno() {
        return idAlumno;
    }

    public void setIdAlumno(Long idAlumno) {
        this.idAlumno = idAlumno;
    }

    public String getNombreAlumno() {
        return nombreAlumno;
    }

    public void setNombreAlumno(String nombreAlumno) {
        this.nombreAlumno = nombreAlumno;
    }

    public Long getIdAsignatura() {
        return IdAsignatura;
    }

    public void setIdAsignatura(Long IdAsignatura) {
        this.IdAsignatura = IdAsignatura;
    }

    public String getNombreAsignatura() {
        return nombreAsignatura;
    }

    public void setNombreAsignatura(String nombreAsignatura) {
        this.nombreAsignatura = nombreAsignatura;
    }
    
    
    
    
}
