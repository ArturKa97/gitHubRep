import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {Field, Form, Formik} from "formik";
import {CircularProgress} from "@mui/material";
import * as Yup from "yup";
import {createProduct} from "../api/productsApi";

const productValidation = Yup.object().shape({
        productName: Yup.string()
            .min(2, ({label, min}) => `${label} must contain more than ${min} chars!`)
            .max(20, ({label, max}) => `${label} must contain less than ${max} chars!`)
            .required()
            .label("Product name"),
        calories: Yup.number()
            .positive("Must be a positive number!")
            .min(0,({ min}) => `Minimum ${min} calories!` )
            .max(1000, ({ max}) => `Maximum ${max}  calories!` )
            .required()
            .label("Calories"),
        protein: Yup.number()
            .positive("Must be a positive number!")
            .min(0,({ min}) => `Minimum ${min} grams of protein!` )
            .max(100, ({ max}) => `Maximum ${max} grams of protein!` )
            .required()
            .label("Protein"),
        carbs: Yup.number()
            .positive("Must be a positive number!")
            .min(0,({ min}) => `Minimum ${min} grams of carbs!` )
            .max(100, ({ max}) => `Maximum ${max} grams of carbs!` )
            .required()
            .label("Carbs"),
        sugar: Yup.number()
            .positive("Must be a positive number!")
            .min(0,({ min}) => `Minimum ${min}grams of  sugar!` )
            .max(100, ({ max}) => `Maximum ${max} grams of sugar!` )
            .required()
            .label("Sugar"),
        fat: Yup.number()
            .positive("Must be a positive number!")
            .min(0,({ min}) => `Minimum ${min} grams of fat!` )
            .max(100, ({ max}) => `Maximum ${max} grams of fat!` )
            .required()
            .label("Fat")
    }
)
// const addProduct = createProduct;


const AddProductForm = () => {
    return (
        <>
            <Box
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}
                noValidate
                autoComplete="off"
            >
                <Formik initialValues={{
                    productName: '',
                    calories: '',
                    protein: '',
                    carbs: '',
                    sugar: '',
                    fat: ''
                }} onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log("submitted values:", values)
                        setSubmitting(false)
                    }, 2000)
                }}
                        validationSchema={productValidation}>
                    {({isSubmitting , errors,touched}) => (
                        <Form>
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
                            {isSubmitting && <CircularProgress color="inherit"/>}
                            <Button variant="outlined" type="submit" disabled={isSubmitting}>
                                Submit product
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </>
    )
}
export default AddProductForm;