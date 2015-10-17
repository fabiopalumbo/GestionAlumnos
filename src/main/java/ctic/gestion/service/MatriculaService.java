package ctic.gestion.service;

import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Matricula;
import java.util.List;


public interface MatriculaService {

    public List<Matricula> getMatricula(Alumno al) throws Exception;
    
   

}
