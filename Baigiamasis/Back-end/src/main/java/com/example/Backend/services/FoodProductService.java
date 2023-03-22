package com.example.Backend.services;

import com.example.Backend.entities.FoodProduct;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public interface FoodProductService {
    List<FoodProduct> getAllProducts();
    FoodProduct addProduct(FoodProduct foodProduct);
    Optional<FoodProduct> getProductById(Long id);
    void deleteProduct (Long id);
}
