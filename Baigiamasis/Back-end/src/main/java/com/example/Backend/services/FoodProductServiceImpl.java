package com.example.Backend.services;

import com.example.Backend.entities.FoodProduct;
import com.example.Backend.repositories.FoodProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FoodProductServiceImpl implements FoodProductService {

    private final FoodProductRepository foodProductRepository;


    @Override
    public List<FoodProduct> getAllProducts() {
        return foodProductRepository.getAllProducts();
    }

    @Override
    public FoodProduct addProduct(FoodProduct foodProduct) {
        return foodProductRepository.save(foodProduct);

    }

    @Override
    public Optional<FoodProduct> getProductById(Long id) {
        return foodProductRepository.findById(id);
    }

    @Override
    public void deleteProduct(Long id) {
        foodProductRepository.deleteById(id);

    }

}


