package com.example.Backend.entities;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.List;
import java.util.Set;


@Entity
@EqualsAndHashCode
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
    @EqualsAndHashCode.Exclude
    private String name;

    @NotBlank
    @Column(name = "decription")
    @EqualsAndHashCode.Exclude
    private String description;

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST })
    private Set<FoodProduct> products;


    public void addProduct(List<FoodProduct> foodProducts) {
        this.products.addAll(foodProducts);

    }
    public void removeProduct(List<FoodProduct> foodProducts) {

        this.products.removeAll(foodProducts);

    }



}
