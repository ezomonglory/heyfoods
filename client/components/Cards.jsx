import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Cards = ({ image }) => {
	return (
		<div
			className='w-[80vw] sm:w-[300px] h-[100%]  md:w-[400px] md:h-[170px] '
			// style={{
			// 	backgroundImage:
			// 		`url('${image})`,				
			// 	backgroundSize: "cover",                
            //     backgroundRepeat:"no-repeat",
			// 	backgroundPosition: "center center",
			// }}
            
		>
            <img src={image} alt="image" width="100%" height="100%" className="rounded-xl" />
        </div>
	);
};

export default Cards;
