"use client";
import React, { useEffect, useState } from "react";

import SortNav from "./SortNav";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import SideBar from "./SideBar";
import Search from "./Search";

const Header = () => {
	const [sortShow, setSortShow] = useState(false);
	const [sideBarShow, setSideBarShow] = useState(false);
	const [visible, setVisible] = useState(true);
    const [search, setSearch] = useState(false)	

	return (
		<div
			className={`text-black border-[1px] border-b-gray-200 border-transparent h-fit fixed top-[0px]  z-40 w-full left-0 ${
				sortShow && "bg-[#0000006c] h-screen "
			} `}
		>
			<HeaderTop sideBarShow={sideBarShow} setSearch={setSearch} setSideBarShow={setSideBarShow} />
			<HeaderBottom setSortShow={setSortShow} setSearch={setSearch} sortShow={sortShow} />
			{sortShow && <SortNav setSortShow={setSortShow} sortShow={sortShow} />}
			 <SideBar setSideBarShow={setSideBarShow} sideBarShow={sideBarShow} />
            {search && <Search setSearch={setSearch} search={search} />}
		</div>
	);
};

export default Header;
