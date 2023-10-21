"use client";
import React, { useEffect, useRef, useState } from "react";
import MainBoxCard from "./MainBoxCard";
import { Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import AllRestaurantCard from "./AllRestaurantCards";
import { useDispatch, useSelector } from "react-redux";
import { toggleSortRestaurant } from "@/redux/features/sortSlice";
import { toggleFoodRestaurant } from "@/redux/features/foodSlice";

const SortRestaurantBox = ({ data, setClick }) => {
	const foodData = useSelector((state) => state.food.data);
	const foodLoad = useSelector((state) => state.food.foodRestaurant);
	const sortData = useSelector((state) => state.sort.data);
	const sortload = useSelector((state) => state.sort.sortRestaurant);	
	const dispatch = useDispatch();
	const [dat, setDat] = useState();

	useEffect(() => {
		if (foodLoad === true) {
			setDat(foodData);
		} else if (sortload === true) {
			const da = sortData;
            console.log(da)
			setDat(da);
		}
	}, [foodLoad, sortload]);

	return (
		<div>
			<div className='flex flex-col gap-y-0 md:gap-y-[24px]  relative   h-full '>
				<div className='flex gap-x-4 items-center w-full'>
					<h1 className='text-black tracking-[-0.5px] font-[500] text-[22px] md:text-[24px] md:text-[32px] '>
						{data.name} {dat}
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
						}}
					>
						RESET
					</Button>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[42px] md:gap-[8px] w-full h-fit '>
					{data?.restaurants?.map((trend, i) => (
						<AllRestaurantCard
							key={i}
							image={trend.image}
							header={trend.name}
							offer={trend.offer}
							stars={trend.stars}
							foodsType={trend.foodsType}
							ratings={trend.ratings}
							delivery={trend.deliveries}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default SortRestaurantBox;
