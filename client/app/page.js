"use client";
import CardsContainer from "@/components/CardsContainer";
import FoodTabs from "@/components/FoodTabs";
import Header from "@/components/Header";
import HeaderTab from "@/components/HeaderTab";
import Main from "@/components/Main";

export default function Home() {
	return (
		<main>
			<Header />
			<HeaderTab />
			<FoodTabs />
			<CardsContainer />
			<Main />
		</main>
	);
}