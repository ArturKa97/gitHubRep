import * as React from "react";
import Box from "@mui/material/Box";

const NutritionListItem = (nutrvalue) => {
    return (
        <Box>
            {nutrvalue.nutrvalue}
        </Box>
    )
}
export default NutritionListItem;

