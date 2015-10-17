package ctic.gestion.dao;


import ctic.gestion.dto.Alumno;
import java.util.List;

/**
 * Capa DAO encargada de acciones sobre Alumnos
 * @author rociomunoz
 */

public interface IAlumnosDao {     
    
    
    List<Alumno> getAlumnos() throws Exception;
    void insertAlumno(Alumno alumno) throws Exception;
    void updateAlumno(Alumno alumno) throws Exception;
    void deleteAlumno(Alumno alumno) throws Exception;
}
