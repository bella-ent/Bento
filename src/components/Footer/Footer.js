import React from "react";
import facebook from "../../img/icons/facebook.png";
import instagram from "../../img/icons/instagram.png";

function Footer() {
	return (
		<div className="footer">
			<p>@Hackathon Group H. All rights reserved.</p>
			<div className="icons-con">
				<a href="http://facebook.com" target="_blank">
					<img src={facebook} alt="icons" className="icons-footer" />
				</a>
				<a href="http://instagram.com" target="_blank">
					<img src={instagram} alt="icons" className="icons-footer" />
				</a>
			</div>
		</div>
	);
}

export default Footer;
