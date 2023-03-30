import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";
import NutritionListItem from "./NutritionListItem";
import Box from "@mui/material/Box";
import HTTP from "../api";
import MealActionMenu from "./MealActionMenu";
import {useProducts} from "../api/productsApi";
import SearchBarDialog from "./SearchBarDialog";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const MealCard = ({meal, mealProducts, refetchMeals, openAlert, mealToEdit, openForm}) => {
    const [expanded, setExpanded] = useState(false);
    const [openFormDialog, setOpenFormDialog] = useState(false);
    const {id, name, description} = meal;

    const addProductToMeal = async (product , mealId) => {
        await HTTP.post(`/meals/${mealId}`, product);
        await refetchMeals();
    };

    const deleteMeal = async (mealId) => {
        await HTTP.delete(`/meals/${mealId}`);
        await refetchMeals();
        await openAlert(true)

    };
    let {products=[]} = useProducts();

    const productList= mealProducts.map((listProduct, i) => (
        <Box key={i}> {listProduct.name} </Box>
    ))

    const totals = mealProducts.reduce((total, product)=> {
            total.calories += product.calories
            total.protein += product.carbs
            total.carbs += product.calories
            total.sugar += product.carbs
            total.fat += product.calories

        return total
        },
        {
            calories: 0,
            protein: 0,
            carbs: 0,
            sugar: 0,
            fat: 0
        }
        )

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card sx={{ maxWidth: 220,
            width: 220,
            border: 2,
            borderRadius: '16px',
            margin: 2 }}>
            <SearchBarDialog itemData={products} open={openFormDialog}
                             onClose={() => setOpenFormDialog(false)} itemId={id} action={addProductToMeal}/>
            <CardHeader
                action={
                    <MealActionMenu deleteItem={() => {
                        deleteMeal(id)
                    }} itemToEdit={() => {
                        mealToEdit(meal);
                        openForm(true)}
                    } openSearchBarForm={() => {
                    setOpenFormDialog(true)}
                    }
                    />
                }
                title={name}
            />
            <CardMedia
                component="img"
                height="140"
                image="https://www.dogan.lt/image/cache/catalog/meniu/1_kebabas%20lavase_0029_IMG_0028%20-%20Copy-1600x1200.jpg"
                alt="kebabas"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Meal description: {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Total Nutrition Values:</Typography>
                    <Box>
                    <NutritionListItem nutrvalue={"Calories: " + totals.calories + " kcal"}/>
                    <NutritionListItem nutrvalue={"Protein: " + totals.protein + " g"}/>
                    <NutritionListItem nutrvalue={"Carbs: " + totals.carbs + " g"}/>
                    <NutritionListItem nutrvalue={"Sugar: " + totals.sugar + " g"}/>
                    <NutritionListItem nutrvalue={"Fat: " + totals.fat + " g"}/>
                    </Box>
                    <Typography paragraph>Product List:</Typography>
                    {productList}
                </CardContent>
            </Collapse>
        </Card>
    );
}
export default MealCard;