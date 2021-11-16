import React, { useState, useEffect, useRef, useContext } from "react";
import logo from "../../img/Bento.png";
import { Link } from "react-router-dom";
import hamburger from "../../img/icons/hamburger.png";
import languageContext from "../../contexts/languageContext";
import { navEn, navDe } from "../../data/navData";

function NavBar() {
	const { lang, setLang } = useContext(languageContext);
	function setLanguage(e) {
		setLang(e.target.value);
		console.log(lang);
	}
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
					{lang === "en"
						? navEn.map(({ title, link }) => (
								<Link to={link}>
									<li>{title}</li>
								</Link>
						  ))
						: navDe.map(({ title, link }) => (
								<Link to={link}>
									<li>{title}</li>
								</Link>
						  ))}
					{/* <select name="" id="languages">
						<option value="" onClick={setLanguage} selected disabled>
							Language
						</option>
						<option value="en" onClick={setLanguage}>
							English
						</option>
						<option value="de" onClick={setLanguage}>
							Deutsch
						</option>
					</select> */}
					{lang === "de" ? (
						<button onClick={setLanguage} className="languages-btn" value="en">
							English
						</button>
					) : (
						<button onClick={setLanguage} className="languages-btn" value="de">
							Deutsch
						</button>
					)}
				</ul>
				<img onClick={showDropNav} src={hamburger} alt="menu" id="hamburger" />
			</div>
			<div>
				<ul
					style={!show ? { display: "none" } : { display: "block" }}
					className="drop-con"
				>
					{lang === "en"
						? navEn.map(({ title, link }) => (
								<Link to={link}>
									<li>{title}</li>
								</Link>
						  ))
						: navDe.map(({ title, link }) => (
								<Link to={link}>
									<li>{title}</li>
								</Link>
						  ))}
				</ul>
			</div>
		</>
	);
}

export default NavBar;
