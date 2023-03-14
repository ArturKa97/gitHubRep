package com.example.Backend.controllers;

import com.example.Backend.entities.FoodProduct;
import com.example.Backend.services.FoodProductService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@NoArgsConstructor
@RequiredArgsConstructor
@RequestMapping("products")
public class FoodProductController {

    private FoodProductService foodProductService;

    @Autowired
    public FoodProductController(FoodProductService foodProductService) {
        this.foodProductService = foodProductService;
    }
    public List<FoodProduct> getAllProducts () {
        return foodProductService.getAllProducts();
    }
}
