import React from "react";
import { Button } from "react-bootstrap";

function ServiceCard({ service }) {
	return (
		<div>
			<div className="ser-card">
				<h4>{service.title}</h4>
				<ul>
					{service.detail.map((list) => (
						<li>{list}</li>
					))}
				</ul>
			</div>
			<Button id="service-btn">{service.btn}</Button>
		</div>
	);
}

export default ServiceCard;
