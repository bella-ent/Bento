import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RandomBox from "./RandomBox";
import { detailMenus, random } from "../../data/menus";
import MainMenuCard from "./MainMenuCard";
import orderContext from "../../contexts/orderContext";
import { Modal } from "react-bootstrap";

function MainMenu() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const [cost, setCost] = useState(0);
	const [menuName, setMenuName] = useState([]);
	const [show, setShow] = useState(false);

	function pay() {
		alert("Thank you for your order. We'll deliver your meal in 30 minutes.");
		setMenuName([]);
		setCost(0);
	}

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
						{!cost ? (
							<h5>please select your meal</h5>
						) : (
							menuName.map((menu) => (
								<div className="order-list">
									<span>{menu}</span> <span> €10 x 1</span>
								</div>
							))
						)}
						<h2 id="total">Total: €{cost}</h2>
						<span>Pay Now with: </span>
						<img
							onClick={pay}
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJ3lP1KLAPmfY7zfXyZlGXKwNV7bv_csb8A&usqp=CAU"
							alt="paypal"
							id="paypal"
						/>
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
