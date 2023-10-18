import { configureStore } from "@reduxjs/toolkit"
import profileTokenSlice from "../profileTokenSlice"
import profileInfoSlice from "../profileInfoSlice"

const store = configureStore({
    reducer: {
        userToken: profileTokenSlice,
        profile: profileInfoSlice
    },
})
export default store