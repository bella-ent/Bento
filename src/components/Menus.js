import React from "react";
import { menus } from "../data/menus";
import MenuCard from "./subComponents/MenuCard";
import { Button } from "react-bootstrap";

function Menus() {
	return (
		<div className="menu">
			<h1>Our Menu</h1>
			<div className="card-con">
				{menus.map((menu, index) => (
					<MenuCard key={index} menu={menu} />
				))}
			</div>
			<Button variant="success" id="menu-btn">
				See All
			</Button>
		</div>
	);
}

export default Menus;
