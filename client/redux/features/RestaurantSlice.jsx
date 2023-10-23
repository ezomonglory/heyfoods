import { BASE_URL } from "@/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: true,
	data: [],
};

export const getRestaurantAsync = createAsyncThunk(
	"restaurant/getRestaurantAsync",
	async (payload, { rejectWithValue }) => {
        console.log("called getRestaurant")
		try {
			const response = await axios.get(
				`${BASE_URL}/api/restaurant/`			
			);
            console.log(response)
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);

export const searchRestaurantAsync = createAsyncThunk(
	"restaurant/search",
	async (payload, { rejectWithValue }) => {
        console.log("called searchRestaurant")
		try {
			const response = await axios.get(
				`${BASE_URL}/api/restaurant/search?name=${payload}`			
			);
            console.log(response)
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);


const restaurantSlice = createSlice({
	name: "restaurant",
	initialState,
	reducers: {
		
	},

    extraReducers: (builder) => {
		builder
			.addCase(getRestaurantAsync.pending, (state) => {
				state.loading = true;
			})
			.addCase(getRestaurantAsync.fulfilled, (state, action) => {
				state.loading = false;
			})
			.addCase(getRestaurantAsync.rejected, (state, action) => {
				state.loading = false;
			})
            .addCase(searchRestaurantAsync.pending, (state) => {
				state.loading = true;
			})
			.addCase(searchRestaurantAsync.fulfilled, (state, action) => {
				state.loading = false;
                state.data = []
                state.data.push(action.payload)
			})
			.addCase(searchRestaurantAsync.rejected, (state, action) => {
				state.loading = false;
			});
	},

});

export const {} = restaurantSlice.actions

export default restaurantSlice.reducer;
