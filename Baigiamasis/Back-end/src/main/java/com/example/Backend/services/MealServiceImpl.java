package com.example.Backend.services;

import com.example.Backend.entities.FoodProduct;
import com.example.Backend.entities.Meal;
import com.example.Backend.repositories.MealRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class MealServiceImpl implements MealService {

    private final MealRepository mealRepository;

    @Override
    public List<Meal> getAllMeals() {
        return mealRepository.getAllMeals();
    }

    @Override
    public void addMeal(Meal meal) {
        if (meal.getId() == null) {
            mealRepository.save(meal);
        }
        else {
            Set<FoodProduct> mealProducts = getMealById(meal.getId()).getProducts();
            meal.setProducts(mealProducts);
            mealRepository.save(meal);
        }


    }

    @Override
    public void deleteMeal(Long id) {
        mealRepository.deleteById(id);

    }

    @Override
    public void addProductToMeal(List<FoodProduct> foodProducts, Long id) {
        Meal meal = getMealById(id);
        meal.addProduct(foodProducts);
        mealRepository.save(meal);
    }

    @Override
    public void removeProductFromMeal(List<FoodProduct> foodProducts, Long id) {
        Meal meal = getMealById(id);
        meal.removeProduct(foodProducts);
        mealRepository.save(meal);
    }


    @Override
    public Meal getMealById(Long id) {

        return mealRepository.getMealById(id);
    }
}
