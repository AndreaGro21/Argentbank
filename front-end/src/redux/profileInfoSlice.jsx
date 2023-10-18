
import { createSlice } from "@reduxjs/toolkit";

const profileInfoSlice = createSlice({
    name: "profile",
    initialState:
    {
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
    },
    reducers:
    {
        setGetProfile: (state, action) => {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
        },
        setEditProfile: (state, action) => {
            state.userName = action.payload

        },
        setResetProfile: () => {
            return {
                email: "",
                firstName: "",
                lastName: "",
                userName: "",
            };
        }
    }
})

export const { setGetProfile, setEditProfile, setResetProfile } = profileInfoSlice.actions
export default profileInfoSlice.reducer