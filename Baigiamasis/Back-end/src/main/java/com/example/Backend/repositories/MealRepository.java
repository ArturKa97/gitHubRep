package com.example.Backend.repositories;

import com.example.Backend.entities.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MealRepository extends JpaRepository<Meal, Long> {
    @Query(value = "SELECT m FROM Meal m LEFT JOIN FETCH m.products")
    List<Meal> getAllMeals();

    @Query(value = "SELECT m FROM Meal m LEFT JOIN FETCH m.products WHERE m.id = :id")
    Meal getMealById(@Param("id") Long id);

}
