import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sortRestaurant: false,
	data: "sortData",
};

const sortSlice = createSlice({
	name: "sort",
	initialState,
	reducers: {
		toggleSortRestaurant: (state, action) => {
			console.log(state.data)
			state.sortRestaurant = action.payload;
		},
	},
});

export const { toggleSortRestaurant } = sortSlice.actions;
export default sortSlice.reducer;
