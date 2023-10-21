"use client";
import React, { useState } from "react";
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
import { Divider } from "@mui/material";
import AllRestaurantBox from "./AllRestaurantBox";
import SortRestaurantBox from "./SortRestaurantBox";

const SortRestaurantContainer = ({ setClick }) => {
	return (
		<div className='flex w-full py-[64px]  md:px-[24px] h-full'>
			<div className=' w-full  '>
				<div className='mt-[24px]'>
					<SortRestaurantBox data={AllRestaurants} setClick={setClick}  />
				</div>
			</div>
		</div>
	);
};

export default SortRestaurantContainer;
