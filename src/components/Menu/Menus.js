import React from "react";
import { menus } from "../../data/menus";
import MenuCard from "./MenuCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menus() {
	return (
		<div className="menu">
			<h1>Our Menu</h1>
			<div className="card-con">
				{menus.map((menu, index) => (
					<MenuCard key={index} menu={menu} />
				))}
			</div>
			<Link to="/menu">
				<Button id="menu-btn">See All</Button>
			</Link>
		</div>
	);
}

export default Menus;
