import {
    Button,
    FormControl, FormHelperText,
    InputLabel,
    Select,
    TextField
} from "@mui/material";
import {Field, Formik} from "formik";
import * as React from "react";
import * as Yup from 'yup'
import HTTP from "../api";
import {useSelector} from "react-redux";
import {useState} from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SnackbarAlert from "./SnackbarAlert";
import MenuItem from "@mui/material/MenuItem";

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
    gender: Yup.string()
        .required(({label}) =>`${label} is required`)
        .oneOf(["Male","Female"])
        .label("Gender"),
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

})

const PersonalInfoForm = ({open, onClose, pInfo, refetch}) => {
    const [alertOpen, setAlertOpen] = useState(false);
    const user = useSelector(({userSlice}) => userSlice?.userDto);

    const addPersonalInfo = async (pInfo, userId) => {
        await HTTP.post(`/user/pInfo/${userId}`, pInfo);
    };

    const title = pInfo ? "Edit Personal Info" : "Add Personal Info"
    const buttonName = pInfo ? "Edit" : "Add"
    const message = pInfo ? "Personal info edited!" : "Personal Info added!"

    const personalInfo = pInfo ? {
        name: pInfo.name,
        surname: pInfo.surname,
        age: pInfo.age,
        gender: pInfo.gender,
        height: pInfo.height,
        weight: pInfo.weight,
        bmi: pInfo.bmi
    } : {
        name: '',
        surname: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        bmi: ''
    }

    const calculateBmi = (values) => {
        const heightM = (values.height/100);
        const heightSqM = heightM*heightM;
        const bmi = (values.weight)/(heightSqM);
        const bmiRounded = bmi.toFixed(1)
        return bmiRounded;
    }

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>
                <Formik
                    initialValues={personalInfo}
                    onSubmit={async (values, {setSubmitting , setFieldValue}) => {
                        const bmi = calculateBmi(values)
                        setFieldValue("bmi", bmi)
                        await addPersonalInfo({...values,bmi }, user.id)
                        setSubmitting(false)
                        onClose()
                        refetch()
                        setAlertOpen(true)
                    }}
                    validationSchema={personalInfoValidationSchema}>
                    {({errors, touched, submitForm, values,handleBlur,setFieldValue}) => {
                        return (
                            <>
                                <DialogContent>
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
                                    <FormControl
                                        fullWidth
                                        size="small"
                                        id="gender"
                                        error={!!errors.gender && touched.gender}
                                    >
                                        <InputLabel id="gender">Gender</InputLabel>
                                        <Select
                                            id="gender"
                                            label="Gender"
                                            name="gender"
                                            value={values.gender}
                                            onBlur={handleBlur}
                                            onChange={(e) => setFieldValue('gender', e.target.value)}
                                            error={!!errors.gender && touched.gender}
                                        >
                                            <MenuItem value={'Male'}>Male</MenuItem>
                                            <MenuItem value={'Female'}>Female</MenuItem>
                                        </Select>
                                        <FormHelperText sx={{ color: 'error.main' }}>{errors.gender}</FormHelperText>
                                    </FormControl>
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
                                </DialogContent>
                                <DialogActions>
                                    <Button type="submit" sx={{
                                        marginTop: 2
                                    }} variant="contained" onClick={submitForm}>{buttonName}</Button>
                                </DialogActions>
                            </>
                        )
                    }}
                </Formik>
            </Dialog>
            <SnackbarAlert alertOpen={alertOpen} setAlertOpen={setAlertOpen} type={"success"} message={message}/>
        </>
    )
}


export default PersonalInfoForm