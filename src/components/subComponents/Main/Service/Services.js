import React from "react";
import { services } from "../../../../data/services";
import ServiceCard from "./ServiceCard";

function Services() {
	return (
		<div className="services">
			<h1>Our Services</h1>
			<div className="card-con">
				{services.map((service, index) => (
					<ServiceCard key={index} service={service} />
				))}
			</div>
		</div>
	);
}

export default Services;
