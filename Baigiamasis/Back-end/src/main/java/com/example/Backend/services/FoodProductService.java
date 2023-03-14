package com.example.Backend.services;

import com.example.Backend.entities.FoodProduct;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FoodProductService {
    List<FoodProduct> getAllProducts();

}
