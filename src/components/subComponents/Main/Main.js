import React from "react";
import Jumbotron from "./Jumbotron";
import Menus from "./Menu/Menus";
import Services from "./Service/Services";

function Main() {
	return (
		<div>
			<Jumbotron />
			<Menus />
			<Services />
		</div>
	);
}

export default Main;
