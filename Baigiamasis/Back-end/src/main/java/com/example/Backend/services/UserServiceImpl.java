package com.example.Backend.services;

import com.example.Backend.entities.User;
import com.example.Backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }
    @Override
    public User getUser(String userEmail) {
        return userRepository.findByEmail(userEmail);
    }

}

