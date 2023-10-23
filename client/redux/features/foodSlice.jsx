import { BASE_URL } from "@/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	foodRestaurant: false,
	data: [],
    loading:true
};

// The createAsyncThunk fetches the APIs from the backend
// This is where i consumed the APIs

export const getFoodTabAsync = createAsyncThunk(
	"foodTab/getFoodTabAsync",
	async (payload, { rejectWithValue }) => {        
		try {
			const response = await axios.get(
				`${BASE_URL}/api/foodTab/`			
			);            
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);


export const getFoodsRestaurantAsync = createAsyncThunk("foodRestaurant/getFoodsRestaurant", async (payload, {rejectWithValue}) => {
    console.log(payload)
    try {
        const response = await axios.get(
            `${BASE_URL}/api/restaurant/searchfood?food=${payload}`			
        );        
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

const foodSlice = createSlice({
	name: "food",
	initialState,
	reducers: {
		toggleFoodRestaurant: (state, action) => {
			console.log("heyy");
			console.log(action.payload);
			state.foodRestaurant = action.payload;
		},
        resetData: (state,action) => {
            state.data = []
        }
        
	},

	extraReducers: (builder) => {
		builder
			.addCase(getFoodTabAsync.pending, (state) => {
				state.loading = true;
			})
			.addCase(getFoodTabAsync.fulfilled, (state, action) => {
				state.loading = false;
			})
			.addCase(getFoodTabAsync.rejected, (state, action) => {
				state.loading = false;
			})
            .addCase(getFoodsRestaurantAsync.pending, (state) => {
				state.loading = true;
			})
			.addCase(getFoodsRestaurantAsync.fulfilled, (state, action) => {
				state.loading = false,                
                state.data = action.payload
                console.log(state.data)

			})
			.addCase(getFoodsRestaurantAsync.rejected, (state, action) => {
				state.loading = false;
			});
	},
});

export const { toggleFoodRestaurant, resetData } = foodSlice.actions;
export const {} = foodSlice.actions
export default foodSlice.reducer;
