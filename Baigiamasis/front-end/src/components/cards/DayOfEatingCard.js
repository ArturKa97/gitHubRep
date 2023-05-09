import * as React from 'react';
import {styled} from '@mui/material/styles';
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
import NutritionListItem from "../NutritionListItem";
import Box from "@mui/material/Box";
import HTTP from "../../api";
import {useMeals} from "../../api/mealsApi";
import AddMealSearchDialog from "../AddMealSearchDialog";
import RemoveMealSearchDialog from "../RemoveMealSearchDialog";
import DayOfEatingActionMenu from "../DayOfEatingActionMenu";

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const DayOfEatingCard = ({
                             dayOfEating,
                             mealsOfDay,
                             refetchDays,
                             openAlert,
                             alertType,
                             alertMessage,
                             dayToEdit,
                             openForm
                         }) => {
    const [expanded, setExpanded] = useState(false);
    const [openAddFormDialog, setOpenAddFormDialog] = useState(false);
    const [openRemoveFormDialog, setOpenRemoveFormDialog] = useState(false);
    const {id, name, description} = dayOfEating;

    const addMealToDayOfEating = async (meal, dayId) => {
        await HTTP.post(`/day/${dayId}`, meal);
        await alertType("success")
        await alertMessage("Meal(s) added!")
        await refetchDays()
        await openAlert(true)
    };
    const removeMealFromDayOfEating = async (meal, dayId) => {
        await HTTP.patch(`/day/${dayId}`, meal);
        await alertType("info")
        await alertMessage("Meal(s) removed!")
        await refetchDays();
        await openAlert(true)
    };

    const deleteDayOfEating = async (dayId) => {
        await HTTP.delete(`/day/${dayId}`);
        await alertType("info")
        await alertMessage("Day deleted!")
        await refetchDays();
        await openAlert(true)

    };
    const {meals = []} = useMeals();

    const mealList = mealsOfDay.map((listMeal, i) => (
        <Box key={i}> {listMeal.name} </Box>
    ))
    const emptyMealList = !mealsOfDay.length && (
        <Box> No meals added </Box>
    )


    let results = mealsOfDay.map(x => x.products).flat();
    const totals = results.reduce((total, product) => {
            total.calories += product.calories
            total.protein += product.protein
            total.carbs += product.carbs
            total.sugar += product.sugar
            total.fat += product.fat

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
        <Card sx={{
            maxWidth: 220,
            width: 220,
            border: 2,
            borderRadius: '16px',
            margin: 2
        }}>
            <AddMealSearchDialog itemData={meals} open={openAddFormDialog}
                                 onClose={() => setOpenAddFormDialog(false)} itemId={id} action={addMealToDayOfEating}/>
            <RemoveMealSearchDialog itemData={mealsOfDay} open={openRemoveFormDialog}
                                    onClose={() => setOpenRemoveFormDialog(false)} itemId={id}
                                    action={removeMealFromDayOfEating}/>
            <CardHeader
                action={
                    <DayOfEatingActionMenu deleteItem={() => {
                        deleteDayOfEating(id)
                    }} itemToEdit={() => {
                        dayToEdit(dayOfEating);
                        openForm(true)
                    }
                    } openSearchBarAddForm={() => {
                        setOpenAddFormDialog(true)
                    }
                    } openSearchBarRemoveForm={() => {
                        setOpenRemoveFormDialog(true)
                    }
                    }


                    />
                }
                title={name}
            />
            <CardMedia
                component="img"
                height="140"
                image="https://media.istockphoto.com/id/1291592209/vector/calendar-day-1-number-one.jpg?s=170667a&w=0&k=20&c=d0LHJ9mAhMcXglz5HmYQVsNBzZ_5h4YKKz9RrU5LAd4="
                alt="kebabas"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Day description: {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph> Total Nutrition Values:</Typography>
                    <Box>
                        <NutritionListItem nutrvalue={"Calories: " + totals.calories + " kcal"}/>
                        <NutritionListItem nutrvalue={"Protein: " + totals.protein + " g"}/>
                        <NutritionListItem nutrvalue={"Carbs: " + totals.carbs + " g"}/>
                        <NutritionListItem nutrvalue={"Sugar: " + totals.sugar + " g"}/>
                        <NutritionListItem nutrvalue={"Fat: " + totals.fat + " g"}/>
                    </Box>
                    <Typography paragraph>Meal List:</Typography>
                    {emptyMealList || mealList}
                </CardContent>
            </Collapse>
        </Card>
    );
}
export default DayOfEatingCard;