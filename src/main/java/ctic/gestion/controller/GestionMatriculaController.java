/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ctic.gestion.controller;

import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Asignatura;
import ctic.gestion.service.AlumnosService;
import ctic.gestion.service.AsignaturasService;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author rociomunoz
 */
@Controller
@Scope("session")
@RequestMapping("/gestion/matricula/*")
public class GestionMatriculaController {

    public static String BASE_VIEW_MAT = "/gestion/matricula/";
    public static String BASE_VIEW_MENU = "/gestion/";
    @Autowired
    private AsignaturasService serviceMatricula;

    
     @RequestMapping(value = "/menu", method = RequestMethod.GET)
    public String inicio(HttpServletRequest request, ModelMap model) {

        
        return BASE_VIEW_MENU + "menu";
    }
    
   

}
