import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/App.css";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Menus from "./components/Menus";
import Nav from "./components/Nav";
import Services from "./components/Services";

function App() {
	return (
		<div className="App">
			<Nav />
			<Jumbotron />
			<Menus />
			<Services />
			<Footer />
		</div>
	);
}

export default App;
