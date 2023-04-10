package com.example.Backend.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
public class UserDto {
    private String name;
    private String surname;
    private String email;
    private Set<String> roles;
}
