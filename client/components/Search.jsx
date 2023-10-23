/* eslint-disable react/no-unescaped-entities */
"use client";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import AllRestaurantCard from "./AllRestaurantCards";
import { useSelector } from "react-redux";
import AllRestaurantLoader from "@/Loaders/AllRestaurantsLoader";

const Search = ({ setSearch }) => {
	const data = useSelector((state) => state.restaurant.data);
	const loading = useSelector((state) => state.restaurant.loading);
	return (
		<div className='h-screen fixed bg-white w-full p-4 '>
			<div
				className='absolute top-4 right-4'
				onClick={() => {
					setSearch(false);
				}}
			>
				<IconButton>
					<Close />
				</IconButton>
			</div>

			<div className={`text-[14px] mt-12`}>
				Try Searching for names like Chop and Go, Nkoyo, Big Mama's Kitchen, Iya
				Meta etc..
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[42px] md:gap-[8px] w-full h-fit mt-12 '>
				{loading ? (
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
	);
};

export default Search;
