"use client";
import React, { useRef, useState } from "react";
import MainBoxCard from "./MainBoxCard";
import { Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useSelector } from "react-redux";
import RestaurantLoader from "@/Loaders/RestaurantLoader";

const MainBox = ({ data }) => {
	const [startIndex, setStartIndex] = useState(0);
	const carouselRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const loader = useSelector((state) => state.restaurant.loading);
    // const loader = true
	const handleNext = () => {
		setStartIndex((prevIndex) => Math.min(prevIndex + 3, 3));
		scrollToNext();
	};

	const handleBack = () => {
		setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
		scrollToPrevious();
	};

	const scrollToNext = () => {
		if (carouselRef.current) {
			const containerWidth = carouselRef.current.offsetWidth;
			const scrollAmount = containerWidth;
			carouselRef.current.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};

	const scrollToPrevious = () => {
		if (carouselRef.current) {
			const containerWidth = carouselRef.current.offsetWidth;
			const scrollAmount = -containerWidth;
			carouselRef.current.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};
	return (
		<div>
			<div className='flex flex-col gap-y-0 md:gap-y-[16px]  relative   h-full '>
				<div className='flex justify-between items-center w-full'>
					<h1 className='text-black tracking-[-0.5px] font-[500] text-[22px] md:text-[24px] lg:text-[32px] '>
						{data.name}
					</h1>
					<div className='flex gap-x-[24px] '>
						<Button
							variant='text'
							sx={{
								color: "black",
								fontWeight: "700",
								textTransform: "capitalize",
							}}
						>
							See all
						</Button>
						<div className=' hidden md:flex gap-x-[12px] items-center '>
							<Button
								onClick={handleBack}
								sx={{
									borderRadius: "999px",
									height: "40px",
									color: "black",
									minWidth: "40px",
									padding: "0px",
									backgroundColor: "#EEEEEE !important",
									"&:hover": {
										backgroundColor: "#e0e0e0 !important ",
									},
								}}
							>
								<ArrowBack />
							</Button>
							<Button
								onClick={handleNext}
								sx={{
									borderRadius: "999px",
									height: "40px",
									minWidth: "40px",
									padding: "0px",
									color: "black",
									backgroundColor: "#EEEEEE !important",
									"&:hover": {
										backgroundColor: "#e0e0e0 !important ",
									},
								}}
							>
								<ArrowForward />
							</Button>
						</div>
					</div>
				</div>
				<div className='overflow-x-scroll scroll-hidden ' ref={carouselRef}>
					<div className='flex gap-x-[16px] md:gap-x-[24px] w-screen '>
						{loader ? (
							<RestaurantLoader />
						) : (
							data?.restaurants?.map((trend, i) => (
								<MainBoxCard
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
			</div>
		</div>
	);
};

export default MainBox;
