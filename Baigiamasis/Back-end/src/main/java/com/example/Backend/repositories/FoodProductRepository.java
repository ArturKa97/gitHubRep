package com.example.Backend.repositories;

import com.example.Backend.entities.FoodProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface FoodProductRepository extends JpaRepository<FoodProduct, Long> {
    List<FoodProduct> getAllProducts();
}
