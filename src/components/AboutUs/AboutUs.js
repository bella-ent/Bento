import React, { useContext } from "react";
import "../../assets/AboutMe.css";
import lunchBox from "../../img/lunchBox.jpg";
import languageContext from "../../contexts/languageContext";

function AboutUs() {
	const { lang } = useContext(languageContext);
	return (
		<div className="page-container">
			<div className="about-us">
				<p className="header">
					<span>"Bento Food Truck" </span>
					{lang === "en"
						? " is the first Japanese style packed lunch carrying food truck in Hamburg."
						: " ist der erste Food Truck mit japanischem Lunchpaket in Hamburg."}
				</p>
				<div className="container">
					<div className="about-us-content">
						{/* <ul>
							Bento consists of items such as rice, vegetables, and sashimi.
							Chicken, Beef, Fish, or egg are optional.
						</ul> */}
						<ul>
							{lang === "en"
								? "We provide fresh and healthy Bento lunch boxes to different locations near your workplaces in Hamburg. We also have delivery services which can drop your lunch boxes within minutes."
								: "Wir versorgen verschiedene Standorte in der Nähe Ihrer Arbeitsplätze in Hamburg mit frischen und gesunden Bento Lunchboxen. Wir haben auch Lieferdienste, die Ihre Lunchpakete innerhalb von Minuten liefern können. "}
						</ul>
						<ul>
							{lang === "en"
								? "As our lunch boxes are being loved by many of our clients we have now started to take up orders for all kinds of events."
								: "Da unsere Lunchboxen von vielen unserer Kunden geliebt werden, nehmen wir jetzt Bestellungen für alle Arten von Veranstaltungen entgegen."}
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
