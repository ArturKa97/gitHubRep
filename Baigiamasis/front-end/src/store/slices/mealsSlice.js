import {createSlice} from "@reduxjs/toolkit";

const initialState = null

const mealsSlice = createSlice({
        name: "sliceMeals",
        initialState,
        reducers: {
            calculatedMealTotalValues(mealState, {payload: mealsWithTotalValues}) {
                return mealsWithTotalValues;
            }

        }
    }
)

export default mealsSlice.reducer;
export const { calculatedMealTotalValues} = mealsSlice.actions
