import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainServiceCard({ props }) {
	return (
		<div className="main-ser-card-con">
			<img src={props.img} alt="img" />
			<div className="main-ser-detail">
				<h3>{props.title}</h3>
				<p>{props.detail}</p>
				<Link to={props.link}>
					<Button id="m-service-btn">{props.btn}</Button>
				</Link>
			</div>
		</div>
	);
}

export default MainServiceCard;
