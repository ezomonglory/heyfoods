"use client";
import { toggleFoodRestaurant } from "@/redux/features/foodSlice";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const food = [
	{ image: "/images/rice.svg", name: "Abacha" },
	{ image: "/images/camera.svg", name: "Amala" },
	{ image: "/images/beans.svg", name: "Beans" },
	{ image: "/images/chicken.svg", name: "Chicken" },
	{ image: "/images/burger.svg", name: "Burger" },
	{ image: "/images/chineese.svg", name: "Chineese" },
	{ image: "/images/cupcake.svg", name: "Cup Cake" },
	{ image: "/images/doughnut.svg", name: "Doughnut" },
	{ image: "/images/fastfood.svg", name: "Fast Food" },
	{ image: "/images/fries.svg", name: "Fries" },
	{ image: "/images/goat.svg", name: "Goat Meat" },
	{ image: "/images/grills.svg", name: "Grills" },
	{ image: "/images/grocery.svg", name: "Grocery" },
	{ image: "/images/icecream.svg", name: "Ice Cream" },

];

const FoodTabs = () => {
	const loading = useSelector((state) => state.sort.sortRestaurant);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(toggleFoodRestaurant(true));
	};

	return (
		<div
			className={`overflow-scroll scroll-hidden ${
				loading === true && "hidden"
			} `}
		>
			<div className='w-fit flex gap-x-[16px] md:py-8 px-[16px] md:px-12  '>
				{food.map((food, i) => (
					<Button
						key={i}
						variant='contain'
						disableElevation
						sx={{
							padding: "12px 8px ",
						}}
						onClick={handleClick}
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
		</div>
	);
};

export default FoodTabs;
