package com.example.Backend.services;

import com.example.Backend.entities.PersonalInfo;
import com.example.Backend.entities.Role;
import com.example.Backend.entities.User;
import com.example.Backend.repositories.PersonalInfoRepository;
import com.example.Backend.repositories.RoleRepository;
import com.example.Backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service

public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PersonalInfoRepository personalInfoRepository;

    @Override
    public void addUser(User user) {
        userRepository.save(user);
        addRoleToUser(user.getId(), "USER");
    }

    @Override
    public void removeUser(Long id) {
        userRepository.deleteById(id);
    }


    @Override
    public User getUserById(Long id) {
        return userRepository.getUserById(id);
    }

    @Override
    public void addRoleToUser(Long id, String roleToAdd) {
        User user = getUserById(id);
        Role role = roleRepository.findByRole(roleToAdd);
        user.addRoleToUser(role);
        userRepository.save(user);
    }

    @Override
    public void removeRoleFromUser(Long id, String roleToRemove) {
        User user = getUserById(id);
        Role role = roleRepository.findByRole(roleToRemove);
        user.removeRoleFromUser(role);
        userRepository.save(user);
    }

    @Override
    public void addPersonalInfo(Long id, PersonalInfo personalInfo) {
        User user = getUserById(id);
        PersonalInfo existingPersonalInfo = personalInfoRepository.getPersonalInfoById(id);

        if (existingPersonalInfo == null) {
            personalInfo.setUser(user);
            personalInfoRepository.save(personalInfo);
        }
        else {
            existingPersonalInfo.setName(personalInfo.getName());
            existingPersonalInfo.setSurname(personalInfo.getSurname());
            existingPersonalInfo.setAge(personalInfo.getAge());
            existingPersonalInfo.setGender(personalInfo.getGender());
            existingPersonalInfo.setHeight(personalInfo.getHeight());
            existingPersonalInfo.setWeight(personalInfo.getWeight());
            existingPersonalInfo.setBmi(personalInfo.getBmi());
            personalInfoRepository.save(existingPersonalInfo);
        }
    }

    @Override
    public PersonalInfo getPersonalInfoById(Long id) {
        return personalInfoRepository.getPersonalInfoById(id);
    }


    @Override
    public User loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("User not found [email=%s]", email)));
    }
}


