import React from "react";
import { locations } from "../../data/locationData";
import { useState } from "react";

function Location() {
	// const Today = new Date().getDay();
	const Today = 1;
	const [Arctic, UKE, Hammerbrook, Altonaer, StGeorg, Eilbek, Arctic2] =
		locations;
	const [location, setLocation] = useState(locations[Today].url);
	function changeLocation(setting) {
		setLocation(setting.url);
	}
	return (
		<div className="location">
			<div className="location-title">
				<div>
					<h1>We're here now!</h1>
					<h4>Find our daily location</h4>
				</div>
				<img
					src="https://media3.giphy.com/media/feiLHLNf3X2zTHNJwS/giphy.gif"
					alt="img"
					id="moving-truck"
				/>
			</div>
			<div className="days-locations">
				<button
					style={
						locations[Today].name === "UKE"
							? { backgroundColor: "#FF7272" }
							: {}
					}
					onClick={() => {
						changeLocation(UKE);
					}}
				>
					Mon
				</button>
				<button
					style={
						locations[Today].name === "Hammerbrook"
							? { backgroundColor: "#FF7272" }
							: {}
					}
					onClick={() => {
						changeLocation(Hammerbrook);
					}}
				>
					Tue
				</button>
				<button
					style={
						locations[Today].name === "Altonaer Fischmarkt"
							? { backgroundColor: "#FF7272" }
							: {}
					}
					onClick={() => {
						changeLocation(Altonaer);
					}}
				>
					Wed
				</button>
				<button
					style={
						locations[Today].name === "St. Georg"
							? { backgroundColor: "#FF7272" }
							: {}
					}
					onClick={() => {
						changeLocation(StGeorg);
					}}
				>
					Thu
				</button>
				<button
					style={
						locations[Today].name === "Eilbek"
							? { backgroundColor: "#FF7272" }
							: {}
					}
					onClick={() => {
						changeLocation(Eilbek);
					}}
				>
					Fri
				</button>
			</div>
			<iframe
				id="map"
				src={location}
				style={{ border: 0 }}
				allowfullscreen=""
				loading="lazy"
				title="UKE"
			></iframe>
		</div>
	);
}

export default Location;
