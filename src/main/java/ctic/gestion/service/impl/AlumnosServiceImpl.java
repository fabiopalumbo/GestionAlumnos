package ctic.gestion.service.impl;

import ctic.gestion.dao.IAlumnosDao;
import ctic.gestion.dto.Alumno;
import ctic.gestion.service.AlumnosService;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Implementacion del Servicio de Alumnos
 * @author rociomunoz
 */

@Service
public class AlumnosServiceImpl implements AlumnosService {

    IAlumnosDao daoLocal;

    @Autowired
    public AlumnosServiceImpl(IAlumnosDao dao) {
        daoLocal = dao;
    }

    @Override
    public List<Alumno> getAlumnos() throws Exception {
        List<Alumno> lista = null;
        try {
            lista = daoLocal.getAlumnos();
        } catch (Exception e) {
            Logger.getLogger(AlumnosServiceImpl.class.getName()).log(Level.SEVERE, null, e);

        }

        return lista;
    }

    @Override
    public void insertAlumno(Alumno al) throws Exception {
     
        try {
             daoLocal.insertAlumno(al);
        } catch (Exception e) {
            Logger.getLogger(AlumnosServiceImpl.class.getName()).log(Level.SEVERE, null, e);

        }
    
    }

    @Override
    public void updateAlumno(Alumno al) throws Exception {
     try {
             daoLocal.updateAlumno(al);
        } catch (Exception e) {
            Logger.getLogger(AlumnosServiceImpl.class.getName()).log(Level.SEVERE, null, e);

        }  
    
    }

    @Override
    public void deleteAlumno(Alumno al) throws Exception {
        
         try {
             daoLocal.deleteAlumno(al);
        } catch (Exception e) {
            Logger.getLogger(AlumnosServiceImpl.class.getName()).log(Level.SEVERE, null, e);

        }
    
    
    }
}
