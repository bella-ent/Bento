import React from "react";

function MenuCard({ menu }) {
	return (
		<div className="menu-card">
			<div>
				<h3>{menu.title}</h3>
				{/* <p>{menu.detail}</p> */}
				{menu.detail.map((list) => (
					<p>{list}</p>
				))}
			</div>
			<img src={menu.img} alt="img" />
		</div>
	);
}

export default MenuCard;
