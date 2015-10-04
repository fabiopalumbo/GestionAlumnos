/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ctic.gestion.dao;

import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Asignatura;
import ctic.gestion.dto.Matricula;
import java.util.List;

/**
 *
 * @author rociomunoz
 */
public class IGestionDaoImpl implements IGestionDao{

    @Override
    public List<Alumno> getAllAlumnos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Alumno getAlumnoByFilter(Alumno al) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Asignatura> getAllAsignaturas() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Asignatura getAsignaturaByFilter(Asignatura asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Matricula getMatriculaAlmno(Alumno al) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
