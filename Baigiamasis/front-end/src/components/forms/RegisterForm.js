import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Field, Form, Formik} from "formik";
import * as React from "react";
import * as Yup from 'yup'
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {createUser} from "../../api/usersApi";
import SnackbarAlert from "../SnackbarAlert";
import {useState} from "react";

const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .required()
})

const RegisterForm = () => {

    const userToRegister = createUser;
    const [alertOpen, setAlertOpen] = useState(false);
    const message = "User registered!";
    return (
        <>
            <Box
                noValidate
                autoComplete="off"
                sx={{
                    width: 300
                }}
            >
                <Typography variant="h6" gutterBottom>
                    REGISTER
                </Typography>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={async (values, {setSubmitting}) => {
                        console.log("register data", values)
                        await userToRegister(values)
                        setSubmitting(false)
                        setAlertOpen(true)
                    }}
                    validationSchema={loginValidationSchema}>
                    {({errors, touched}) => (
                        <Form>
                            <Field id="email"
                                   name="email"
                                   label="Email"
                                   variant="standard"
                                   fullWidth
                                   error={!!errors.email && touched.email}
                                   helperText={touched.email && errors.email}
                                   as={TextField}
                            />
                            <Field id="password"
                                   name="password"
                                   label="Password"
                                   type="password"
                                   variant="standard"
                                   fullWidth
                                   error={!!errors.password && touched.password}
                                   helperText={touched.password && errors.password}
                                   as={TextField}
                            />
                            <Button type="submit" sx={{
                                marginTop: 2
                            }} variant="contained">Register</Button>
                        </Form>
                    )}
                </Formik>
            </Box>
            <SnackbarAlert alertOpen={alertOpen} setAlertOpen={setAlertOpen} type={"success"} message={message}/>
        </>
    )
}


export default RegisterForm