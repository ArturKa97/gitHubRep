package com.example.Backend.repositories;

import com.example.Backend.entities.FoodProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FoodProductRepository extends JpaRepository<FoodProduct, Long> {

    @Query(value = "SELECT f FROM FoodProduct f")
    List<FoodProduct> getAllProducts();

    @Query(value = "SELECT f FROM FoodProduct f WHERE f.id = :id")
    FoodProduct getProductById(@Param("id") Long id);
}
