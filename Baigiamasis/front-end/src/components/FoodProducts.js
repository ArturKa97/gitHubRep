import FoodProductCard from "./FoodProductCard";
import Box from "@mui/material/Box";
import * as React from 'react';
import {useProducts} from "../api/productsApi";
import {CircularProgress} from "@mui/material";
import Button from "@mui/material/Button";

const FoodProducts = () => {

    const {isFetching, refetch, products = []} = useProducts();

    const foodProductsElement = products.map((listProduct, i) => (
        <FoodProductCard key={i} name={listProduct.name} calories={listProduct.calories} protein={listProduct.protein}
                         carbs={listProduct.carbs} fat={listProduct.fat} sugar={listProduct.sugar}/>
    ));
    const loadingElement = isFetching && (
        <CircularProgress color="inherit"/>
    );

    return (
        <>
            <Box sx={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: 1,
                marginLeft: 6
            }}>
                <>
                    {loadingElement || foodProductsElement}
                </>
                <Button onClick={refetch}>
                    Test
                </Button>

            </Box>
        </>
    )
}

export default FoodProducts