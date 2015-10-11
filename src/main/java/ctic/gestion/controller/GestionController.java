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
            Logger.getLogger(GestionController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return BASE_VIEW + "main";
    }

    @RequestMapping(value = "/eliminar", method = RequestMethod.POST)
    public String borrar(HttpServletRequest request, ModelMap model) {

        try {
            String idAlumnos = request.getParameter("listaIdAlumnos");

            if (idAlumnos != null && !idAlumnos.equals("")) {
                String[] arrayIds = idAlumnos.split(";");

                for (String id : arrayIds) {
                    int iId = Integer.parseInt(id);
                    Alumno al = new Alumno();
                    al.setIdAlumno(iId);
                    serviceAlumnos.deleteAlumno(al);

                }
            }

            model.addAttribute("message", "Se ha borrado el alumno correctamente");

        } catch (Exception ex) {
            Logger.getLogger(GestionController.class.getName()).log(Level.SEVERE, null, ex);
        }

        return BASE_VIEW + "main";
    }

    @RequestMapping(value = "/editar", method = RequestMethod.POST)
    public String editar(HttpServletRequest request, ModelMap model) {

        Alumno al = new Alumno();
        try {
            serviceAlumnos.updateAlumno(al);

        } catch (Exception ex) {
            Logger.getLogger(GestionController.class.getName()).log(Level.SEVERE, null, ex);
        }

        return BASE_VIEW + "main";
    }

}
