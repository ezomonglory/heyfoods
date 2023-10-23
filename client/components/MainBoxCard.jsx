import * as React from "react";
import Button from "@mui/material/Button";

import { Sell, Star } from "@mui/icons-material";


const image =
	"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FWhatsApp%20Image%202022-10-18%20at%2017_1280x560_oMDayX67MEauhkko1Cgb8.jpg?alt=media&token=d328fbf8-e548-4b43-b569-2f0b73ea9aba";

const MainBoxCard = ({
	delivery,
	header,
	stars,
	open,
	offer,
	ratings,
	close,
	foodsType,
    image,
}) => {
	return (
		<div className='w-fit  '>
			<div className='bg-white rounded-md w-[250px] sm:w-[350px] md:w-[400px] lg:w-[350px]  flex flex-col gap-y-[1px] justify-between'>
				<div
					className='w-full bg-gray-400 rounded-lg overflow-hidden h-[100px] sm:h-[150px] lg:h-[150px] md:h-[180px] relative'
					style={{
						backgroundImage: `url(${image})`,
						backgroundPosition: "cover",
						backgroundSize: "cover",
					}}
				>
					{delivery ? (
						<div className='bg-[#00000096] w-full font-[500] h-full text-white flex items-center justify-center text-[12px] md:text-[16px] px-[10%] '>
							Delivery is currently unavailable
						</div>
					) : (
						<div className='bg-[#0000002c] w-full h-full '>
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

export default MainBoxCard;
