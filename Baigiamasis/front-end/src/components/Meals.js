import Box from "@mui/material/Box";
import * as React from 'react';
import MealCard from "./MealCard";
import {CircularProgress} from "@mui/material";
import {useMeals} from "../api/mealsApi";
import Button from "@mui/material/Button";

const Meals = () => {

    const {isFetching, refetch, meals = []} = useMeals();

    const mealElement = meals.map((listMeal, i) => (
        <MealCard key={i} name={listMeal.name} description={listMeal.description}/>
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
                {loadingElement || mealElement}
            </Box>
            <Button onClick={refetch}>
                Test
            </Button>
        </>
    )
}

export default Meals