package com.example.Backend.services;

import com.example.Backend.entities.FoodProduct;

import java.util.List;

public interface FoodProductService {
    List<FoodProduct> getAllProducts();

    FoodProduct addProduct(FoodProduct foodProduct);

    FoodProduct getProductById(Long id);

    void deleteProduct(Long id);
}
