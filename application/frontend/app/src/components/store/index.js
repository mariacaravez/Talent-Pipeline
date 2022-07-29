import { configureStore } from '@reduxjs/toolkit';
import searchStudentSlice from './search-student-slice';
import authSlice from './auth-slice';

const store = configureStore({
    reducer: {searchStudent: searchStudentSlice.reducer, auth: authSlice.reducer}
});

export default store;

