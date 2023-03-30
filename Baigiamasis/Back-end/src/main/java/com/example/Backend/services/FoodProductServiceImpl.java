package com.example.Backend.services;

import com.example.Backend.entities.FoodProduct;
import com.example.Backend.repositories.FoodProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class FoodProductServiceImpl implements FoodProductService {

    private final FoodProductRepository foodProductRepository;


    @Override
    public List<FoodProduct> getAllProducts() {
        return foodProductRepository.getAllProducts();
    }

    @Override
    public void addProduct(FoodProduct foodProduct) {
        foodProductRepository.save(foodProduct);

    }

    @Override
    public FoodProduct getProductById(Long id) {

        return foodProductRepository.getProductById(id);
    }

    @Override
    public void deleteProduct(Long id) {
        foodProductRepository.deleteById(id);

    }

}


