package com.example.Backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;
import java.math.BigInteger;

@Getter
@Setter
@Entity
@EqualsAndHashCode
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
    @EqualsAndHashCode.Exclude
    private String name;


    @PositiveOrZero
    @Min(0)
    @Max(1000)
    @Column(name = "calories")
    @EqualsAndHashCode.Exclude
    private BigInteger calories;


    @PositiveOrZero
    @Digits(integer = 2, fraction = 2)
    @Column(name = "protein")
    @EqualsAndHashCode.Exclude
    private BigDecimal protein;


    @PositiveOrZero
    @Digits(integer = 2, fraction = 2)
    @Column(name = "carbs")
    @EqualsAndHashCode.Exclude
    private BigDecimal carbs;


    @PositiveOrZero
    @Digits(integer = 2, fraction = 2)
    @Column(name = "sugar")
    @EqualsAndHashCode.Exclude
    private BigDecimal sugar;


    @PositiveOrZero
    @Digits(integer = 2, fraction = 2)
    @Column(name = "fat")
    @EqualsAndHashCode.Exclude
    private BigDecimal fat;

}
