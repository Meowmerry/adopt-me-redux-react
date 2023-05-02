import { configureStore } from "@reduxjs/toolkit";
import { petApi } from './petApiService';
import adoptedPet from "./adoptedPetSlice";
import searchParams from './searchParamsSlice';

const store = configureStore({
    reducer: {
        adoptedPet,
        searchParams,
        // Add in [ ] because of the pattern from redux will be consistent
        // you also do like this:
        // "petApi" : petApi.reducer,
        [petApi.reducerPath]: petApi.reducer, // add reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(petApi.middleware), // add middleware
});

export default store;