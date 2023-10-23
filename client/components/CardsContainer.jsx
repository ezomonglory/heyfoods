"use client";
import React, { useState, useRef, useEffect } from "react";
import { Grid, Button, Box } from "@mui/material";
import Cards from "./Cards";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { useSelector } from "react-redux";

const cardData = [
	{
		image:
			"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201575.png_1694689433249?alt=media&token=a46bd9b5-6542-4730-a398-c36c42beb6d3",
	},
	{
		image:
			"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201581.png_1697208891861?alt=media&token=734df665-48a8-4bba-9b84-82503cb49e6d",
	},
	{
		image:
			"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201583.png_1697543651633?alt=media&token=1e317514-b6ab-4cd8-8dd2-294400d1ded4",
	},
	{
		image:
			"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201143.png_1693923743856?alt=media&token=f099faa3-b979-4e07-93f7-ef880ac9c0cb",
	},
	{
		image:
			"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201572.png_1694610444037?alt=media&token=994f8820-a067-4355-bb41-7763bb51f238",
	},
	{
		image:
			"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201574%20(1).png_1695049002414?alt=media&token=ed93548f-3cc2-4f08-89bb-26342e71750c",
	},
];

const CardsContainer = () => {
	const [startIndex, setStartIndex] = useState(0);
	const carouselRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const loading = useSelector((state) => state.sort.sortRestaurant);
	const foodLoading = useSelector((state) => state.food.foodRestaurant);

	const handleNext = () => {
		setStartIndex((prevIndex) => Math.min(prevIndex + 3, cardData.length - 3));
		scrollToNext();
	};

	const handleBack = () => {
		setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
		scrollToPrevious();
	};

	const scrollToNext = () => {
		if (carouselRef.current) {
			const containerWidth = carouselRef?.current?.offsetWidth;
			const scrollAmount = containerWidth;
			carouselRef?.current?.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};

	const scrollToPrevious = () => {
		if (carouselRef.current) {
			const containerWidth = carouselRef?.current?.offsetWidth;
			const scrollAmount = -containerWidth;
			carouselRef?.current?.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};

	// // Update activeIndex based on scroll position
	// const updateActiveIndex = () => {
	// 	const container = document.querySelector(".carousel");
	// 	if (container) {
	// 		const scrollPosition = container.scrollLeft;
	// 		const cardWidth = container.clientWidth / 3;
	// 		const newIndex = Math.floor(scrollPosition / cardWidth);
	// 		setActiveIndex(newIndex);
	// 	}
	// };

	// // Add a scroll listener to update activeIndex
	// useEffect(() => {
	// 	const container = document.querySelector(".carousel");
	// 	if (container) {
	// 		container.addEventListener("scroll", updateActiveIndex);
	// 	}
	// }, []);

	return (
		<div
			className={`relative ${
				(loading === true && "hidden") || (foodLoading === true && "hidden")
			} `}
		>
			<div
				className='flex overflow-scroll scroll-hidden p-2 md:pl-[50px]  '
				ref={carouselRef}
			>
				<div className='flex p-2 gap-x-[32px]  '>
					{cardData.map((card, index) => (
						<Cards key={index} image={card.image} />
					))}
				</div>

				<div className='hidden md:block'>
					<Button
                    variant="contain"
						onClick={handleNext}
						sx={{
							position: "absolute",
							borderRadius: "999px",
							height: "40px",
							minWidth: "40px",
							color: "black",
							padding: "0px",
							top: "40%",
							right: "10px",
							backgroundColor: "#EEEEEE !important",
							"&:hover": {
								backgroundColor: "#e0e0e0 !important ",
							},
						}}
					>
						<ArrowForward />
					</Button>

					<Button
                    variant="contain"
						onClick={handleBack}
						sx={{
							position: "absolute",
							borderRadius: "999px",
							height: "40px",
							minWidth: "40px",
							color: "black",
							padding: "0px",
							top: "40%",
							left: "10px",
							backgroundColor: "#EEEEEE !important",
							"&:hover": {
								backgroundColor: "#e0e0e0 !important ",
							},
						}}
					>
						<ArrowBack />
					</Button>
				</div>
			</div>

			{/* <Box className={classes.indicatorContainer}>
				{cardData.map((_, index) => (
					<div
						key={index}
						className={`${classes.indicator} ${
							index === activeIndex ? classes.activeIndicator : ""
						}`}
					/>
				))}
			</Box> */}
		</div>
	);
};

export default CardsContainer;
