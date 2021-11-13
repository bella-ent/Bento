import React from "react";
import { Button } from "react-bootstrap";

function ServiceCard({ service }) {
	return (
		<div>
			<div className="menu-card">
				<h3>{service.title}</h3>
				{/* <img src={services.img} alt="img" /> */}
			</div>
			<Button variant="success" id="service-btn">
				{service.btn}
			</Button>
		</div>
	);
}

export default ServiceCard;
