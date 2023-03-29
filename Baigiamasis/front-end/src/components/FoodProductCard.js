import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import NutritionListItem from "./NutritionListItem";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import ItemActionMenu from "./ItemActionMenu";
import HTTP from "../api";


const FoodProductCard = ({product, refetchProducts, openAlert, productToEdit, openForm}) => {

    const {id, name, calories, protein, carbs, sugar, fat} = product;

    const deleteProduct = async (productId) => {
        await HTTP.delete(`/products/${productId}`);
        await refetchProducts();
        await openAlert(true)
    };

    return (
        <>
            <Card sx={{
                maxWidth: 220,
                width: 220,
                maxHeight: 320,
                height: 320,
                border: 2,
                borderRadius: '16px',
                margin: 2
            }}>
                <CardHeader
                    action={
                        <ItemActionMenu deleteProduct={() => {
                            deleteProduct(id)
                        }} productToEdit={() => {
                            {productToEdit(product)};
                            {openForm(true)}}
                        }
                        />
                    }
                    title={name}
                />
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/2324px-Banana-Single.jpg"
                        alt="placeholder for image"
                    />
                    <CardContent>
                        <Typography fontWeight="bold" variant="h8" component="div">
                            Nutrition values(100g):
                        </Typography>
                        <Box>
                            <NutritionListItem nutrvalue={"Calories: "+calories+ " kcal"}/>
                            <NutritionListItem nutrvalue={"Protein: " + protein + " g"}/>
                            <NutritionListItem nutrvalue={"Carbs: " + carbs + " g"}/>
                            <NutritionListItem nutrvalue={"Sugar: " + sugar + " g"}/>
                            <NutritionListItem nutrvalue={"Fat: " + fat + " g"}/>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}

export default FoodProductCard