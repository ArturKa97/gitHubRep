package com.example.Backend.controllers;
import com.example.Backend.dto.LoginRequest;
import com.example.Backend.dto.LoginResponse;
import com.example.Backend.entities.User;
import com.example.Backend.services.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@AllArgsConstructor
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    private AuthenticationManager authenticationManager;
    private UserService userService;

    public UserController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody @Valid LoginRequest loginRequest) {
        Authentication authenticatedUser = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        System.out.println(authenticatedUser);
        return null;
    }

    @PostMapping
    public void addUser(@RequestBody @Valid User user) {
        userService.addUser(user);

    }
    @GetMapping
    public User getUser(String userEmail) {
        return userService.getUser(userEmail);
    }
}
