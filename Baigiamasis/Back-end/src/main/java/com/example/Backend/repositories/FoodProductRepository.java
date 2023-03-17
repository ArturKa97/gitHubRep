package com.example.Backend.repositories;

import com.example.Backend.entities.FoodProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodProductRepository extends JpaRepository<FoodProduct, Long> {

    @Query(value = "SELECT f FROM FoodProduct f")
    List<FoodProduct> getAllProducts();

}
