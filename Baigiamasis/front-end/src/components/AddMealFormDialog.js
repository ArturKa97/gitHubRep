import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from "yup";
import {useState} from "react";
import {Field, Formik} from "formik";
import TextField from "@mui/material/TextField";
import {LinearProgress} from "@mui/material";
import Box from "@mui/material/Box";
import {useCreateMeal} from "../api/mealsApi";
import SnackbarAlert from "./SnackbarAlert";

const validationSchema = Yup.object().shape({
        mealName: Yup.string()
            .min(2, ({label, min}) => `${label} must contain more than ${min} chars!`)
            .max(20, ({label, max}) => `${label} must contain less than ${max} chars!`)
            .required()
            .label("Meal name"),
        description: Yup.string()
            .min(2, ({label, min}) => `${label} must contain more than ${min} chars!`)
            .max(100, ({label, max}) => `${label} must contain less than ${max} chars!`)
            .required()
            .label("Description"),
    }
)

const AddMealFormDialog = ({refetchItems, open, onClose, meal}) => {
    const mealValues = meal ?
        {
            id: meal.id,
            mealName: meal.name,
            description: meal.description
        } : {
            id: null,
            mealName: '',
            description: ''
        }
    const addMeal = useCreateMeal();
    const [alertOpen, setAlertOpen] = useState(false);

    const title = meal ? "Edit Meal" : "Add New Meal"

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>
                <Formik initialValues={mealValues}
                        onSubmit={async (mealValues, {setSubmitting}) => {
                            await addMeal(mealValues)
                            setSubmitting(false)
                            onClose()
                            refetchItems()
                            setAlertOpen(true)
                        }}
                        validationSchema={validationSchema}>
                    {({isSubmitting, submitForm, errors, touched}) => {
                        return (
                            <>
                                <DialogContent>
                                    <Field
                                        name="mealName"
                                        label="Meal name"
                                        placeholder="Meal name"
                                        error={!!errors.mealName && touched.mealName}
                                        helperText={touched.mealName && errors["mealName"]}
                                        as={TextField}

                                    />
                                    <Field
                                        name="description"
                                        label="Description"
                                        placeholder="Description"
                                        error={!!errors.description && touched.description}
                                        helperText={touched.description && errors["description"]}
                                        as={TextField}

                                    />
                                    {isSubmitting && <Box sx={{width: '100%', height: '100%'}}><LinearProgress/></Box>}
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="outlined" type="submit" disabled={isSubmitting}
                                            onClick={submitForm}>Add</Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </DialogActions>
                            </>
                        )
                    }}
                </Formik>
            </Dialog>
            <SnackbarAlert alertOpen={alertOpen} setAlertOpen={setAlertOpen} type={"success"} message={"Meal added!"}/>
        </>
    );
}
export default AddMealFormDialog