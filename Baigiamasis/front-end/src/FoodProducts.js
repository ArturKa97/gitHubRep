import FoodProductCard from "./FoodProductCard";
import Box from "@mui/material/Box";

const FoodProducts = () => {
    return (
        <Box  sx={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            margin: 1
        }}>
            <FoodProductCard></FoodProductCard>
            <FoodProductCard></FoodProductCard>
            <FoodProductCard></FoodProductCard>
            <FoodProductCard></FoodProductCard>
            <FoodProductCard></FoodProductCard>
            <FoodProductCard></FoodProductCard>


        </Box>
    )
}

export default FoodProducts