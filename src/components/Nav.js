import React from "react";
import logo from "../img/bento.png";
import logo2 from "../img/bento-2.png";
import logo3 from "../img/bento-3.png";

function Nav() {
	return (
		<div className="nav">
			<h1>
				<img src={logo3} id="logo" alt="logo" />
			</h1>
			<ul className="link-con">
				<li>About Us</li>
				<li>Our Concept</li>
				<li>Services</li>
				<li>Menu</li>
			</ul>
		</div>
	);
}

export default Nav;
