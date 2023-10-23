import { configureStore } from "@reduxjs/toolkit";
import sortSlice from "./features/sortSlice";
import foodSlice from "./features/foodSlice";
import RestaurantSlice from "./features/RestaurantSlice";

const store = configureStore({
	reducer: {
        sort: sortSlice,
        food: foodSlice,
        restaurant: RestaurantSlice,
    },
});

export default store;
