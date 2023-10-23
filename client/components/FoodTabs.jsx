"use client";
import {
	getFoodTabAsync,
	getFoodsRestaurantAsync,
	toggleFoodRestaurant,
} from "@/redux/features/foodSlice";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodTabLoaders from "../Loaders/FoodTabLoaders";

const FoodTabs = () => {
	const [food, setFood] = useState([]);
	const sortedRestaurant = useSelector((state) => state.sort.sortRestaurant);
	const foodLoading = useSelector((state) => state.food.loading);
	// const foodLoading = true;
	console.log(foodLoading + "fooodd");

	const dispatch = useDispatch();

	const handleClick = (name) => {
		dispatch(toggleFoodRestaurant(true));
        dispatch(getFoodsRestaurantAsync(name))
	};

	useEffect(() => {
		dispatch(getFoodTabAsync())
			.unwrap()
			.then((res) => {
				console.log(res);
				setFood(res);
			});
	}, []);

	return (
		<div
			className={`overflow-scroll scroll-hidden ${
				sortedRestaurant === true && "hidden"
			} `}
		>
			{foodLoading ? (
				<FoodTabLoaders />
			) : (
				<div className='w-fit flex gap-x-[16px] md:py-8 px-[16px] md:px-12  '>
					{food.map((food, i) => (
						<Button
							key={i}
							variant='contain'
							disableElevation
							sx={{
								padding: "12px 8px ",
							}}
							onClick={()=>{
                                handleClick(food.name)
                            }}
						>
							<div className='flex flex-col items-center space-y-2  justify-center w-[70px]  '>
								<Image src={food.image} alt='Image' width='40' height='40' />
								<Typography
									variant='body2'
									color='black'
									sx={{ textTransform: "capitalize" }}
								>
									{food.name}
								</Typography>
							</div>
						</Button>
					))}
				</div>
			)}
		</div>
	);
};

export default FoodTabs;
