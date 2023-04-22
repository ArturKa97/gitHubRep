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
@Table(name = "dayOfEating")
@NoArgsConstructor
@AllArgsConstructor
public class DayOfEating {
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

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    private Set<Meal> meals;


    public void addMeal(List<Meal> mealList) {
        this.meals.addAll(mealList);

    }

    public void removeMeal(List<Meal> mealList) {
        this.meals.removeAll(mealList);
    }

}

