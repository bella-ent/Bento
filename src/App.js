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

function App() {
	return (
		<div className="App">
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
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
