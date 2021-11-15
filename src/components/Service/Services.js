import React, { useContext } from "react";
import { services, servicesDE } from "../../data/services";
import ServiceCard from "./ServiceCard";
import bgImg from "../../img/bg-service.png";
import languageContext from "../../contexts/languageContext";

function Services() {
	const { lang } = useContext(languageContext);
	return (
		<div className="services">
			<div id="trans">
				<h1>{lang === "en" ? "Our Services" : "Unsere Service"}</h1>
				<div className="card-con">
					{lang === "en"
						? services.map((service, index) => (
								<ServiceCard key={index} service={service} />
						  ))
						: servicesDE.map((service, index) => (
								<ServiceCard key={index} service={service} />
						  ))}
				</div>
			</div>
		</div>
	);
}

export default Services;
