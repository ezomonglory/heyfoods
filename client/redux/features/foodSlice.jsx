import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	foodRestaurant: false,
	data: "foodData",
};

const foodSlice = createSlice({
	name: "sort",
	initialState,
	reducers: {
		toggleFoodRestaurant: (state, action) => {
			console.log("heyy");
			console.log(action.payload);
			state.foodRestaurant = action.payload;
		},
	},
});

export const { toggleFoodRestaurant } = foodSlice.actions;
export default foodSlice.reducer;
