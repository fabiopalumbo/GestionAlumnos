package ctic.gestion.service.impl;

import ctic.gestion.dao.IAlumnosDao;
import ctic.gestion.dao.IMatriculasDao;
import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Matricula;
import ctic.gestion.service.AlumnosService;
import ctic.gestion.service.MatriculaService;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatriculaServiceImpl implements MatriculaService {

    IMatriculasDao daoLocal;

    @Autowired
    public MatriculaServiceImpl(IMatriculasDao dao) {
        daoLocal = dao;
    }

    @Override
    public Matricula getMatricula(Alumno al) throws Exception {

        Matricula matricula = null;
        try {
            matricula = daoLocal.getMatricula(al.getIdAlumno());

        } catch (Exception e) {
            Logger.getLogger(AsignaturasServiceImpl.class.getName()).log(Level.SEVERE, null, e);

        }
        return matricula;
    }

}
