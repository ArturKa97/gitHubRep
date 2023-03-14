package com.example.Backend.repositories;

import com.example.Backend.entities.FoodProduct;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class FoodProductRepositoryImpl implements FoodProductRepository{

    public List<FoodProduct> getAllProducts () {
        List<FoodProduct> foodProductList = new ArrayList<FoodProduct>();

    }
}
