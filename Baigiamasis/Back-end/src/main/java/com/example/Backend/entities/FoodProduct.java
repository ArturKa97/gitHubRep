package com.example.Backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;
import java.math.BigInteger;

@Getter
@Setter
@Entity
@Table(name = "product")
@NoArgsConstructor
@AllArgsConstructor
public class FoodProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Column(name = "name")
    private String name;


    @PositiveOrZero
    @Min(0)
    @Max(1000)
    @Column(name = "calories")
    private BigInteger calories;


    @PositiveOrZero
    @Digits(integer = 3, fraction = 2)
    @Column(name = "protein")
    private BigDecimal protein;


    @PositiveOrZero
    @Digits(integer = 3, fraction = 2)
    @Column(name = "carbs")
    private BigDecimal carbs;


    @PositiveOrZero
    @Digits(integer = 3, fraction = 2)
    @Column(name = "sugar")
    private BigDecimal sugar;


    @PositiveOrZero
    @Digits(integer = 3, fraction = 2)
    @Column(name = "fat")
    private BigDecimal fat;

}
