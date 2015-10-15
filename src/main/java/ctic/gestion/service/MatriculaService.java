package ctic.gestion.service;

import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Matricula;


public interface MatriculaService {

    public Matricula getMatricula(Alumno al) throws Exception;
    
   

}
