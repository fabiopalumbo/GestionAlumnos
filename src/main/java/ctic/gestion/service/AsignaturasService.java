package ctic.gestion.service;

import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Asignatura;
import java.util.List;

/**
 * Servicio encargado de realizar acciones sobre Asignaturas
 * @author rociomunoz
 */
public interface AsignaturasService {

    public List<Asignatura> getAsignaturas() throws Exception;
    
    public void insertAsignatura(Asignatura asig) throws Exception;
    
    public void updateAsignatura(Asignatura asig) throws Exception;
    
    public void deleteAsignatura(Asignatura asig) throws Exception;

}
