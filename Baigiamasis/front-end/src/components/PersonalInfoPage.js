import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import HTTP from "../api";
import {useQuery} from "react-query";
import {Button} from "@mui/material";
import {useState} from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from '@mui/icons-material/Help';

const PersonalInfoPage = () => {

    const user = useSelector(({userSlice}) => userSlice?.userDto);
    const [openFormDialog, setOpenFormDialog] = useState(false);

    const getPersonalInfo = (userId) =>
        HTTP.get(`/user/pInfo/${userId}`)
            .then(response => response.data);

    const usePersonalInfo = (id) => {
        const context = useQuery(['getPersonalInfo', id], () => getPersonalInfo(id))
        return {...context, pInfo: context.data}
    }

    const {pInfo, refetch} = usePersonalInfo(user.id);

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

    const buttonName = pInfo ? "Edit" : "Add";

    return (
        <Box sx={{width: '100%', maxWidth: 500}}>
            <Typography variant="h6" gutterBottom>
                PERSONAL INFO
            </Typography>
            <Typography variant="h7" gutterBottom>
                Name: {personalInfo.name} <br/>
            </Typography>
            <Typography variant="h7" gutterBottom>
                Surname: {personalInfo.surname} <br/>
            </Typography>
            <Typography variant="h7" gutterBottom>
                Age: {personalInfo.age} <br/>
            </Typography>
            <Typography variant="h7" gutterBottom>
                Gender: {personalInfo.gender} <br/>
            </Typography>
            <Typography variant="h7" gutterBottom>
                Height: {personalInfo.height} cm <br/>
            </Typography>
            <Typography variant="h7" gutterBottom>
                Weight: {personalInfo.weight} kg<br/>
            </Typography>
                <Typography variant="h7" gutterBottom>
                    BMI: {personalInfo.bmi}
                </Typography>
            <Tooltip title="BMI-Body Mass Index will be calculated automatically once the personal info fields are filled.">
                <HelpIcon/>
            </Tooltip>
            <br/>
            <Button variant="outlined" onClick={() =>
                setOpenFormDialog(true)}>
                {buttonName}
            </Button>
            <PersonalInfoForm open={openFormDialog} onClose={() => setOpenFormDialog(false)}
                              pInfo={personalInfo} refetch={refetch}/>
        </Box>

    )
}
export default PersonalInfoPage;