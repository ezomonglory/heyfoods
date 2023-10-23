import { Skeleton } from "@mui/material";
import React from "react";

const FoodTabLoaders = () => {
	const food = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
	return (
		<div>
			<div className='w-fit flex gap-x-[16px] md:py-8 px-[16px] md:px-12 '>
				{food.map((food, i) => (
					<div key={i} className="flex flex-col items-center space-y-2 "  >
						<Skeleton variant='rounded' width={80} height={60} />
						<Skeleton variant='rectangle' width={80} height={10}  />
					</div>
				))}
			</div>
		</div>
	);
};

export default FoodTabLoaders;
