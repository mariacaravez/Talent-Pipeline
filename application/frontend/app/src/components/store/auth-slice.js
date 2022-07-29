import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        userID: null,
        isLogged: false,
        userTypeID: null,
        userName: null
    },
    reducers: {
        login(state, action) {
            state.isLogged = true;
            // user Id is temporarily set to 0 until back end authentication is implemented
            state.userID = action.payload.userID;
            state.userTypeID = action.payload.userTypeID;
            state.userName = action.payload.userName;
        },
        logout(state, action) {
            state.isLogged = false;
            state.userID = null;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;