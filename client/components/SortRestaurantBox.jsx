"use client";
import React, { useEffect, useRef, useState } from "react";
import MainBoxCard from "./MainBoxCard";
import { Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import AllRestaurantCard from "./AllRestaurantCards";
import { useDispatch, useSelector } from "react-redux";
import {
	resetSortData,
	toggleSortRestaurant,
} from "@/redux/features/sortSlice";
import { resetData, toggleFoodRestaurant } from "@/redux/features/foodSlice";
import AllRestaurantLoader from "@/Loaders/AllRestaurantsLoader";

const SortRestaurantBox = () => {
	const foodData = useSelector((state) => state.food.data);
	const foodLoad = useSelector((state) => state.food.foodRestaurant);
	const foodLoading = useSelector((state) => state.food.loading);
	const sortLoading = useSelector((state) => state.sort.loading);
	const sortData = useSelector((state) => state.sort.data);
	const sortload = useSelector((state) => state.sort.sortRestaurant);
	const dispatch = useDispatch();
    // for some reason use state wasnt working perfectly well so i had to do it manually and i didnt have enough time to debug it since i am on a deadline
	let data = [];

	useEffect(() => {
		if (foodLoad === true) {
			console.log(foodData);
		} else if (sortload === true) {
			console.log("da");
		}
	}, [foodLoad, sortload]);

	useEffect(() => {
		// setData(foodData)
	}, []);

	if (foodData.length !== 0) {
		data = foodData;
		console.log(data);
	}
	if (sortData.length !== 0) {
		data = sortData;
		console.log(data);
	}

	return (
		<div>
			<div className='flex flex-col gap-y-0 md:gap-y-[24px]  relative   h-full '>
				<div className='flex gap-x-4 items-center w-full mb-4 md:mb-0   '>
					<h1 className='text-black tracking-[-0.5px] font-[500] text-[22px] md:text-[24px] lg:text-[32px] '>
						Sorted Restaurants
					</h1>

					<Button
						variant='text'
						sx={{
							color: "red",
						}}
						onClick={() => {
							console.log("heeeeeu");
							dispatch(toggleSortRestaurant(false));
							dispatch(toggleFoodRestaurant(false));
							dispatch(resetData());
							dispatch(resetSortData());
						}}
					>
						RESET
					</Button>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[42px] md:gap-[8px] w-full h-fit '>
					{foodLoading || sortLoading ? (
						<AllRestaurantLoader />
					) : (
						data?.map((trend, i) => (
							<AllRestaurantCard
								key={i}
								image={trend.image}
								header={trend.name}
								offer={trend.offer}
								stars={trend.stars}
								foodsType={trend.foods}
								ratings={trend.ratings}
								delivery={trend.deliveries}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default SortRestaurantBox;
