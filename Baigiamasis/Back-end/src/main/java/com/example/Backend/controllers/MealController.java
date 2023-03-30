package com.example.Backend.controllers;

import com.example.Backend.entities.FoodProduct;
import com.example.Backend.entities.Meal;
import com.example.Backend.services.MealService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/meals")
@CrossOrigin
public class MealController {

    private final MealService mealService;

    @GetMapping
    public List<Meal> getAllMeals() {
        return mealService.getAllMeals();
    }

    @PostMapping
    public void addMeal(@RequestBody Meal meal) {
        mealService.addMeal(meal);
    }

    @PostMapping("/{id}")
    public void addProductToMeal(@RequestBody List<FoodProduct> foodProducts, @PathVariable(value = "id") Long id) {
        mealService.addProductToMeal(foodProducts,id);
    }
    @PatchMapping("/{id}")
    public void removeProductFromMeal(@RequestBody List<FoodProduct> foodProducts, @PathVariable(value = "id") Long id) {
        mealService.removeProductFromMeal(foodProducts,id);
    }
    @DeleteMapping("/{id}")
    public void deleteMeal(@PathVariable(value = "id") Long id) {
        mealService.deleteMeal(id);

    }

    @GetMapping("/{id}")
    public Meal getMealById(@PathVariable(value = "id") Long id) {

        return mealService.getMealById(id);
    }
}
