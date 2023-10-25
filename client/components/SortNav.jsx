import { Close, Sort } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import CustomRadioButton from "./CustomRadioButton";

const SortNav = ({setSortShow,sortShow}) => {
	return (
		<div className={`w-full h-fit mt-[0px] bg-white z-30 px-[16px] relative ${sortShow ? "animate-sortDown": "sortDown"} `}>
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
			<CustomRadioButton setSortShow={setSortShow} />

			<div
				className='absolute top-2 right-2'
				onClick={() => {
					setSortShow(false);
				}}
			>
				<IconButton>
					<Close />
				</IconButton>
			</div>
		</div>
	);
};

export default SortNav;
