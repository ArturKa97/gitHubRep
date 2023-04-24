package com.example.Backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.math.BigDecimal;
import java.math.BigInteger;

@Entity
@EqualsAndHashCode
@Getter
@Setter
@Table(name = "personalInfo")
@NoArgsConstructor
@AllArgsConstructor
public class PersonalInfo {

    @Id
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @NotBlank
    @Column(name = "surname")
    private String surname;

    @Min(0)
    @Max(120)
    @Column(name = "age")
    private BigInteger age;

    @Min(0)
    @Max(300)
    @Digits(integer = 3, fraction = 2)
    @Column(name = "height")
    private BigDecimal height;

    @Min(0)
    @Max(700)
    @Digits(integer = 3, fraction = 2)
    @Column(name = "weight")
    private BigDecimal weight;

    @Column(name = "bmi")
    private BigDecimal bmi;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;
}
