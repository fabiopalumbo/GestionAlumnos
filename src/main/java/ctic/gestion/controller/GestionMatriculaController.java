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
import java.util.ArrayList;
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
    
    @Autowired
    private AlumnosService serviceAlumnos;

    @RequestMapping(value = "/menu", method = RequestMethod.GET)
    public String inicio(HttpServletRequest request, ModelMap model) {

        return BASE_VIEW_MENU + "menu";
    }

    /**
     * Carga de matriculas desde el menu lateral
     * @param request
     * @param model
     * @return 
     */
    @RequestMapping(value = "/listAlumnosMatricula", method = RequestMethod.GET)
    public String listadoAlumnos(HttpServletRequest request, ModelMap model) {

        try {

            List<Alumno> lista = serviceAlumnos.getAlumnos();
            List<Matricula> listaMat = new ArrayList<Matricula>();
            model.put("listaAlumnosCombo", lista);
            model.put("listaMatriculas", listaMat);
            

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return BASE_VIEW_MAT + "main";
    }
    
    /**
     * Carga de matriculas parametrizado por Alumno
     * @param request Recibe idAlumno 
     * @param model Devuelve la lista de matriculas del alumno
     * @return 
     */
    @RequestMapping(value = "/listByAlumno", method = RequestMethod.POST)
    public String listadoMatriculaByAlumno(HttpServletRequest request, ModelMap model) {

        try {

            String idAlumnos = request.getParameter("listaIdAlumnoMat");
            List<Matricula> lista = null;
            List<Alumno> listaAlumnos = null;
            if (idAlumnos != null && !idAlumnos.equals("")) {
                String[] arrayIds = idAlumnos.split(";");

                if (arrayIds != null && arrayIds.length == 1) {
                    int iId = Integer.parseInt(arrayIds[0]);
                    Alumno al = new Alumno();
                    al.setIdAlumno(iId);
                    lista = serviceMatricula.getMatricula(al);
                    listaAlumnos = serviceAlumnos.getAlumnos();
                }

            }

            model.put("listaMatriculas", lista);
            model.put("listaAlumnosCombo", listaAlumnos);
            model.put("idAlumno", idAlumnos);

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return BASE_VIEW_MAT + "main";
    }
    
    
    
    

}
