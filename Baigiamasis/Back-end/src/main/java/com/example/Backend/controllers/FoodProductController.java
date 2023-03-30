package com.example.Backend.controllers;

import com.example.Backend.entities.FoodProduct;
import com.example.Backend.services.FoodProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
@CrossOrigin
public class FoodProductController {

    private FoodProductService foodProductService;

    @Autowired
    public FoodProductController(FoodProductService foodProductService) {
        this.foodProductService = foodProductService;
    }
    @GetMapping
    public List<FoodProduct> getAllProducts () {
        return foodProductService.getAllProducts();
    }

    @PostMapping
    public void addProduct (@RequestBody @Valid FoodProduct foodProduct) {
        foodProductService.addProduct(foodProduct);
    }
    @GetMapping("/{id}")
    public FoodProduct getProductById (@PathVariable(value = "id") Long id) {
        return foodProductService.getProductById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct (@PathVariable(value = "id") Long id) {
        foodProductService.deleteProduct(id);
    }

}
