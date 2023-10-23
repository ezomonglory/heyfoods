"use client";
import React, { useEffect, useState } from "react";
import MainBox from "./MainBox";
import { Sort } from "@mui/icons-material";
import CustomRadioButton from "./CustomRadioButton";
// import {
// 	AllRestaurants,
// 	ChickenRep,
// 	Drinks,
// 	LoveitData,
// 	Market,
// 	offers,
// } from "@/Data";
import { Button, Divider } from "@mui/material";
import AllRestaurantBox from "./AllRestaurantBox";
import SortRestaurantContainer from "./SortRestaurantContainer";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantAsync } from "@/redux/features/RestaurantSlice";
import { pickRandomElementsFromArray } from "@/functions";

//   const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your array

//   const randomElements = pickRandomElementsFromArray(myArray, 5);
//   console.log(randomElements);

const Main = () => {
	const load = useSelector((state) => state.sort.sortRestaurant);
	const foodLoading = useSelector((state) => state.food.foodRestaurant);
    const foodData= useSelector((state)=> state.food.data)
	const [data, setData] = useState([]);
    const [LoveItData, setLoveItData] = useState([])
    const [special, setSpecial] = useState([])
    const [heyfood, setHeyfood] = useState([])
    const [AllRestaurants, setAllRestaurants ] = useState([])
	const dispatch = useDispatch();
    const [length, setLength] = useState(1)

	useEffect(() => {
		dispatch(getRestaurantAsync())
			.unwrap()
			.then((res) => {
				console.log(data);
				setData(res);
				const randomElements = pickRandomElementsFromArray(res, 7);
				const Loveitdata = {
					name: " You'd love it, try it ",
					restaurants: randomElements,
				}
                setLoveItData(Loveitdata)
                const specialdata= {
                    name:"Special Meals for You",
                    restaurants: pickRandomElementsFromArray(res, 7)
                }
                setSpecial(specialdata)

                const newHeyFood = {
                    name: "New on HeyFoods" ,
                    restaurants: pickRandomElementsFromArray(res,7)
                }
                setHeyfood(newHeyFood)

                const allRestaurants = {
                    name:"All Restaurants",
                    restaurants: res
                }
                setLength(res.length)
                setAllRestaurants(allRestaurants)
			});
	}, []);

	return (
		<div className='flex px-[16px] md:px-[24px] h-full'>
			<div
				className={` sm:w-[200px] md:w-[250px] lg:w-[300px] md:pl-[30px] lg:pl-[50px] flex-shrink-0 h-screen sticky top-0 hidden flex-col gap-y-[16px] items-start  py-[90px]  bg-white ${
					foodLoading === true ? "md:hidden" : "md:flex "
				} `}
			>
				<div>
					<h1 className='text-[24px] text-black font-[500]  '>All Stores</h1>
					<p className='text-[18px]'>{length} Stores </p>
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
					<SortRestaurantContainer  />
				</div>
			) : (
				<div className=' w-full flex flex-col flex-grow gap-y-[42px]  md:w-[70%] md:py-[92px] '>
					<MainBox data={LoveItData} />
					{/* <MainBox data={ChickenRep} /> */}
					<MainBox data={special} />
					<MainBox data={heyfood} />
					{/* <MainBox data={AllRestaurants} /> */}
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
