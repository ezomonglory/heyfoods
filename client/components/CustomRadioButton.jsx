// CustomRadioButton.js
"use client";
import React, { useEffect, useState } from "react";
import "./CustomRadioButton.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleSortRestaurant } from "@/redux/features/sortSlice";

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

	const handleClick = () => {
        // The setSortShow here is for mobile sort nav bar
		if(setSortShow){
            setSortShow(false)
        }
		dispatch(toggleSortRestaurant(true));
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
					onClick={() => {
						handleClick();
					}}
					value='option1'
					checked={selectedValue === "option1"}
					onChange={() => handleRadioButtonChange("option1")}
				/>
				<span className='checkmark'></span>
			</label>
			<label className='container flex items-center '>
				<span className="text-[16px] font-[500] md:text-[20px]" >Nearest</span>
				<input
					type='radio'
					name={loading === false ? " rad " : "radio"}
					onClick={() => {
						handleClick();
					}}
					value='option2'
					checked={selectedValue === "option2"}
					onChange={() => handleRadioButtonChange("option2")}
				/>
				<span className='checkmark'></span>
			</label>
			<label className='container flex items-center '>
				<span className="text-[16px] font-[500] md:text-[20px]" >Highest rated</span>
				<input
					type='radio'
					name={loading === false ? " rad " : "radio"}
					onClick={() => {
						handleClick();
					}}
					value='option3'
					checked={selectedValue === "option3"}
					onChange={() => handleRadioButtonChange("option3")}
				/>
				<span className='checkmark'></span>
			</label>
			<label className='container flex items-center '>
				<span className="text-[16px] font-[500] md:text-[20px]" >Newest</span>
				<input
					type='radio'
					name={loading === false ? " rad " : "radio"}
					onClick={() => {
						handleClick();
					}}
					value='option4'
					checked={selectedValue === "option4"}
					onChange={() => handleRadioButtonChange("option4")}
				/>
				<span className='checkmark'></span>
			</label>

			<label className='container flex items-center '>
				<span className="text-[16px] font-[500] md:text-[20px]"   >Most Rated</span>
				<input
					type='radio'
					name={loading === false ? " rad " : "radio"}
					onClick={() => {
						handleClick();
					}}
					value='option5'
					checked={selectedValue === "option5"}
					onChange={() => handleRadioButtonChange("option5")}
				/>
				<span className='checkmark'></span>
			</label>
		</div>
	);
};

export default CustomRadioButton;
