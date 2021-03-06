import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Main from "./components/Main/Main";
import Concept from "./components/Concept/Concept";
import MainServices from "./components/Service/MainServices";
import MainMenu from "./components/Menu/MainMenu";
import Location from "./components/Location/Location";
import Order from "./components/Order/Order";
import Login from "./Login";
import NavBar from "./components/NavBar/NavBar";
import ContactUs from "./components/ContactUs/ContactUs";
import { useState } from "react";
import languageContext from "./contexts/languageContext";

function App() {
	const [lang, setLang] = useState("en");
	return (
		<div className="App">
			<languageContext.Provider value={{ lang, setLang }}>
				<Router>
					<NavBar />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/about" element={<AboutUs />} />
						<Route path="/concept" element={<Concept />} />
						<Route path="/services" element={<MainServices />} />
						<Route path="/menu" element={<MainMenu />} />
						<Route path="/location" element={<Location />} />
						<Route path="/order" element={<Order />} />
						<Route path="/login" element={<Login />} />
						<Route path="/contact" element={<ContactUs />} />
					</Routes>
					<Footer />
				</Router>
			</languageContext.Provider>
		</div>
	);
}

export default App;
