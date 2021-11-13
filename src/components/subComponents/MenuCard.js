import React from "react";

function MenuCard({ menu }) {
	return (
		<div className="menu-card">
			<h3>{menu.title}</h3>
			<p>{menu.detail}</p>
			<img src={menu.img} alt="img" />
		</div>
	);
}

export default MenuCard;
