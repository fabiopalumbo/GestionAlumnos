/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ctic.gestion.controller;

import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Asignatura;
import ctic.gestion.dto.Matricula;
import ctic.gestion.service.AlumnosService;
import ctic.gestion.service.AsignaturasService;
import ctic.gestion.service.MatriculaService;
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
    private MatriculaService serviceMatricula;

    @RequestMapping(value = "/menu", method = RequestMethod.GET)
    public String inicio(HttpServletRequest request, ModelMap model) {

        return BASE_VIEW_MENU + "menu";
    }

    /*
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public String listadoMatriculaByAlumnoPOST(HttpServletRequest request, ModelMap model) {

        try {

            List<Matricula> lista = null;
            String idAlumno = request.getParameter("idAlumno");
           
                    int iId = Integer.parseInt(idAlumno);
                    Alumno al = new Alumno();
                    al.setIdAlumno(iId);
                    lista = serviceMatricula.getMatricula(al);
        
            model.put("listaMatriculas", lista);

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return BASE_VIEW_MAT + "main";
    }*/
    
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public String listadoMatriculaByAlumnoGET(HttpServletRequest request, ModelMap model) {

        try {

            String idAlumnos = request.getParameter("listaIdAlumnoMat");
            List<Matricula> lista = null;
            if (idAlumnos != null && !idAlumnos.equals("")) {
                String[] arrayIds = idAlumnos.split(";");

                if (arrayIds != null && arrayIds.length == 1) {
                    int iId = Integer.parseInt(arrayIds[0]);
                    Alumno al = new Alumno();
                    al.setIdAlumno(iId);
                    lista = serviceMatricula.getMatricula(al);
                }

            }

            model.put("listaMatriculas", lista);

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return BASE_VIEW_MAT + "main";
    }

}
