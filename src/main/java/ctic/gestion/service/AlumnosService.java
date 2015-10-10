package ctic.gestion.service;

import ctic.gestion.dto.Alumno;
import java.util.List;

public interface AlumnosService {

    public List<Alumno> getAlumnos() throws Exception;
    
    public void insertAlumno(Alumno al) throws Exception;
    
    public void updateAlumno(Alumno al) throws Exception;
    
    public void deleteAlumno(Alumno al) throws Exception;

}
