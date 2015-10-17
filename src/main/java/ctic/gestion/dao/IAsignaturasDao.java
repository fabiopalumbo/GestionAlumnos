package ctic.gestion.dao;


import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Asignatura;
import java.util.List;

/**
 * Capa Dao encargada de acciones sobre Asignaturas
 * @author rociomunoz
 */
public interface IAsignaturasDao {     
    
    List<Asignatura> getAsignaturas() throws Exception;
    void insertAsignatura(Asignatura asig) throws Exception;
    void updateAsignatura(Asignatura asig) throws Exception;
    void deleteAsignatura(Asignatura asig) throws Exception;
}
