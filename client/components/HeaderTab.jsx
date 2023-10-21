import { LocalDining } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const HeaderTab = () => {
	return (
		<div className='w-full mt-[130px] md:mt-[80px] py-[24px] px-[20px] md:px-[3rem] border-[1px] md:border-b-gray-200 border-transparent flex items-center gap-x-[16px] '>
			<div className='w-full md:w-[200px]'>
				<Button
					variant='contain'
					startIcon={<LocalDining color='white' />}
					sx={{
						padding: "16px 24px",
						width: "100%",
						backgroundColor: "black !important",
						
						borderRadius: "999px",
						color: "white",
					}}
				>
					<span className="capitalize text-[14px] font-[700] md:text-[16px] " >
                    Restaurants
                    </span>
				</Button>
			</div>

			<div className='w-full md:w-[200px]'>
				<Button
					variant='contain'
					startIcon={<LocalDining color='white' />}
					sx={{
						padding: "16px 24px",
						width: "100%",
						borderRadius: "999px",						
						color: "black",
					}}
				>
					<span className="capitalize text-[14px] font-[700] md:text-[16px] " >
                    Grocery
                    </span>
				</Button>
			</div>
		</div>
	);
};

export default HeaderTab;
