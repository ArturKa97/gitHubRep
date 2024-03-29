import {Button, LinearProgress, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Field, Formik} from "formik";
import * as React from "react";
import * as Yup from 'yup'
import {login} from "../../api/usersApi";
import {useDispatch} from "react-redux";
import {userLoggedIn} from "../../store/slices/userSlice";
import {useLocation, useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";

const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .required()
})

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

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
                    LOGIN
                </Typography>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={async (values, {setSubmitting}) => {
                        console.log("login data", values)
                        const user = await login(values)
                        console.log("user", user)
                        dispatch(userLoggedIn(user))
                        setSubmitting(false)
                        // navigate to defined from location or to default index page
                        navigate(location.state?.from || "/")
                    }}
                    validationSchema={loginValidationSchema}>
                    {({errors, touched, isSubmitting, submitForm}) => (
                        <>
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
                            {isSubmitting && <Box sx={{width: '80%', height: '100%'}}><LinearProgress/></Box>}
                            <Button type="submit" disabled={isSubmitting} onClick={submitForm}
                                    sx={{
                                        marginTop: 2
                                    }} variant="contained">Login</Button>
                        </>
                    )}
                </Formik>
            </Box>
        </>
    )
}


export default LoginForm