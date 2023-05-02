import { createSlice } from "@reduxjs/toolkit";

export const adoptedPetSlice = createSlice({
    name: "adoptedPet",
    initialState: {
        value: null,
    },
    reducers: {
        adopt: (state, action) => {
            state.value = action.payload; // reducer will change old state to new state
        },
        // you can create any reducers which will change state here
        // Example:
        unaopt: (state, action) => {
            state.value = null;
        }
    },
});

/**
 *  whenevery you create a reducer, it automatically creates an action for you. 
 *  It is a little bit of black magic cure from redux toolkit
 *  When you crete a reducer, redux will create action for you.
 */
export const { adopt, unaopt } = adoptedPetSlice.actions;

/**
 * export const { adopt } = adoptedPetSlice.actions;
 * It is same as you create funciton 
 * function adopt (pet) {
 *  return { 
 *          type: "adopt", 
 *          payload: pet }
 * }
 * 
 */

export default adoptedPetSlice.reducer;