import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {Field, Form, Formik} from "formik";
import {CircularProgress} from "@mui/material";


const AddProductForm = () => {
    return (
        <>
            <Box
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
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
                }}>
                    {({isSubmitting}) => (
                        <Form>
                            <Field
                                name="productName"
                                label="Product Name"
                                placeholder="Product Name"
                                as={TextField}

                            />
                            <Field
                                name="calories"
                                label="Calories(100g)"
                                placeholder="Calories(100g)"
                                as={TextField}

                            />
                            <Field
                                name="protein"
                                label="Protein(100g)"
                                placeholder="Protein(100g)"
                                as={TextField}
                            />
                            <Field
                                name="carbs"
                                label="Carbs(100g)"
                                placeholder="Carbs(100g)"
                                as={TextField}
                            />
                            <Field
                                name="sugar"
                                label="Sugar(100g)"
                                placeholder="Sugar(100g)"
                                as={TextField}
                            />
                            <Field
                                name="fat"
                                label="Fat(100g)"
                                placeholder="Fat(100g)"
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