import {createSlice} from "@reduxjs/toolkit";

const initialState = null

const userSlice = createSlice({
        name: "userSlice",
        initialState,
        reducers: {
            userLoggedIn(userState, {payload: loggedInUser}) {
                return loggedInUser;
            },
            userLoggedOut(){
                return initialState
            }

        }
    }
)
export default userSlice.reducer;

