import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Field, Form, Formik} from "formik";
import * as React from "react";
import * as Yup from 'yup'
import HTTP from "../api";
import {useSelector} from "react-redux";
import {useQuery} from "react-query";
import {useState} from "react";

const personalInfoValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, ({label, min}) => `${label} must contain more than ${min} chars!`)
        .max(30, ({label, max}) => `${label} must contain less than ${max} chars!`)
        .required()
        .label("Name"),
    surname: Yup.string()
        .min(2, ({label, min}) => `${label} must contain more than ${min} chars!`)
        .max(30, ({label, max}) => `${label} must contain less than ${max} chars!`)
        .required()
        .label("Surname"),
    age: Yup.number()
        .positive("Must be a positive number!")
        .min(0, ({min}) => `Minimum ${min} years of age!`)
        .max(120, ({max}) => `Maximum ${max} years of age!`)
        .required()
        .label("Age"),
    height: Yup.number()
        .positive("Must be a positive number!")
        .min(0, ({min}) => `Minimum ${min} cm height!`)
        .max(300, ({max}) => `Maximum ${max} cm height!`)
        .required()
        .label("Height"),
    weight: Yup.number()
        .positive("Must be a positive number!")
        .min(0, ({min}) => `Minimum ${min} kg weight!`)
        .max(700, ({max}) => `Maximum ${max} kg weight!`)
        .required()
        .label("Weight"),
    bmi: Yup.number()
        .required()

})

const PersonalInfoForm = () => {

    const user = useSelector(({userSlice}) => userSlice?.userDto);

    const addPersonalInfo = async (pInfo, userId) => {
        await HTTP.post(`/user/pInfo/${userId}`, pInfo);
    };

    const getPersonalInfo = (userId) =>
        HTTP.get(`/user/pInfo/${userId}`)
            .then(response => response.data);

    const usePersonalInfo = (id) => {
        const context = useQuery(['getPersonalInfo', id], () => getPersonalInfo(id))
        return {...context, pInfo: context.data}
    }
    const {pInfo} = usePersonalInfo(user.id);

    const personalInfo = pInfo ? {
        name: pInfo.name,
        surname: pInfo.surname,
        age: pInfo.age,
        height: pInfo.height,
        weight: pInfo.weight,
        bmi: pInfo.bmi
    } : {
        name: '',
        surname: '',
        age: '',
        height: '',
        weight: '',
        bmi: ''

    }

    return (
        <>
            <Box
                noValidate
                autoComplete="off"
                sx={{
                    width: 300
                }}
            >
                <Formik
                    initialValues={personalInfo}
                    onSubmit={async (values, {setSubmitting}) => {
                        console.log(values)
                        await addPersonalInfo(values, user.id)
                        console.log("success")
                        setSubmitting(false)
                    }}
                    validationSchema={personalInfoValidationSchema}>
                    {({errors, touched}) => (
                        <Form>
                            <Field id="name"
                                   name="name"
                                   label="Name"
                                   variant="standard"
                                   error={!!errors.name && touched.name}
                                   helperText={touched.name && errors.name}
                                   as={TextField}
                            />
                            <Field id="surname"
                                   name="surname"
                                   label="Surname"
                                   variant="standard"
                                   error={!!errors.surname && touched.surname}
                                   helperText={touched.surname && errors.surname}
                                   as={TextField}
                            />
                            <Field id="age"
                                   name="age"
                                   label="Age"
                                   variant="standard"
                                   error={!!errors.age && touched.age}
                                   helperText={touched.age && errors.age}
                                   as={TextField}
                            />
                            <Field id="weight"
                                   name="weight"
                                   label="Weight"
                                   variant="standard"
                                   error={!!errors.weight && touched.weight}
                                   helperText={touched.weight && errors.weight}
                                   as={TextField}
                            />
                            <Field id="height"
                                   name="height"
                                   label="Height"
                                   variant="standard"
                                   error={!!errors.height && touched.height}
                                   helperText={touched.height && errors.height}
                                   as={TextField}
                            />
                            <Field id="bmi"
                                   name="bmi"
                                   label="BMI"
                                   variant="standard"
                                   error={!!errors.bmi && touched.bmi}
                                   helperText={touched.bmi && errors.bmi}
                                   as={TextField}
                            />
                            <Button type="submit" sx={{
                                marginTop: 2
                            }} variant="contained">Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </>
    )
}


export default PersonalInfoForm