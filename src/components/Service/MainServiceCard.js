import React from "react";
import { Button } from "react-bootstrap";

function MainServiceCard({ props }) {
	return (
		<div className="main-ser-card-con">
			<img src={props.img} alt="img" />
			<div className="main-ser-detail">
				<h3>{props.title}</h3>
				<p>{props.detail}</p>
				<Button id="m-service-btn">{props.btn}</Button>
			</div>
		</div>
	);
}

export default MainServiceCard;
