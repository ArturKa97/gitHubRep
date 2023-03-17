package com.example.Backend.controllers;

import com.example.Backend.entities.FoodProduct;
import com.example.Backend.services.FoodProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class FoodProductController {

    private FoodProductService foodProductService;

    @Autowired
    public FoodProductController(FoodProductService foodProductService) {
        this.foodProductService = foodProductService;
    }
    @GetMapping("/all")
    public List<FoodProduct> getAllProducts () {
        return foodProductService.getAllProducts();
    }
    @PostMapping("/add")
    public FoodProduct addProduct (@RequestBody @Valid FoodProduct foodProduct) {
        return foodProductService.addProduct(foodProduct);
    }
}
