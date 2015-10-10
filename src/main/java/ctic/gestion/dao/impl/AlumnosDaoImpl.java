package ctic.gestion.dao.impl;

import com.ibatis.sqlmap.client.SqlMapClient;
import ctic.gestion.dao.IAlumnosDao;
import ctic.gestion.dto.Alumno;
import java.util.List;
import static javax.xml.stream.XMLStreamConstants.NAMESPACE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class AlumnosDaoImpl extends SqlMapClientDaoSupport implements IAlumnosDao {

    public AlumnosDaoImpl() {

    }

    @Autowired
    @Qualifier("sqlMapClient")
    public void injectSqlMapClient(SqlMapClient sqlMapClient) {
        setSqlMapClient(sqlMapClient);
    }

    @Override
    public List<Alumno> getAlumnos() throws Exception {

       
        List<Alumno> lista = super.getSqlMapClientTemplate().queryForList("select-Alumnos");
        return lista;
    }

    @Override
    public void insertAlumno(Alumno alumno) throws Exception {
    
        super.getSqlMapClientTemplate().insert("insert-Alumno", alumno);
    }

    @Override
    public void updateAlumno(Alumno alumno) throws Exception {
        super.getSqlMapClientTemplate().update("update-Alumno", alumno);
    }

    @Override
    public void deleteAlumno(Alumno alumno) throws Exception {
        super.getSqlMapClientTemplate().delete("delete-Alumno", alumno);
    }

}
