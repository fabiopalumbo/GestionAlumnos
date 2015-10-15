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
@RequestMapping("/gestion/alumno/*")
public class GestionAlumnoController {

   
    public static String BASE_VIEW_ALUMNO = "/gestion/alumno/";
    public static String BASE_VIEW_MENU = "/gestion/";
    
    @Autowired
    private AlumnosService serviceAlumnos;

    
    @RequestMapping(value = "/menu", method = RequestMethod.GET)
    public String inicio(HttpServletRequest request, ModelMap model) {

        
        return BASE_VIEW_MENU + "menu";
    }
    
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public String listadoAlumnos(HttpServletRequest request, ModelMap model) {

        try {

            List<Alumno> lista = serviceAlumnos.getAlumnos();
            model.put("listaAlumnos", lista);
            

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return BASE_VIEW_ALUMNO + "main";
    }

    @RequestMapping(value = "/nuevo", method = RequestMethod.POST)
    public String nuevo(HttpServletRequest request, ModelMap model) {

        try {

            String nombre = request.getParameter("nombre");
            String apellidos = request.getParameter("apellidos");

            Alumno al = new Alumno();

            if (nombre != null && !nombre.equals("")) {
                al.setNombre(nombre);
            }

            if (apellidos != null && !apellidos.equals("")) {
                al.setApellidos(apellidos);
            }

            serviceAlumnos.insertAlumno(al);

            List<Alumno> lista = serviceAlumnos.getAlumnos();
            model.put("listaAlumnos", lista);
            model.addAttribute("message", "Insertado correctamente el nuevo alumno");

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return BASE_VIEW_ALUMNO + "main";
    }

    @RequestMapping(value = "/eliminar", method = RequestMethod.POST)
    public String borrar(HttpServletRequest request, ModelMap model) {

        try {
            String idAlumnos = request.getParameter("listaIdAlumno");

            if (idAlumnos != null && !idAlumnos.equals("")) {
                String[] arrayIds = idAlumnos.split(";");

                for (String id : arrayIds) {
                    int iId = Integer.parseInt(id);
                    Alumno al = new Alumno();
                    al.setIdAlumno(iId);
                    serviceAlumnos.deleteAlumno(al);
                    List<Alumno> lista = serviceAlumnos.getAlumnos();
                    model.put("listaAlumnos", lista);

                }
            }

            model.addAttribute("message", "Se ha borrado el alumno correctamente");

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }

        return BASE_VIEW_ALUMNO + "main";
    }

    @RequestMapping(value = "/editar", method = RequestMethod.POST)
    public String editar(HttpServletRequest request, ModelMap model) {
        String message = "";
        try {
            String idEditar = request.getParameter("idAlumnoEditar");
            String nombreEditar = request.getParameter("nombreEditar");
            String apellidoEditar = request.getParameter("apellidosEditar");

            if (idEditar != null && !idEditar.equals("")) {
                Integer iIdEditar = Integer.parseInt(idEditar);
                Alumno al = new Alumno();
                al.setIdAlumno(iIdEditar);
                al.setApellidos(apellidoEditar);
                al.setNombre(nombreEditar);
                serviceAlumnos.updateAlumno(al);
                message = "El alumno ha sido actualizado correctamente";
                List<Alumno> lista = serviceAlumnos.getAlumnos();
                model.put("listaAlumnos", lista);
            } else {
                message = "No es posible editar el alumno";
            }

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }

        model.addAttribute("message", message);

        return BASE_VIEW_ALUMNO + "main";
    }

}
