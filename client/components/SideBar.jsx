import { Apple, Close, LockOpen } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";

const SideBar = ({ setSideBarShow, sideBarShow }) => {
	return (
		<div className={`bg-[#0000006c] h-screen  fixed top-0 w-screen z-40  ${sideBarShow ? "block" : "hidden"} `}>
			<div className={`fixed h-screen flex flex-col  justify-between py-[128px]  bg-white md:w-[350px]  w-[90%] z-40 top-0 ${sideBarShow ? "animate-moveInLeft" : "moveOutLeft"}`}>
				<div
					className='absolute top-8 right-2'
					onClick={() => {
						setSideBarShow(false);
					}}
				>
					<IconButton>
						<Close />
					</IconButton>
				</div>

				<div className='flex space-x-4 w-full  px-4 py-2 hover:bg-[#eaeaea] cursor-pointer  '>
					<LockOpen />
					<span>Sign in</span>
				</div>

				<div className='flex flex-col space-y-2'>
					<div className=' w-full hover:bg-[#eaeaea] px-4 py-2 font-[500] text-black cursor-pointer '>
						Add your restaurant
					</div>

					<div className=' w-full hover:bg-[#eaeaea] px-4 py-2 font-[500] text-black cursor-pointer '>
						Become a delivery driver
					</div>

					<div className=' w-full hover:bg-[#eaeaea] px-4 py-2 font-[500] text-black cursor-pointer '>
						Go to Homepage
					</div>
				</div>

				<div className='flex flex-col space-y-8 px-4'>
					<div className='flex space-x-2 '>
						<Image src='/images/logo.svg' width={40} height={40} />
						<h1 className='text black font-[500]'>
							Experience the <br /> Heyfood mobile app
						</h1>
					</div>
					<div className='flex space-x-4'>
						<Button
							startIcon={<Apple />}
							sx={{
								backgroundColor: "black !important",
								borderRadius: "999px",
								padding: "8px 24px",
								textTransform: "capitalize",
								color: "white",
							}}
						>
							App Store
						</Button>

						<Button
							sx={{
								backgroundColor: "black !important",
								borderRadius: "999px",
								padding: "8px 24px",
								textTransform: "capitalize",
								color: "white",
							}}
						>
							<img src='/images/google-play-logo.svg' width={15} height={15} />

							<span className='ml-2'>Play Store</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
