import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from "yup";
import {useCreateProduct} from "../api/productsApi";
import {useState} from "react";
import {Field, Formik} from "formik";
import TextField from "@mui/material/TextField";
import {Alert, LinearProgress, Snackbar} from "@mui/material";
import Box from "@mui/material/Box";
import SnackbarAlert from "./SnackbarAlert";

const validationSchema = Yup.object().shape({
        productName: Yup.string()
            .min(2, ({label, min}) => `${label} must contain more than ${min} chars!`)
            .max(20, ({label, max}) => `${label} must contain less than ${max} chars!`)
            .required()
            .label("Product name"),
        calories: Yup.number()
            .positive("Must be a positive number!")
            .min(0, ({min}) => `Minimum ${min} calories!`)
            .max(1000, ({max}) => `Maximum ${max}  calories!`)
            .required()
            .label("Calories"),
        protein: Yup.number()
            .positive("Must be a positive number!")
            .min(0, ({min}) => `Minimum ${min} grams of protein!`)
            .max(99, ({max}) => `Maximum ${max} grams of protein!`)
            .required()
            .label("Protein"),
        carbs: Yup.number()
            .positive("Must be a positive number!")
            .min(0, ({min}) => `Minimum ${min} grams of carbs!`)
            .max(99, ({max}) => `Maximum ${max} grams of carbs!`)
            .required()
            .label("Carbs"),
        sugar: Yup.number()
            .positive("Must be a positive number!")
            .min(0, ({min}) => `Minimum ${min}grams of  sugar!`)
            .max(99, ({max}) => `Maximum ${max} grams of sugar!`)
            .required()
            .label("Sugar"),
        fat: Yup.number()
            .positive("Must be a positive number!")
            .min(0, ({min}) => `Minimum ${min} grams of fat!`)
            .max(99, ({max}) => `Maximum ${max} grams of fat!`)
            .required()
            .label("Fat")
    }
)

const AddProductFormDialog = ({refetchItems, open, onClose, product}) => {
    const foodProduct = product ? {
        id: product.id,
        productName: product.name,
        calories: product.calories,
        protein: product.protein,
        carbs: product.carbs,
        sugar: product.sugar,
        fat: product.fat,
    } : {

        id: null,
        productName: '',
        calories: '',
        protein: '',
        carbs: '',
        sugar: '',
        fat: ''
    }
    const addProduct = useCreateProduct();
    const [alertOpen, setAlertOpen] = useState(false);

    const title = product ? "Edit Food Product" : "Add New Food Product"
    const buttonName =  product ? "Edit" : "Add"
    const message = product? "Product edited!":  "Product added!"
    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>
                <Formik initialValues={foodProduct}
                        onSubmit={async (foodProduct, {setSubmitting}) => {
                            await addProduct(foodProduct)
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
                                        name="productName"
                                        label="Product name"
                                        placeholder="Product name"
                                        error={!!errors.productName && touched.productName}
                                        helperText={touched.productName && errors["productName"]}
                                        as={TextField}

                                    />
                                    <Field
                                        name="calories"
                                        label="Calories(100g)"
                                        placeholder="Calories(100g)"
                                        error={!!errors.calories && touched.calories}
                                        helperText={touched.calories && errors["calories"]}
                                        as={TextField}

                                    />
                                    <Field
                                        name="protein"
                                        label="Protein(100g)"
                                        placeholder="Protein(100g)"
                                        error={!!errors.protein && touched.protein}
                                        helperText={touched.protein && errors["protein"]}
                                        as={TextField}
                                    />
                                    <Field
                                        name="carbs"
                                        label="Carbs(100g)"
                                        placeholder="Carbs(100g)"
                                        error={!!errors.carbs && touched.carbs}
                                        helperText={touched.carbs && errors["carbs"]}
                                        as={TextField}
                                    />
                                    <Field
                                        name="sugar"
                                        label="Sugar(100g)"
                                        placeholder="Sugar(100g)"
                                        error={!!errors.sugar && touched.sugar}
                                        helperText={touched.sugar && errors["sugar"]}
                                        as={TextField}
                                    />
                                    <Field
                                        name="fat"
                                        label="Fat(100g)"
                                        placeholder="Fat(100g)"
                                        error={!!errors.fat && touched.fat}
                                        helperText={touched.fat && errors["fat"]}
                                        as={TextField}
                                    />
                                    {isSubmitting && <Box sx={{width: '80%', height: '100%'}}><LinearProgress/></Box>}
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
export default AddProductFormDialog