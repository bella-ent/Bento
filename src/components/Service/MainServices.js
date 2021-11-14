import React from "react";
import { mainServicesData } from "../../data/mainServices";
import MainServiceCard from "./MainServiceCard";

function MainServices() {
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
