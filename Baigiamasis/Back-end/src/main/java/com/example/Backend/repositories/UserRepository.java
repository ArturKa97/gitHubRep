package com.example.Backend.repositories;

import com.example.Backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends JpaRepository<User,Long> {

    @Query(value = "SELECT u FROM User u WHERE u.email = :userEmail")
    User findByEmail(@Param("userEmail") String userEmail);

}

