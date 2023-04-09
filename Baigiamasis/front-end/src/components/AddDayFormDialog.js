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
import SnackbarAlert from "./SnackbarAlert";
import {useAddDayOfEating} from "../api/dayOfEatingApi";

const validationSchema = Yup.object().shape({
        dayOfEatingName: Yup.string()
            .min(2, ({label, min}) => `${label} must contain more than ${min} chars!`)
            .max(20, ({label, max}) => `${label} must contain less than ${max} chars!`)
            .required()
            .label("Day name"),
        description: Yup.string()
            .min(2, ({label, min}) => `${label} must contain more than ${min} chars!`)
            .max(100, ({label, max}) => `${label} must contain less than ${max} chars!`)
            .required()
            .label("Description"),
    }
)

const AddDayFormDialog = ({refetchItems, open, onClose, dayOfEating}) => {
    const dayValues = dayOfEating ?
        {
            id: dayOfEating.id,
            dayOfEatingName: dayOfEating.name,
            description: dayOfEating.description
        } : {
            id: null,
            dayOfEatingName: '',
            description: ''
        }
    const [alertOpen, setAlertOpen] = useState(false);
    const addDayOfEating = useAddDayOfEating();

    const title = dayOfEating ? "Edit Day" : "Add New Day"
    const buttonName = dayOfEating ? "Edit" : "Add"
    const message = dayOfEating ? "Day edited!" : "Day added!"

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>
                <Formik initialValues={dayValues}
                        onSubmit={async (dayValues, {setSubmitting}) => {
                            await addDayOfEating(dayValues)
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
                                        name="dayOfEatingName"
                                        label="Day name"
                                        placeholder="Day name"
                                        error={!!errors.dayOfEatingName && touched.dayOfEatingName}
                                        helperText={touched.dayOfEatingName && errors["dayOfEatingName"]}
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
                                            onClick={submitForm}>{buttonName}</Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </DialogActions>
                            </>
                        )
                    }}
                </Formik>
            </Dialog>
            <SnackbarAlert alertOpen={alertOpen} setAlertOpen={setAlertOpen} type={"success"} message={message}/>
        </>
    );
}
export default AddDayFormDialog