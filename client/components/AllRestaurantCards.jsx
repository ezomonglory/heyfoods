import * as React from "react";

import { Sell, Star } from "@mui/icons-material";



const AllRestaurantCard = ({
	delivery,
	header,
	stars,
	open,
    image,
	offer,
	ratings,
	close,
	foodsType,
}) => {


	return (
		<div className='w-full md:p-2   '>
			<div className='bg-white md:p-[12px] rounded-md w-full  flex flex-col gap-y-[1px] justify-between'>
				<div
					className='w-full bg-gray-400 rounded-lg relative overflow-hidden '					
				>

                    <img src={image} className="w-full h-full min-w-[250px] min-h-[100px] " />

					{delivery ? (
						<div className='bg-[#00000096] absolute top-0   w-full font-[500] h-full text-white flex items-center justify-center text-[12px] md:text-[16px] px-[10%] text-center '>
							Delivery is currently unavailable
						</div>
					) : (
						<div className='bg-[#0000002c] absolute top-0 flex items-center justify-center w-full h-full '>
							{offer && (
								<div className='flex text-white bg-black py-1 px-2 items-center rounded-full text-[16px] absolute top-3 left-2 '>
									<Sell fontSize='14px' />
									<h1>{offer} </h1>
								</div>
							)}

							{open ||
								(close && (
									<div
										className={`${
											open ? "bg-[#00A205]" : "bg-[#FFA900]"
										} absolute bottom-3 left-2 text-[14px] py-[4px] px-[16px] rounded-md text-white `}
									>
										{open ? "Opens at 07:00AM" : "Closes by 09:00PM"}
									</div>
								))}
						</div>
					)}
				</div>

				<div className='flex flex-col gap-y-[4px]  '>
					<h1 className='text-black text-[16px] md:text-[24px] font-[500] truncate '>
						{header}
					</h1>

					<div className='truncate text-gray-400 text-[16px]  '>
						{foodsType.map((food, i) => (
							<span key={i} className='mr-2'>
								{food},
							</span>
						))}
					</div>

					<div className='flex items-center gap-x-[24px]'>
						<div className='flex gap-[4px]'>
							<Star
								sx={{
									color: "green !important",
								}}
							/>
							<h1>{stars}</h1>
						</div>
						<div className='flex gap-1'>
							<h1>{ratings}+</h1>
							<span>Ratings</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllRestaurantCard;
