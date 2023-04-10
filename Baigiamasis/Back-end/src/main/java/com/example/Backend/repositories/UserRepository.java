package com.example.Backend.repositories;

import com.example.Backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByEmail(String email);

}

