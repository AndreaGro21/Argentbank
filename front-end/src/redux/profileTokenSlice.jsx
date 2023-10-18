import { createSlice } from '@reduxjs/toolkit'

const profileTokenSlice = createSlice({
    name: 'userToken',
    initialState: { token: "" },
    reducers: {
        setLogIn: (state, action) => {
            state.token = action.payload.token
            
        },
        setLogOut: (state) => {
            state.token = ""
        },
    },
});


export const { setLogIn, setLogOut } = profileTokenSlice.actions
export default profileTokenSlice.reducer