import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Jumbotron from "../Jumbotron/Jumbotron";
import Menus from "../Menu/Menus";
import Services from "../Service/Services";

function Main() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="main-con">
			{/* <h1>Take a break, Take your Bento Box</h1> */}
			<Jumbotron />
			<Menus />
			<Services />
		</div>
	);
}

export default Main;
