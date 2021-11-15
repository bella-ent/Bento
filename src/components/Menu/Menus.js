import React, { useContext } from "react";
import { menus, menusDE } from "../../data/menus";
import MenuCard from "./MenuCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import languageContext from "../../contexts/languageContext";

function Menus() {
	const { lang } = useContext(languageContext);
	return (
		<div className="menu">
			<h1>Our Menu</h1>
			<div className="card-con">
				{lang === "en"
					? menus.map((menu, index) => <MenuCard key={index} menu={menu} />)
					: menusDE.map((menu, index) => <MenuCard key={index} menu={menu} />)}
			</div>
			<Link to="/menu">
				<Button id="menu-btn">
					{lang === "en" ? "See All" : "Alles sehen"}
				</Button>
			</Link>
		</div>
	);
}

export default Menus;
