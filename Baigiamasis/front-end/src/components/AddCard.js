import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import * as React from "react";
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

const AddCard = ({openForm}) => (
    <Card sx={{
        maxWidth: 220,
        width: 220,
        maxHeight: 320,
        height: 320,
        border: 2,
        borderRadius: '16px',
        margin: 2,
    }}>
        <CardActionArea onClick={openForm} sx={{
            maxWidth: 220,
            width: 220,
            maxHeight: 320,
            height: 320,
        }}>
            <AddCircleTwoToneIcon sx={{
                maxWidth: 120,
                width: 120,
                maxHeight: 120,
                height: 120,
            }}/>
        </CardActionArea>
    </Card>
)

export default AddCard;