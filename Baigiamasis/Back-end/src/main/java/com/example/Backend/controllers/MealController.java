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

    @GetMapping("/all")
    public List<Meal> getAllMeals() {
        return mealService.getAllMeals();
    }

    @PostMapping("/add")
    public Meal addMeal(@RequestBody Meal meal) {
        return mealService.addMeal(meal);
    }

    @PostMapping("/{id}")
    public void addProductToMeal(@RequestBody FoodProduct foodProduct, @PathVariable(value = "id") Long id) {
        mealService.addProductToMeal(foodProduct,id);
    }

    @GetMapping("/{id}")
    public Meal getMealById(@PathVariable(value = "id") Long id) {
        return mealService.getMealById(id);
    }
}
