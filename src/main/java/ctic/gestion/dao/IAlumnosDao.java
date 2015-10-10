package ctic.gestion.dao;


import ctic.gestion.dto.Alumno;
import java.util.List;

public interface IAlumnosDao {     
    
    List<Alumno> getAlumnos() throws Exception;
    void insertAlumno(Alumno alumno) throws Exception;
    void updateAlumno(Alumno alumno) throws Exception;
    void deleteAlumno(Alumno alumno) throws Exception;
}
