import Box from "@mui/material/Box";
import * as React from 'react';
import MealCard from "./MealCard";

const Meals = () => {

    return (
        <>
            <Box sx={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: 1,
                marginLeft: 6
            }}>
                <MealCard/>
                <MealCard/>
                <MealCard/>
                <MealCard/>
                <MealCard/>
                <MealCard/>
                <MealCard/>


            </Box>
        </>
    )
}

export default Meals