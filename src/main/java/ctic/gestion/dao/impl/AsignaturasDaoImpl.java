package ctic.gestion.dao.impl;

import com.ibatis.sqlmap.client.SqlMapClient;
import ctic.gestion.dao.IAlumnosDao;
import ctic.gestion.dao.IAsignaturasDao;
import ctic.gestion.dto.Alumno;
import ctic.gestion.dto.Asignatura;
import java.util.List;
import static javax.xml.stream.XMLStreamConstants.NAMESPACE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class AsignaturasDaoImpl extends SqlMapClientDaoSupport implements IAsignaturasDao {

    public AsignaturasDaoImpl() {

    }

    @Autowired
    @Qualifier("sqlMapClient")
    public void injectSqlMapClient(SqlMapClient sqlMapClient) {
        setSqlMapClient(sqlMapClient);
    }

    @Override
    public List<Asignatura> getAsignaturas() throws Exception {
         List<Asignatura> lista = super.getSqlMapClientTemplate().queryForList("select-Asignaturas");
        return lista;
    }

    @Override
    public void insertAsignatura(Asignatura asig) throws Exception {
        super.getSqlMapClientTemplate().insert("insert-Asignatura", asig);
    }

    @Override
    public void updateAsignatura(Asignatura asig) throws Exception {
        super.getSqlMapClientTemplate().update("update-Asignatura", asig);
    }

    @Override
    public void deleteAsignatura(Asignatura asig) throws Exception {
        super.getSqlMapClientTemplate().delete("delete-Asignatura", asig);
    }

   

    

}
