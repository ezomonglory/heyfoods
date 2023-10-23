"use client";
import React, { useState } from "react";
import SortRestaurantBox from "./SortRestaurantBox";

const SortRestaurantContainer = () => {

	return (
		<div className='flex w-full py-[64px]  md:px-[24px] h-full'>
			<div className=' w-full  '>
				<div className='mt-[24px]'>
					<SortRestaurantBox />
				</div>
			</div>
		</div>
	);
};

export default SortRestaurantContainer;
