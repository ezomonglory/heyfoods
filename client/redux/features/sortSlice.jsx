import { BASE_URL } from "@/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	sortRestaurant: false,
	loading: false,
	data: [],
};


export const sortRestaurantAsync = createAsyncThunk("fetch/sortRestaurantAsync", 
async (payload, {rejectWithValue}) => {    
    try {
        const response = await axios.get(
            `${BASE_URL}/api/restaurant/sort/${payload}`			
        );
        // console.log(response)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
const sortSlice = createSlice({
	name: "sort",
	initialState,
	reducers: {
		toggleSortRestaurant: (state, action) => {			            
			state.sortRestaurant = action.payload;
		},
		resetSortData: (state) => {
			state.data = [];
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(sortRestaurantAsync.pending, (state) => {
                console.log("pending")
				state.loading = true;
			})
			.addCase(sortRestaurantAsync.fulfilled, (state, action) => {
				state.loading = false;
                console.log("state.loading")
				state.data = action.payload;
                console.log(action)
                console.log(state.data)
			})
			.addCase(sortRestaurantAsync.rejected, (state, action) => {
				state.loading = false;
                console.log(action.payload)
			});
	},
});

export const { toggleSortRestaurant, resetSortData } = sortSlice.actions;
export const {} = sortSlice.actions;
export default sortSlice.reducer;
