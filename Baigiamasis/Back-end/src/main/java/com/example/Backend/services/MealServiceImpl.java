package com.example.Backend.services;

import com.example.Backend.entities.FoodProduct;
import com.example.Backend.entities.Meal;
import com.example.Backend.repositories.MealRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MealServiceImpl implements MealService {

    private final MealRepository mealRepository;

    @Override
    public List<Meal> getAllMeals() {
        return mealRepository.getAllMeals();
    }

    @Override
    public Meal addMeal(Meal meal) {

        return mealRepository.save(meal);
    }


    @Override
    public Meal getMealById(Long id) {

        return mealRepository.getMealById(id);
    }
}
