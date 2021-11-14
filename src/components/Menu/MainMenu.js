import React, { useState } from "react";
import RandomBox from "./RandomBox";
import { detailMenus, random } from "../../data/menus";
import MainMenuCard from "./MainMenuCard";
import orderContext from "../../contexts/orderContext";
import { Modal } from "react-bootstrap";

function MainMenu() {
	const [cost, setCost] = useState(0);
	const [menuName, setMenuName] = useState([]);
	const [show, setShow] = useState(false);

	return (
		<div className="main-menu-whole">
			<h1>Menu</h1>
			<orderContext.Provider
				value={{ cost, setCost, menuName, setMenuName, show, setShow }}
			>
				<div className="main-menu-con">
					<div>
						<div className="main-menus">
							{detailMenus.map((menu) => (
								<MainMenuCard menu={menu} />
							))}
							<MainMenuCard menu={random} />
						</div>
						{/* <RandomBox /> */}
					</div>

					<div className="order">
						<h2 id="order-title">Order</h2>
						{menuName.map((menu) => (
							<div className="order-list">
								<span>{menu}</span> <span> €10 x 1</span>
							</div>
						))}
						<h2 id="total">Total: €{cost}</h2>
					</div>
				</div>
				<Modal
					size="xl"
					show={show}
					onHide={() => setShow(false)}
					aria-labelledby="example-modal-sizes-title-lg"
				>
					<Modal.Header closeButton>
						<Modal.Title id="example-modal-sizes-title-lg">
							Custom Bento
						</Modal.Title>
					</Modal.Header>
					<RandomBox />
				</Modal>
			</orderContext.Provider>
		</div>
	);
}

export default MainMenu;
