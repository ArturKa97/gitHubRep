import Box from "@mui/material/Box";
import * as React from 'react';
import {CircularProgress} from "@mui/material";
import AddCard from "./cards/AddCard";
import {useState} from "react";
import SnackbarAlert from "./SnackbarAlert";
import Typography from "@mui/material/Typography";
import {useDaysOfEating} from "../api/dayOfEatingApi";
import DayOfEatingCard from "./cards/DayOfEatingCard";
import AddDayFormDialog from "./AddDayFormDialog";

const DaysOfEating = () => {
    const {isFetching, refetch, daysOfEating = []} = useDaysOfEating();
    const [openFormDialog, setOpenFormDialog] = useState(false);
    const [editDayOfEating, setEditDayOfEating] = useState(null);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const dayOfEatingElement = daysOfEating.map((listDay, i) => (
        <DayOfEatingCard key={i} dayOfEating={listDay} mealsOfDay={listDay.meals} refetchDays={refetch} openAlert={setAlertOpen}
                  alertType={setAlertType} alertMessage={setAlertMessage} dayToEdit={setEditDayOfEating}
                  openForm={setOpenFormDialog}/>
    ))

    const loadingElement = isFetching && (
        <CircularProgress color="inherit"/>
    );
    const noDaysElement = !daysOfEating.length && (
        <Typography variant='h4' sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>No days found</Typography>
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
                <AddCard openForm={setOpenFormDialog} resetForm={setEditDayOfEating}/>
                <AddDayFormDialog refetchItems={refetch} open={openFormDialog}
                                   onClose={() => setOpenFormDialog(false)} dayOfEating={editDayOfEating}/>
                {loadingElement || noDaysElement || dayOfEatingElement}
            </Box>
            <SnackbarAlert alertOpen={alertOpen} setAlertOpen={setAlertOpen} type={alertType} message={alertMessage}/>
        </>
    )
}

export default DaysOfEating