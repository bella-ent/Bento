import React from "react";
import logo from "../../img/Bento.png";

function Nav() {
	return (
		<div className="nav">
			<h1>
				<img src={logo} id="logo" alt="logo" />
			</h1>
			<ul className="link-con">
				<li>About Us</li>
				<li>Our Concept</li>
				<li>Services</li>
				<li>Menu</li>
				<li>Daily Location</li>
				<li>Order</li>
				<li>Log In/Sign In</li>
			</ul>
		</div>
	);
}

export default Nav;
