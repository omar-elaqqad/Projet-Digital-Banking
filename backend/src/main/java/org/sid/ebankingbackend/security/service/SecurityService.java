package org.sid.ebankingbackend.security.service;



import org.sid.ebankingbackend.security.entities.AppRole;
import org.sid.ebankingbackend.security.entities.AppUser;

import java.util.List;

public interface SecurityService {
    AppUser saveNewUser(String username, String password, String rePwd);
    AppRole saveNewRole(String roleName, String description);
    void addRoleToUser(String username, String roleName);
    void removeRoleFromUser(String username, String roleName);
    AppUser loadUserByUsername(String username);

    List<AppUser> listUsers();
}
