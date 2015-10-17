package ctic.gestion.service;

import ctic.gestion.dto.Alumno;
import java.util.List;

/**
 * Servicio encargado de realizar gestiones con Alumnos
 * @author rociomunoz
 */

public interface AlumnosService {

    public List<Alumno> getAlumnos() throws Exception;
    
    public void insertAlumno(Alumno al) throws Exception;
    
    public void updateAlumno(Alumno al) throws Exception;
    
    public void deleteAlumno(Alumno al) throws Exception;

}
