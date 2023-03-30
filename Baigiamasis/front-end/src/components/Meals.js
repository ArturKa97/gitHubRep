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
import Typography from "@mui/material/Typography";

const Meals = () => {
    const {isFetching, refetch, meals = []} = useMeals();
    const [openFormDialog, setOpenFormDialog] = useState(false);
    const [editMeal, setEditMeal] = useState(null);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const mealElement = meals.map((listMeal, i) => (
            <MealCard key={i} meal={listMeal} mealProducts={listMeal.products} refetchMeals={refetch} openAlert={setAlertOpen}
                      alertType={setAlertType} alertMessage={setAlertMessage} mealToEdit={setEditMeal}
                      openForm={setOpenFormDialog}/>
    ))

    const loadingElement = isFetching && (
        <CircularProgress color="inherit"/>
    );
    const noMealsElement = !meals.length && (
       <Typography variant='h4' sx={{
           display: "flex",
           alignItems: "center",
           justifyContent: "center"
       }}>No meals found</Typography>
    );


    return (
        <>
            <Box sx={{
                display: "flex",
                flexWrap: 'wrap',
                alignItems: "center",
                justifyContent: "center",
                margin: 1,
            }}>
                <AddCard openForm={setOpenFormDialog} resetForm={setEditMeal}/>
                <AddMealFormDialog refetchItems={refetch} open={openFormDialog}
                                   onClose={() => setOpenFormDialog(false)} meal={editMeal}/>
                {loadingElement || noMealsElement || mealElement}
            </Box>
            <SnackbarAlert alertOpen={alertOpen} setAlertOpen={setAlertOpen} type={alertType} message={alertMessage}/>
        </>
    )
}

export default Meals