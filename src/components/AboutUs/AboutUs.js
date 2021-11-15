import React from "react";
import "../../assets/AboutMe.css";
import lunchBox from "../../img/lunchBox.jpg";

function AboutUs() {
	return (
		<div className="page-container">
			<div className="about-us">
				<p className="header">
					<span>"Bento Food Truck" </span>
					is the first Japanese style packed lunch carrying food truck in
					Hamburg."
				</p>
				<div className="container">
					<div className="about-us-content">
						<ul>
							Bento consists of items such as rice, vegetables, and sashimi.
							Chicken, Beef, Fish, or egg are optional.
						</ul>
						<ul>
							We provide fresh and healthy Bento lunch boxes to different
							locations near your workplaces in Hamburg. We also have delivery
							services which can drop your lunch boxes within minutes.
						</ul>
						<ul>
							As our lunch boxes are being loved by many of our clients we have
							now started to take up orders for all kinds of events.
						</ul>
					</div>
					<div>
						<img src={lunchBox} alt="lunch box pic" id="lunchbox" />
					</div>
				</div>
			</div>
			<div className="icons">
				<i className="fab fa-instagram"></i>
				<i className="fab fa-facebook"></i>
				<i className="fas fa-phone-volume"></i>
			</div>
		</div>
	);
}

export default AboutUs;
