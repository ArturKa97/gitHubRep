package com.example.Backend.services;

import com.example.Backend.entities.FoodProduct;
import com.example.Backend.entities.Meal;

import java.util.List;

public interface MealService {
    List<Meal> getAllMeals();

    void addMeal(Meal meal);

    void deleteMeal(Long id);

    void addProductToMeal(FoodProduct foodProduct, Long id);

//    void removeProductFromMeal(FoodProduct foodProduct, Long id);

    Meal getMealById(Long id);
}
