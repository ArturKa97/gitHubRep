import {configureStore} from "@reduxjs/toolkit";
import sliceMeals from "./slices/mealsSlice"

const store = configureStore({
    reducer: {
        sliceMeals
    }
});

export default store;