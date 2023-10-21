"use client";
import React, { useEffect, useState } from "react";

import SortNav from "./SortNav";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import SideBar from "./SideBar";

const Header = () => {
	const [sortShow, setSortShow] = useState(false);
	const [sideBarShow, setSideBarShow] = useState(false);
	const [visible, setVisible] = useState(true);
	let p = 1;
	let visi;
	const handleScroll = () => {
		const currentScrollPos = window.scrollY;

		const newp = currentScrollPos;
		if (p > newp) {
			visi = true;
			setVisible(visi);
			p = newp;
		} else if (p < newp) {
			visi = false;
			setVisible(visi);
			p = newp;
		}
		console.log(newp);		
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, [visible]);

	console.log(visible, p);
	return (
		<div
			className={`text-black border-[1px] border-b-gray-200 border-transparent h-fit fixed top-[0px]  z-40 w-full left-0 ${
				sortShow && "bg-[#0000006c] h-screen "
			} `}
		>
			<HeaderTop sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} />
			<HeaderBottom setSortShow={setSortShow} sortShow={sortShow} />
			{sortShow && <SortNav setSortShow={setSortShow} />}
			{sideBarShow && <SideBar setSideBarShow={setSideBarShow} />}
		</div>
	);
};

export default Header;
