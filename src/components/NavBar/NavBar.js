import React, { useState, useEffect, useRef } from "react";
import logo from "../../img/Bento.png";
import { Link } from "react-router-dom";
import hamburger from "../../img/icons/hamburger.png";

function NavBar() {
	const [show, setShow] = useState(false);
	function showDropNav() {
		setShow(!show);
	}

	return (
		<>
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
				<img onClick={showDropNav} src={hamburger} alt="menu" id="hamburger" />
			</div>
			<div>
				<ul
					style={!show ? { display: "none" } : { display: "block" }}
					className="drop-con"
				>
					<Link to="/about">
						<li onClick={showDropNav}>About Us</li>
					</Link>
					<Link to="/services">
						<li onClick={showDropNav}>Services</li>
					</Link>
					<Link to="/menu">
						<li onClick={showDropNav}>Menu</li>
					</Link>
					<Link to="/location">
						<li onClick={showDropNav}>Daily Location</li>
					</Link>
					<Link to="/contact">
						<li onClick={showDropNav}>Contact Us</li>
					</Link>
				</ul>
			</div>
		</>
	);
}

export default NavBar;
