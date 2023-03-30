package com.example.Backend.services;

import com.example.Backend.entities.User;

public interface UserService {
    void addUser (User user);
    User getUser (String userEmail);

}
