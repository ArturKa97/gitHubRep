import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import NutritionListItem from "./NutritionListItem";
import Box from "@mui/material/Box";


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
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
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