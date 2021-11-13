import React from "react";
import { locations } from "../../data/locationData";
import { useState } from "react";

function Location() {
	const [UKE, Hammerbrook, Altonaer] = locations;
	const [location, setLocation] = useState(Hammerbrook.url);
	function changeLocation(setting) {
		setLocation(setting.url);
	}
	return (
		<div className="location">
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
						changeLocation(UKE);
					}}
				>
					Thu
				</button>
				<button
					onClick={() => {
						changeLocation(Hammerbrook);
					}}
				>
					Fri
				</button>
			</div>
			<iframe
				src={location}
				width="600"
				height="450"
				style={{ border: 0 }}
				allowfullscreen=""
				loading="lazy"
				title="UKE"
			></iframe>
		</div>
	);
}

export default Location;
