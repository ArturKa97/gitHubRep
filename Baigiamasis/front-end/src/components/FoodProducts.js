import FoodProductCard from "./FoodProductCard";
import Box from "@mui/material/Box";
import * as React from 'react';
import {useProducts} from "../api/productsApi";

const FoodProducts = () => {

    const {products = []} = useProducts();

    const foodProductsElement = products.map((listProduct, i) => (
    <FoodProductCard key = {i} name ={listProduct.name} calories ={listProduct.calories} protein = {listProduct.protein}
                     carbs={listProduct.carbs} fat= {listProduct.fat} sugar={listProduct.sugar} />
            ));
    return (
        <>
            <Box sx={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: 1
            }}>
                {foodProductsElement}
            </Box>
        </>
    )
}

export default FoodProducts