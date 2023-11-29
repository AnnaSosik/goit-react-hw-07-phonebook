import { createSlice } from "@reduxjs/toolkit";

// Creating a filter slice using createSlice
export const filterSlice = createSlice ({
name: 'filter', // Filter slice name
initialState: '', // Initial state of the filter
reducers: {
    changeFilter(state,action){
        return (state = action.payload);
    },
},
});
        


// Export the changeFilter action from the filter slice
export const {changeFilter} = filterSlice.actions;


// Export filter editor from filter slice
export const filterReducer = filterSlice.reducer 