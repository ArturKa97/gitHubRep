package com.example.Backend.entities;


import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
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
    @Column(name = "calories")
    private BigInteger calories;

    @Digits(integer = 3, fraction = 2)
    @Column(name = "protein")
    private BigDecimal protein;

    @Digits(integer = 3, fraction = 2)
    @Column(name = "carbs")
    private BigDecimal carbs;

    @Digits(integer = 3, fraction = 2)
    @Column(name = "sugar")
    private BigDecimal sugar;

    @Digits(integer = 3, fraction = 2)
    @Column(name = "fat")
    private BigDecimal fat;
}
