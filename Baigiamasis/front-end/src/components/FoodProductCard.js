import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import NutritionListItem from "./NutritionListItem";
import Box from "@mui/material/Box";
import ClearIcon from '@mui/icons-material/Clear';


const FoodProductCard = ({name, calories, protein, carbs, sugar, fat}) => {
    return (
        <>
            <Card sx={{
                maxWidth: 220,
                width: 220,
                border: 2,
                borderRadius: '16px',
                margin: 2
            }}>
                <CardActionArea>
                    <ClearIcon />
                    <CardMedia
                        component="img"
                        height="180"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/2324px-Banana-Single.jpg"
                        alt="placeholder for image"
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography component="div">
                            Nutrition values:
                        </Typography>
                        <Box>
                            <NutritionListItem nutrvalue={calories}/>
                            <NutritionListItem nutrvalue={protein}/>
                            <NutritionListItem nutrvalue={carbs}/>
                            <NutritionListItem nutrvalue={sugar}/>
                            <NutritionListItem nutrvalue={fat}/>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}

export default FoodProductCard