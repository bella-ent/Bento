import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import Menus from "../Menu/Menus";
import Services from "../Service/Services";

function Main() {
	return (
		<div className="main-con">
			<h1>Take a break, Take your Bento Box</h1>
			<Jumbotron />
			<Menus />
			<Services />
		</div>
	);
}

export default Main;
