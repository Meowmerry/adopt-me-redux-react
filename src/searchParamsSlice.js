import { createSlice } from "@reduxjs/toolkit";


const searchParamsSlice = createSlice({
    name: 'searchParams', // type of redux  searchParams/all
    initialState: {
        value: {
            location: "",
            breed: "",
            animal: ""
        }
    },
    reducers: {
        all: (state, actions) => {
            state.value = actions.payload;
        }
        // you can create  all stuff here, exampl
        // undateLocation
        // updateBreed
        // updateAnimal
    }
});

export const { all } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;