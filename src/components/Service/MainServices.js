import { mainServicesData } from "../../data/mainServices";
import MainServiceCard from "./MainServiceCard";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function MainServices() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div className="mainService">
			<div id="bg-m-service">
				<h1>Our Services</h1>
				{mainServicesData.map((card) => (
					<MainServiceCard props={card} />
				))}
			</div>
		</div>
	);
}

export default MainServices;
