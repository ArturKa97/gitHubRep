package com.example.Backend.controllers;
import com.example.Backend.dto.LoginRequest;
import com.example.Backend.dto.LoginResponse;
import com.example.Backend.dto.UserDto;
import com.example.Backend.entities.User;
import com.example.Backend.entities.Role;
import com.example.Backend.services.JwtService;
import com.example.Backend.services.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@AllArgsConstructor
@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtService jwtService;

    @PostMapping
    public void addUser(@RequestBody @Valid User user) {
        userService.addUser(user);
    }

    @DeleteMapping("/{id}")
    public void removeUser(@PathVariable(value = "id") Long id) {
        userService.removeUser(id);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody @Valid LoginRequest loginRequest) {

        User user = authenticate(loginRequest);

        return new LoginResponse(generateJwt(user), UserDto.builder()
                .email(user.getEmail())
                .roles(user.getRoles().stream()
                        .map(Role::getRole)
                        .collect(Collectors.toSet()))
                .build());
    }

    private String generateJwt(User user) {
        return jwtService.createToken(user);
    }

    private User authenticate(LoginRequest loginRequest) {
        return (User) authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()))
                .getPrincipal();
    }

}
