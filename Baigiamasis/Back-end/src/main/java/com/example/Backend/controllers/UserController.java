package com.example.Backend.controllers;
import com.example.Backend.entities.User;
import com.example.Backend.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    private final UserService userService;

    @PostMapping
    public void addUser(@RequestBody @Valid User user) {
        userService.addUser(user);

    }
    @GetMapping
    public User getUser(String userEmail) {
        return userService.getUser(userEmail);
    }
}
