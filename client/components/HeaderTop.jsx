import { LocationOn, Menu, Search, ShoppingCart } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

const HeaderTop = ({ setSideBarShow }) => {
	return (
		<div className='text-black px-[16px] bg-white md:px-[3rem] py-[16px] lg:px-[4rem] flex justify-between items-center  z-30 '>
			<div className='flex  items-center justify-between '>
				<div className=' w-full flex items-center gap-[24px] lg:gap-[48px] '>
					<IconButton
						onClick={() => {
							setSideBarShow(true);
						}}
					>
						<Menu />
					</IconButton>

					<Image
						src='/images/logo.svg'
						className='hidden lg:block'
						alt='logo'
						width={40}
						height={40}
					/>

					<Button
						startIcon={<LocationOn />}
						variant='text'
						style={{
							color: "black",
							textTransform: "Capitalize",
							fontWeight: "700",
						}}
					>
						Set Location
					</Button>
				</div>
			</div>
			<div className='md:w-[30%] lg:w-[30%] hidden md:block '>
				<TextField
					variant='outlined'
					placeholder='Search restuarant or food'
					fullWidth
					sx={{
						borderRadius: 8,
						backgroundColor: "#F0F0F0",
						padding: "0.5px 1.2px",
						display: "inline-flex",
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderWidth: 0,
							},
							"&:hover fieldset": {
								borderWidth: 0,
							},
							"&.Mui-focused fieldset": {
								borderWidth: 0,
							},
						},
						"& input": {
							background: "transparent",
							color: "black",
							fontSize: "14px",
						},
					}}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<Search sx={{ color: "black" }} />
							</InputAdornment>
						),
					}}
				/>
			</div>

			<div className='md:flex gap-x-4 hidden'>
				<Button variant='text' sx={{ color: "black", fontWeight: "700" }}>
					Sign in
				</Button>

				<Button
					variant='contained'
					startIcon={<ShoppingCart sx={{ color: "white" }} />}
					sx={{
						backgroundColor: "black !important",
						padding: "8px 32px",
						borderRadius: "24px",
						"&:hover": {
							backgroundColor: "green !important",
						},
					}}
				>
					CART 0
				</Button>
			</div>

			<div className='flex md:hidden items-center justify-center'>
				<Button
					variant='contained'
					sx={{
						backgroundColor: "black !important",
						padding: "8px 16px",
						borderRadius: "24px",
						"&:hover": {
							backgroundColor: "green !important",
						},
					}}
				>
					<ShoppingCart sx={{ color: "white" }} />
				</Button>
			</div>
		</div>
	);
};

export default HeaderTop;
