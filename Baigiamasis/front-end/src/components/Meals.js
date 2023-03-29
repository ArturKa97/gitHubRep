import Box from "@mui/material/Box";
import * as React from 'react';
import MealCard from "./MealCard";
import {CircularProgress} from "@mui/material";
import {useMeals} from "../api/mealsApi";
import Button from "@mui/material/Button";
import AddCard from "./AddCard";
import {useState} from "react";
import AddMealFormDialog from "./AddMealFormDialog";
import SnackbarAlert from "./SnackbarAlert";

const Meals = () => {
    const {isFetching, refetch, meals = []} = useMeals();
    const [openFormDialog, setOpenFormDialog] = useState(false);
    const [editMeal, setEditMeal] = useState(null);
    const [alertOpen, setAlertOpen] = useState(false);

    const mealElement = meals.map((listMeal, i) => (
            <MealCard key={i} meal={listMeal} products={listMeal.products} refetchMeals={refetch} openAlert={setAlertOpen}  mealToEdit={setEditMeal}
                      openForm={setOpenFormDialog}/>
    ))

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
                <AddCard openForm={setOpenFormDialog} resetForm={setEditMeal}/>
                <AddMealFormDialog refetchItems={refetch} open={openFormDialog}
                                   onClose={() => setOpenFormDialog(false)} meal={editMeal}/>
                {loadingElement || mealElement}
            </Box>
            <SnackbarAlert alertOpen={alertOpen} setAlertOpen={setAlertOpen} type={"info"} message={"Meal deleted!"}/>
            <Button onClick={refetch}>
                Test
            </Button>
        </>
    )
}

export default Meals