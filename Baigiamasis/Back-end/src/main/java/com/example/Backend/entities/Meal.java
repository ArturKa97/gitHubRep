package com.example.Backend.entities;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;


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
    @Column(name = "decription")
    private String description;

    @ManyToMany
    private Set<FoodProduct> products;


    public void addProduct(FoodProduct foodProduct) {
        products.add(foodProduct);
    }
    public void removeProduct(FoodProduct foodProduct) {
        products.remove(foodProduct);
    }


}
