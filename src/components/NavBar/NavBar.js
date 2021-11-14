import React from "react";
import logo from "../../img/Bento.png";
import { Link } from "react-router-dom";
import {
	Navbar,
	NavDropdown,
	Container,
	Nav,
	FormControl,
	Form,
	Button,
} from "react-bootstrap";

function NavBar() {
	return (
		<div className="nav">
			<Link to="/">
				<img src={logo} id="logo" alt="logo" />
			</Link>
			<ul className="link-con">
				<Link to="/about">
					<li>About Us</li>
				</Link>
				<Link to="/services">
					<li>Services</li>
				</Link>
				<Link to="/menu">
					<li>Menu</li>
				</Link>
				<Link to="/location">
					<li>Daily Location</li>
				</Link>
				<Link to="/contact">
					<li>Contact Us</li>
				</Link>
			</ul>
		</div>
	);
}

export default NavBar;
