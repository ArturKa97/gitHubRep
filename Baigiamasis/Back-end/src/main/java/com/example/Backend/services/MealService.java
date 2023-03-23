package com.example.Backend.services;

import com.example.Backend.entities.Meal;

import java.util.List;

public interface MealService {
    List<Meal> getAllMeals();

    Meal addMeal(Meal meal);

    Meal getMealById(Long id);
}
