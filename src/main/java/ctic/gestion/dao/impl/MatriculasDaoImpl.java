package ctic.gestion.dao.impl;

import com.ibatis.sqlmap.client.SqlMapClient;
import ctic.gestion.dao.IAlumnosDao;
import ctic.gestion.dao.IMatriculasDao;
import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Asignatura;
import ctic.gestion.dto.Matricula;
import java.util.HashMap;
import java.util.List;
import static javax.xml.stream.XMLStreamConstants.NAMESPACE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class MatriculasDaoImpl extends SqlMapClientDaoSupport implements IMatriculasDao {

    public MatriculasDaoImpl() {

    }

    @Autowired
    @Qualifier("sqlMapClient")
    public void injectSqlMapClient(SqlMapClient sqlMapClient) {
        setSqlMapClient(sqlMapClient);
    }

   

    @Override
    public void insertMatricula(Alumno al, Asignatura asig) throws Exception {
    }

    @Override
    public void deleteMatricula(Alumno al, Asignatura asig) throws Exception {
    }

    @Override
    public void updateMatricula(Alumno al, Asignatura asig) throws Exception {
    HashMap hm = new HashMap();
   
        super.getSqlMapClientTemplate().update("update-Matricula", hm);
    
    }

    @Override
    public Matricula getMatricula(Integer idAlumno) throws Exception {
    
        HashMap hm = new HashMap();
        hm.put("idAlumno", idAlumno);
        Matricula mat = (Matricula)super.getSqlMapClientTemplate().queryForObject("select-Matricula", hm);
        return mat;
        
    }

    

}
