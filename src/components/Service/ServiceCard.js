import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
			<Link to={service.link}>
				<Button id="service-btn">{service.btn}</Button>
			</Link>
		</div>
	);
}

export default ServiceCard;
