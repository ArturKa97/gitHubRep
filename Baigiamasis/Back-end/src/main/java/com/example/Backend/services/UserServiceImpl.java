package com.example.Backend.services;

import com.example.Backend.entities.Role;
import com.example.Backend.entities.User;
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

    @Override
    public void addUser(User user) {
        userRepository.save(user);
        addRoleToUser(user.getId(), "USER");
    }

    @Override
    public void removeUser(Long id) {
        userRepository.deleteById(id);
    }

    public void addRoleToUser(Long id, String roleToAdd) {
        User user = getUserById(id);
        Role role = roleRepository.findByRole(roleToAdd);
        user.addRoleToUser(role);
        userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.getUserById(id);
    }

    @Override
    public User loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("User not found [email=%s]", email)));
    }
}


