import { configureStore } from "@reduxjs/toolkit";
import sortSlice from "./features/SortSlice";
import foodSlice from "./features/foodSlice";

const store = configureStore({
	reducer: {
        sort: sortSlice,
        food: foodSlice,
    },
});

export default store;
