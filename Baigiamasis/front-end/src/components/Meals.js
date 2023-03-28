import Box from "@mui/material/Box";
import * as React from 'react';
import MealCard from "./MealCard";
import {CircularProgress} from "@mui/material";
import {useMeals} from "../api/mealsApi";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCard from "./AddCard";



const Meals = () => {

    const {isFetching, refetch, meals = []} = useMeals();

    let totalCal = 0;

    const addingValues = (meals) => {
        for (const product of meals) {
            totalCal += +product.calories
        }
        return totalCal;
    }


    const mealElement = meals.map((listMeal, i) => (
        <>
            <MealCard key={i} title={listMeal.name} description={listMeal.description}
                      totalValues={addingValues(listMeal.products)}
                      // listMeal.products.map((product, i) => (
                      //     <Typography paragraph key={i}>
                      //         Protein: {product.protein},
                      //         Carbs: {product.carbs},
                      //         Sugar: {product.sugar},
                      //         Fat: {product.fat}
                      //     </Typography>
                      // ))}
                      productList={listMeal.products.map((product, i) => (
                          <Typography key={i} paragraph>{product.name}</Typography>
                      ))
                      }/>
        </>
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
                <AddCard/>
                {loadingElement || mealElement}
            </Box>
            <Button onClick={refetch}>
                Test
            </Button>
        </>
    )
}

export default Meals