package com.example.Backend.services;
import com.example.Backend.entities.DayOfEating;
import com.example.Backend.entities.Meal;


import java.util.List;

public interface DayOfEatingService {
    List<DayOfEating> getAllDaysOfEating();

    void addDayOfEating(DayOfEating dayOfEating);

    void deleteDayOfEating(Long id);

    void addMealToDayOfEating(List<Meal> mealList,Long id);

    void removeMealFromDayOfEating(List<Meal> mealList,Long id);

    DayOfEating getDayOfEatingById(Long id);
}

