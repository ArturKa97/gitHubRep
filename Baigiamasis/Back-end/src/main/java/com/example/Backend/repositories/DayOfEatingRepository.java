package com.example.Backend.repositories;
import com.example.Backend.entities.DayOfEating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DayOfEatingRepository extends JpaRepository<DayOfEating, Long> {
    @Query(value = "SELECT d FROM DayOfEating d LEFT JOIN FETCH d.meals")
    List<DayOfEating> getAllDaysOfEating();

    @Query(value = "SELECT d FROM DayOfEating d LEFT JOIN FETCH d.meals WHERE d.id = :id")
    DayOfEating getDayOfEatingById(@Param("id") Long id);

}

