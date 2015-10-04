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
public interface IGestionDao {
    
    public List<Alumno> getAllAlumnos();
    public Alumno getAlumnoByFilter(Alumno al);
    public List<Asignatura> getAllAsignaturas();
    public Asignatura getAsignaturaByFilter(Asignatura asig);
    public Matricula getMatriculaAlmno(Alumno al);
    
    
}
