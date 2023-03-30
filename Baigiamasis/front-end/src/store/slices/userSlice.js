import {createSlice} from "@reduxjs/toolkit";

const initialState = null

const userSlice = createSlice({
        name: "userSlice",
        initialState,
        reducers: {
            userLoggedIn(user, {payload: userWithValues}) {
                return userWithValues;
            },
            userLoggedOut(){
                return initialState
            }

        }
    }
)
export default userSlice.reducer;

