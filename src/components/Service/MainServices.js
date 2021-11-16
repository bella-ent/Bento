import { mainServicesData, mainServicesDataDE } from "../../data/mainServices";
import MainServiceCard from "./MainServiceCard";
import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import languageContext from "../../contexts/languageContext";

function MainServices() {
	const { lang, setLang } = useContext(languageContext);
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div className="mainService">
			<div id="bg-m-service">
				<h1>{lang === "en" ? "Our Services" : "Unsere Services"}</h1>
				{lang === "en"
					? mainServicesData.map((card) => <MainServiceCard props={card} />)
					: mainServicesDataDE.map((card) => <MainServiceCard props={card} />)}
			</div>
		</div>
	);
}

export default MainServices;
