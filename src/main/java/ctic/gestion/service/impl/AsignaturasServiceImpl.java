package ctic.gestion.service.impl;

import ctic.gestion.dao.IAlumnosDao;
import ctic.gestion.dao.IAsignaturasDao;
import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Asignatura;
import ctic.gestion.service.AlumnosService;
import ctic.gestion.service.AsignaturasService;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Implementacion del servicio de Asignaturas
 * @author rociomunoz
 */

@Service
public class AsignaturasServiceImpl implements AsignaturasService {

    IAsignaturasDao daoLocal;

    @Autowired
    public AsignaturasServiceImpl(IAsignaturasDao dao) {
        daoLocal = dao;
    }

    @Override
    public List<Asignatura> getAsignaturas() throws Exception {
        List<Asignatura> lista = null;
        try {
            lista = daoLocal.getAsignaturas();
        } catch (Exception e) {
            Logger.getLogger(AsignaturasServiceImpl.class.getName()).log(Level.SEVERE, null, e);

        }
        return lista;
    }

    @Override
    public void insertAsignatura(Asignatura asig) throws Exception {
        try {
             daoLocal.insertAsignatura(asig);
        } catch (Exception e) {
            Logger.getLogger(AsignaturasServiceImpl.class.getName()).log(Level.SEVERE, null, e);

        }
    }

    @Override
    public void updateAsignatura(Asignatura asig) throws Exception {
        try {
             daoLocal.updateAsignatura(asig);
        } catch (Exception e) {
            Logger.getLogger(AsignaturasServiceImpl.class.getName()).log(Level.SEVERE, null, e);

        }  
    }

    @Override
    public void deleteAsignatura(Asignatura asig) throws Exception {
        try {
             daoLocal.deleteAsignatura(asig);
        } catch (Exception e) {
            Logger.getLogger(AsignaturasServiceImpl.class.getName()).log(Level.SEVERE, null, e);

        }
    }

    
}
