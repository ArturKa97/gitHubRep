package com.example.Backend.controllers;
import com.example.Backend.entities.DayOfEating;
import com.example.Backend.entities.Meal;
import com.example.Backend.services.DayOfEatingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/day")
@CrossOrigin
public class DayOfEatingController {
    private final DayOfEatingService dayOfEatingService;

    @GetMapping
    public List<DayOfEating> getAllDaysOfEating() {
        return dayOfEatingService.getAllDaysOfEating();
    }

    @PostMapping
    public void addDayOfEating(@RequestBody DayOfEating dayOfEating) {
        dayOfEatingService.addDayOfEating(dayOfEating);
    }

    @PostMapping("/{id}")
    public void addMealToDayOfEating(@RequestBody List<Meal> mealList, @PathVariable(value = "id") Long id) {
        dayOfEatingService.addMealToDayOfEating(mealList,id);
    }
    @PatchMapping("/{id}")
    public void removeMealFromDayOfEating(@RequestBody List<Meal> mealList, @PathVariable(value = "id") Long id) {
        dayOfEatingService.removeMealFromDayOfEating(mealList,id);
    }
    @DeleteMapping("/{id}")
    public void deleteDayOfEating(@PathVariable(value = "id") Long id) {
        dayOfEatingService.deleteDayOfEating(id);

    }

    @GetMapping("/{id}")
    public DayOfEating getDayOfEatingById(@PathVariable(value = "id") Long id) {
        return dayOfEatingService.getDayOfEatingById(id);
    }
}

