package com.example.Backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "meal")
@NoArgsConstructor
@AllArgsConstructor
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @NotBlank
    @Column(name = "name")
    private String description;

    @OneToMany(mappedBy = "meal" , cascade = CascadeType.ALL, orphanRemoval = true)
    private List<FoodProduct> foodProducts = new ArrayList<>();

}
