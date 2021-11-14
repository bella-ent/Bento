import React from "react";
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";
import bgImg from "../../img/bg-service.png";

function Services() {
	return (
		<div className="services">
			<div id="trans">
				<h1>Our Services</h1>
				<div className="card-con">
					{services.map((service, index) => (
						<ServiceCard key={index} service={service} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;