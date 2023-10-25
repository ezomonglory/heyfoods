"use client";
import React, { useRef} from "react";

import AllRestaurantCard from "./AllRestaurantCards";

const AllRestaurantBox = ({ data }) => {
	const carouselRef = useRef(null);

	return (
		<div>
			<div className='flex flex-col gap-y-0 md:gap-y-[24px]  relative   h-full '>
				<div className='flex justify-between items-center w-full'>
					<h1 className='text-black tracking-[-0.5px] font-[500] text-[22px] md:text-[24px] lg:text-[32px] '>
						{data.name}
					</h1>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[42px] md:gap-[8px] w-full h-fit '>
					{data?.restaurants?.map((data, i) => (
						<AllRestaurantCard
							key={i}
							image={data.image}
							header={data.name}
							offer={data.offer}
							stars={data.stars}
							foodsType={data.foods}
							ratings={data.ratings}
							delivery={data.deliveries}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllRestaurantBox;
