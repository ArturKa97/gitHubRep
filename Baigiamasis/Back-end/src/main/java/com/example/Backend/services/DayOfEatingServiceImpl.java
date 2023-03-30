package com.example.Backend.services;

import com.example.Backend.entities.DayOfEating;
import com.example.Backend.entities.Meal;
import com.example.Backend.repositories.DayOfEatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class DayOfEatingServiceImpl implements DayOfEatingService {

    private final DayOfEatingRepository dayOfEatingRepository;

    @Override
    public List<DayOfEating> getAllDaysOfEating() {
        return dayOfEatingRepository.getAllDaysOfEating();
    }

    @Override
    public void addDayOfEating(DayOfEating dayOfEating) {
        if (dayOfEating.getId() == null) {
            dayOfEatingRepository.save(dayOfEating);
        } else {
            Set<Meal> mealsOfADay = getDayOfEatingById(dayOfEating.getId()).getMeals();
            dayOfEating.setMeals(mealsOfADay);
            dayOfEatingRepository.save(dayOfEating);
        }
    }

    @Override
    public void deleteDayOfEating(Long id) {
        dayOfEatingRepository.deleteById(id);
    }

    @Override
    public void addMealToDayOfEating(List<Meal> mealList, Long id) {
        DayOfEating dayOfEating = getDayOfEatingById(id);
        dayOfEating.addMeal(mealList);
        dayOfEatingRepository.save(dayOfEating);

    }

    @Override
    public void removeMealFromDayOfEating(List<Meal> mealList, Long id) {
        DayOfEating dayOfEating = getDayOfEatingById(id);
        dayOfEating.removeMeal(mealList);
        dayOfEatingRepository.save(dayOfEating);

    }

    @Override
    public DayOfEating getDayOfEatingById(Long id) {
        return dayOfEatingRepository.getDayOfEatingById(id);
    }
}
