/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ctic.gestion.controller;

import javax.servlet.http.HttpServletRequest;
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
    
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String acceso(HttpServletRequest request, ModelMap model) {
    
        String nombre = request.getParameter("username");
        String password = request.getParameter("password");
        
        return BASE_VIEW + "main";
    }  
        
}
