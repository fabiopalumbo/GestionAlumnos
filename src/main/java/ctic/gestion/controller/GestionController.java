/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ctic.gestion.controller;

import ctic.gestion.dto.Alumno;
import ctic.gestion.service.AlumnosService;
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
@RequestMapping("/*")
public class GestionController {
    
    public static String BASE_VIEW = "/gestion/";
    @Autowired
    private AlumnosService serviceAlumnos;
    
    
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String acceso(HttpServletRequest request, ModelMap model) {
    
        String nombre = request.getParameter("username");
        String password = request.getParameter("password");
        
        try {
            List<Alumno> lista = serviceAlumnos.getAlumnos();
            model.put("listaAlumnos", lista);
            
        } catch (Exception ex) {
            Logger.getLogger(GestionController.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        
        return BASE_VIEW + "main";
    }
    
    
    
    
        
}
