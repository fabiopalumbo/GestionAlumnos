package ctic.gestion.dao;


import ctic.gestion.dto.Alumno;
import java.util.List;

public interface IAlumnosDao {     
    
    List<Alumno> getAlumnos() throws Exception;
}
