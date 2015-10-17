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
@RequestMapping("/gestion/asignatura/*")
public class GestionAsignaturasController {

    public static String BASE_VIEW_ASIG = "/gestion/asignatura/";
    public static String BASE_VIEW_MENU = "/gestion/";
    @Autowired
    private AsignaturasService serviceAsignaturas;

    @RequestMapping(value = "/menu", method = RequestMethod.GET)
    public String inicio(HttpServletRequest request, ModelMap model) {

        return BASE_VIEW_MENU + "menu";
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public String listadoAsignaturas(HttpServletRequest request, ModelMap model) {

        List<Asignatura> lista = new ArrayList<Asignatura>();
        try {

            lista = serviceAsignaturas.getAsignaturas();

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }
        model.put("listaAsignaturas", lista);
        return BASE_VIEW_ASIG + "main";
    }

    @RequestMapping(value = "/nuevo", method = RequestMethod.POST)
    public String nuevo(HttpServletRequest request, ModelMap model) {

        try {

            String nombre = request.getParameter("nombre");
            String descripcion = request.getParameter("descripcion");

            Asignatura asig = new Asignatura();

            if (nombre != null && !nombre.equals("")) {
                asig.setNombre(nombre);
            }

            if (descripcion != null && !descripcion.equals("")) {
                asig.setDescripcion(descripcion);
            }

            serviceAsignaturas.insertAsignatura(asig);

            List<Asignatura> lista = serviceAsignaturas.getAsignaturas();
            model.put("listaAsignaturas", lista);
            model.addAttribute("message", "Insertado correctamente la nueva asignatura");

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return BASE_VIEW_ASIG + "main";
    }

    @RequestMapping(value = "/eliminar", method = RequestMethod.POST)
    public String borrar(HttpServletRequest request, ModelMap model) {

        try {
            String idAsignaturas = request.getParameter("listaIdAsignatura");

            if (idAsignaturas != null && !idAsignaturas.equals("")) {
                String[] arrayIds = idAsignaturas.split(";");

                for (String id : arrayIds) {
                    long iId = Integer.parseInt(id);
                    Asignatura asig = new Asignatura();
                    asig.setIdAsignatura(iId);
                    serviceAsignaturas.deleteAsignatura(asig);

                }
            }

            List<Asignatura> lista = serviceAsignaturas.getAsignaturas();
            model.put("listaAsignaturas", lista);

            model.addAttribute("message", "Se ha borrado la asignatura correctamente");

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }

        return BASE_VIEW_ASIG + "main";
    }

    @RequestMapping(value = "/editar", method = RequestMethod.POST)
    public String editar(HttpServletRequest request, ModelMap model) {
        String message = "";
        try {
            String idEditar = request.getParameter("idAsignaturaEditar");
            String nombreEditar = request.getParameter("nombreEditar");
            String apellidoEditar = request.getParameter("descripcionEditar");

            if (idEditar != null && !idEditar.equals("")) {
                Long iIdEditar = Long.parseLong(idEditar);
                Asignatura asig = new Asignatura();
                asig.setIdAsignatura(iIdEditar);
                asig.setDescripcion(apellidoEditar);
                asig.setNombre(nombreEditar);
                serviceAsignaturas.updateAsignatura(asig);
                message = "La asignatura ha sido actualizado correctamente";
                List<Asignatura> lista = serviceAsignaturas.getAsignaturas();
                model.put("listaAsignaturas", lista);
            } else {
                message = "No es posible editar la asignatura";
            }

        } catch (Exception ex) {
            Logger.getLogger(GestionAlumnoController.class.getName()).log(Level.SEVERE, null, ex);
        }

        model.addAttribute("message", message);

        return BASE_VIEW_ASIG + "main";
    }

}
