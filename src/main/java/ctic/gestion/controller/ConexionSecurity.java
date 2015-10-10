package ctic.gestion.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

public class ConexionSecurity implements AuthenticationManager {

    private String grupo_admin;
    private String grupo_user;
    private String url_ldap;
    private String domain_ldap;

    public String getGrupo_admin() {
        return grupo_admin;
    }

    public void setGrupo_admin(String grupo_admin) {
        this.grupo_admin = grupo_admin;
    }

    public String getGrupo_user() {
        return grupo_user;
    }

    public void setGrupo_user(String grupo_user) {
        this.grupo_user = grupo_user;
    }

    public String getUrl_ldap() {
        return url_ldap;
    }

    public void setUrl_ldap(String url_ldap) {
        this.url_ldap = url_ldap;
    }

    public String getDomain_ldap() {
        return domain_ldap;
    }

    public void setDomain_ldap(String domain_ldap) {
        this.domain_ldap = domain_ldap;
    }

    @Override
    public Authentication authenticate(Authentication a) throws AuthenticationException {

        UsernamePasswordAuthenticationToken authentication = (UsernamePasswordAuthenticationToken) a;
        Authentication auth = null;

        String username = String.valueOf(authentication.getPrincipal());
        String password = String.valueOf(authentication.getCredentials());

        if (username.equals("rocio") && password.equals("rocio")) {
            List<GrantedAuthority> grantedAuths = new ArrayList<GrantedAuthority>();
            grantedAuths.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
            auth = new UsernamePasswordAuthenticationToken(username, password, grantedAuths);
        } else {
            throw new BadCredentialsException("El usuario " + username + " no tiene permisos de acceso");
        }

        return auth;

    }
}
