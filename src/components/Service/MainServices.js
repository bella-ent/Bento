import React, { useEffect } from "react";
import { mainServicesData } from "../../data/mainServices";
import MainServiceCard from "./MainServiceCard";
import { useLocation } from "react-router-dom";

function MainServices() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div className="mainService">
			<h1>Our Services</h1>
			{mainServicesData.map((card) => (
				<MainServiceCard props={card} />
			))}
		</div>
	);
}

export default MainServices;
