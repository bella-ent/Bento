import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import RandomBox from "./RandomBox";
import { detailMenus, detailMenusDE, random, randomDE } from "../../data/menus";
import MainMenuCard from "./MainMenuCard";
import orderContext from "../../contexts/orderContext";
import { Modal } from "react-bootstrap";
import languageContext from "../../contexts/languageContext";

function MainMenu() {
	const { lang } = useContext(languageContext);
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const [cost, setCost] = useState(0);
	const [menuName, setMenuName] = useState([]);
	const [show, setShow] = useState(false);

	function pay() {
		if (cost !== 0) {
			alert(
				lang === "en"
					? "Thank you for your order. We'll deliver your meal in 30 minutes."
					: "Vielen Dank für Ihren Auftrag. Wir liefern Ihr Essen in 30 Minuten."
			);
			setMenuName([]);
			setCost(0);
		} else {
			alert(
				lang === "en"
					? "Please select your meal first."
					: "Bitte wählen Sie zuerst Ihre Gerichte aus."
			);
		}
	}

	function deleteMenu(menu) {
		setMenuName(
			menuName.filter((el) => {
				console.log(el, menu);
				return el !== menu;
			})
		);
		setCost(cost - 10);
	}

	return (
		<div className="main-menu-whole">
			<h1>{lang === "en" ? "Menu" : "Menü"}</h1>
			<orderContext.Provider
				value={{ cost, setCost, menuName, setMenuName, show, setShow }}
			>
				<div className="main-menu-con">
					<div className="order">
						<h2 id="order-title">
							{lang === "en" ? "Your Order" : "Ihre Bestellung"}
						</h2>
						{!cost ? (
							<h5 id="select-meal">
								{lang === "en"
									? "Please select your meal."
									: "Bitte wählen Sie Ihre Gerichte aus."}
							</h5>
						) : (
							menuName.map((menu) => (
								<div className="order-list">
									<span>{menu}</span> <span> €10 x 1</span>
									<button onClick={() => deleteMenu(menu)} id="delete">
										x
									</button>
								</div>
							))
						)}
						<h2 id="total">
							{lang === "en" ? "Total:" : "Gesamt"} €{cost}
						</h2>
						<div id="paypal-con">
							<span>
								{lang === "en" ? "Pay Now with" : "Jetzt bezahlen mit"}
							</span>
							<img
								onClick={pay}
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJ3lP1KLAPmfY7zfXyZlGXKwNV7bv_csb8A&usqp=CAU"
								alt="paypal"
								id="paypal"
							/>
						</div>
					</div>
					<div>
						<div className="main-menus">
							{lang === "en"
								? detailMenus.map((menu) => <MainMenuCard menu={menu} />)
								: detailMenusDE.map((menu) => <MainMenuCard menu={menu} />)}
							{lang === "en" ? (
								<MainMenuCard menu={random} />
							) : (
								<MainMenuCard menu={randomDE} />
							)}
						</div>
						{/* <RandomBox /> */}
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
							{lang === "en" ? "Custom Bento" : "Kundenspezifisches Bento"}
						</Modal.Title>
					</Modal.Header>
					<RandomBox />
				</Modal>
			</orderContext.Provider>
		</div>
	);
}

export default MainMenu;
