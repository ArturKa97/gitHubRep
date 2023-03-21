import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

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
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Calories (100g): {calories} kcal,
                            Protein (100g): {protein} g,
                            Carbs (100g):{carbs} g,
                            Sugar (100g): {sugar} g,
                            Fat (100g): {fat} g.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}

export default FoodProductCard