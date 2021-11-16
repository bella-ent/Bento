import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import orderContext from "../../contexts/orderContext";

function MainMenuCard({ menu }) {
	const { cost, setCost, menuName, setMenuName, show, setShow } =
		useContext(orderContext);
	function addCost() {
		if (menu.title === "Custom Bento" || menu.title === "Kundenspezifisches") {
			setShow(!show);
		} else {
			setCost(cost + 10);
			setMenuName([...menuName, menu.title]);
		}
	}
	return (
		<div className="main-menu-card">
			<img src={menu.img} alt="img" />
			<h4>{menu.title}</h4>
			{/* <p>{menu.detail}</p> */}
			{menu.detail.map((list) => (
				<p>{list}</p>
			))}
			<Button className="m-menu-btn" onClick={addCost}>
				{menu.btn}
			</Button>
		</div>
	);
}

export default MainMenuCard;
