package com.example.Backend.services;

import com.example.Backend.entities.PersonalInfo;
import com.example.Backend.entities.User;

public interface UserService {
    void addUser (User user);
    void removeUser (Long id);
    User getUserById (Long id);
    void addRoleToUser (Long id, String roleToAdd);
    void removeRoleFromUser (Long id, String roleToRemove);
    void addPersonalInfo (Long id, PersonalInfo personalInfo);
    PersonalInfo getPersonalInfoById(Long id);
}
