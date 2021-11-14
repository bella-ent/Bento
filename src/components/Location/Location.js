import React from "react";
import { locations } from "../../data/locationData";
import { useState } from "react";

function Location() {
	const [UKE, Hammerbrook, Altonaer, StGeorg, Eilbek] = locations;
	const [location, setLocation] = useState(Hammerbrook.url);
	function changeLocation(setting) {
		setLocation(setting.url);
	}
	return (
		<div className="location">
			<div className="location-title">
				<div>
					<h1>We're here now!</h1>
					<p>Find our daily location</p>
				</div>
				<img
					src="https://media3.giphy.com/media/feiLHLNf3X2zTHNJwS/giphy.gif"
					alt="img"
					id="moving-truck"
				/>
			</div>
			<div className="days-locations">
				<button
					onClick={() => {
						changeLocation(UKE);
					}}
				>
					Mon
				</button>
				<button
					onClick={() => {
						changeLocation(Hammerbrook);
					}}
				>
					Tue
				</button>
				<button
					onClick={() => {
						changeLocation(Altonaer);
					}}
				>
					Wed
				</button>
				<button
					onClick={() => {
						changeLocation(StGeorg);
					}}
				>
					Thu
				</button>
				<button
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
