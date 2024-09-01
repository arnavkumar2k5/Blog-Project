import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            localStorage.setItem('userData', JSON.stringify(action.payload.userData));
        },
        logout: (state) => {
            console.log("Logging out, clearing userData");
            state.status = false;
            state.userData = null;
            localStorage.clear();
        }
    }
})

export const {login, logout} = AuthSlice.actions;

export default AuthSlice.reducer