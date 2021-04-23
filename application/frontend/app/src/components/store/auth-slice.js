import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        userID: null,
        isLogged: false
    },
    reducers: {
        login(state, action) {
            state.isLogged = true;
            // user Id is temporarily set to 0 until back end authentication is implemented
            state.userID = 0;
        },
        logout(state, action) {
            state.isLogged = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;