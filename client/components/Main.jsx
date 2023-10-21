"use client";
import React, { useEffect, useState } from "react";
import MainBox from "./MainBox";
import { Sort } from "@mui/icons-material";
import CustomRadioButton from "./CustomRadioButton";
import {
	AllRestaurants,
	ChickenRep,
	Drinks,
	LoveitData,
	Market,
	offers,
} from "@/Data";
import { Button, Divider } from "@mui/material";
import AllRestaurantBox from "./AllRestaurantBox";
import SortRestaurantContainer from "./SortRestaurantContainer";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
	const load = useSelector((state) => state.sort.sortRestaurant);
	const foodLoading = useSelector((state) => state.food.foodRestaurant);

	return (
		<div className='flex px-[16px] md:px-[24px] h-full'>
			<div
				className={` sm:w-[200px] md:w-[250px] lg:w-[300px] md:pl-[30px] lg:pl-[50px] flex-shrink-0 h-screen sticky top-0 hidden flex-col gap-y-[16px] items-start  py-[90px]  bg-white ${
					foodLoading === true ? "md:hidden" : "md:flex "
				} `}
			>
				<div>
					<h1 className='text-[24px] text-black font-[500]  '>All Stores</h1>
					<p className='text-[18px]'>(255 Stores)</p>
				</div>
				<div>
					<Button
						startIcon={<Sort />}
						variant='text'
						sx={{
							textTransform: "capitalize",
							color: "black",
							fontSize: "22px",
						}}
					>
						Sort
					</Button>
					<CustomRadioButton />
				</div>
			</div>
			{load || foodLoading ? (
				<div
					className={`w-full h-full   ${
						foodLoading ? "md:w-full" : "md:w-[80%]"
					} `}
				>
					<SortRestaurantContainer />
				</div>
			) : (
				<div className=' w-full flex flex-col flex-grow gap-y-[42px]  md:w-[70%] md:py-[92px] '>
					<MainBox data={LoveitData} />
					{/* <MainBox data={ChickenRep} /> */}
					<MainBox data={offers} />
					<MainBox data={Drinks} />
					<MainBox data={Market} />
					<Divider />
					<div className='mt-[24px]'>
						<AllRestaurantBox data={AllRestaurants} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Main;
