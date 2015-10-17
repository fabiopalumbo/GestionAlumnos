package ctic.gestion.dao;


import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Asignatura;
import ctic.gestion.dto.Matricula;
import java.util.List;

/**
 * Capa Dao encargada de acciones sobre Matriculas
 * @author rociomunoz
 */
public interface IMatriculasDao {     
    
    List<Matricula> getMatricula(Integer idAlumno) throws Exception;
    void insertMatricula(Alumno al, Asignatura asig) throws Exception;
    void deleteMatricula(Alumno al, Asignatura asig) throws Exception;
    void updateMatricula(Alumno al, Asignatura asig) throws Exception;
    
}
