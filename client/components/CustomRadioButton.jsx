// CustomRadioButton.js
"use client";
import React, { useEffect, useState } from "react";
import "./CustomRadioButton.css";
import { useDispatch, useSelector } from "react-redux";
import { sortRestaurantAsync, toggleSortRestaurant } from "@/redux/features/sortSlice";

const CustomRadioButton = ({ setSortShow }) => {
	const [selectedValue, setSelectedValue] = useState(null);
	const loading = useSelector((state) => state.sort.sortRestaurant);
	const dispatch = useDispatch();
	console.log(loading);

	// Function to handle radio button selection
	const handleRadioButtonChange = (value) => {
		if (selectedValue === value) {
			// If the same radio button is clicked again, deselect it
			setSelectedValue(null);
		} else {
			setSelectedValue(value);
		}
	};

	// Function to reset and deselect the radio button
	const handleReset = () => {
		setSelectedValue(null);
	};

	const handleClick = (value) => {
        // The setSortShow here is for mobile sort nav bar
		if(setSortShow){
            setSortShow(false)
        }        
		dispatch(toggleSortRestaurant(true));
        dispatch(sortRestaurantAsync(value))
	};

	useEffect(() => {
		if (loading === false) {
			handleReset();
		}
	}, [loading]);

	return (
		<div className='flex flex-col'>
			<label className='container flex items-center '>
				<span className="text-[16px] font-[500] md:text-[20px]" >Most Popular</span>
				<input
					type='radio'
					name={loading === false ? " rad " : "radio"}
					onClick={(e) => {
						handleClick("Most Popular");
					}}
					value='Most Popular'
					checked={selectedValue === "Most Popular"}
					onChange={() => handleRadioButtonChange("Most Popular")}
				/>
				<span className='checkmark'></span>
			</label>
			{/* <label className='container flex items-center '>
				<span className="text-[16px] font-[500] md:text-[20px]" >Nearest</span>
				<input
					type='radio'
					name={loading === false ? " rad " : "radio"}
					onClick={(e) => {
						handleClick(e.value);
					}}
					value='option2'
					checked={selectedValue === "option2"}
					onChange={() => handleRadioButtonChange("option2")}
				/>
				<span className='checkmark'></span>
			</label> */}
			<label className='container flex items-center '>
				<span className="text-[16px] font-[500] md:text-[20px]" >Highest Stars</span>
				<input
					type='radio'
					name={loading === false ? " rad " : "radio"}
					onClick={(e) => {
						handleClick("Highest Stars");
					}}
					value='Highest Stars'
					checked={selectedValue === "Highest Stars"}
					onChange={() => handleRadioButtonChange("Highest Stars")}
				/>
				<span className='checkmark'></span>
			</label>
			<label className='container flex items-center '>
				<span className="text-[16px] font-[500] md:text-[20px]" >Newest</span>
				<input
					type='radio'
					name={loading === false ? " rad " : "radio"}
					onClick={(e) => {
						handleClick("Newest");
					}}
					value='Newest'
					checked={selectedValue === "Newest"}
					onChange={() => handleRadioButtonChange("Newest")}
				/>
				<span className='checkmark'></span>
			</label>

			<label className='container flex items-center '>
				<span className="text-[16px] font-[500] md:text-[20px]"   >Most Rated</span>
				<input
					type='radio'
					name={loading === false ? " rad " : "radio"}
					onClick={(e) => {
						handleClick("Most Rated");
					}}
					value='Most Rated'
					checked={selectedValue === "Most Rated"}
					onChange={() => handleRadioButtonChange("Most Rated")}
				/>
				<span className='checkmark'></span>
			</label>
		</div>
	);
};

export default CustomRadioButton;
