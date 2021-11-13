import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/subComponents/Main/Main";
import AboutUs from "./components/AboutUs";

function App() {
	return (
		<div className="App">
			<Nav />
			<Router>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/about" element={<AboutUs />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
