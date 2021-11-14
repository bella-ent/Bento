import React from "react";
import { Carousel } from "react-bootstrap";
import weAre from "../../img/forCarousel/WeAreMake.png";
import chickenBowl from "../../img/forCarousel/chickenBowl.jpg";
import pokeBowl from "../../img/forCarousel/PokeBowl.jpg";

function Jumbotron() {
	return (
		<div>
			<Carousel className="jumbotron" fade>
				<Carousel.Item>
					<Carousel.Caption>
						<div className="slogan">
							<p>Take a break, </p>
							<p>Take your bento</p>
						</div>
					</Carousel.Caption>
					<img
						className="d-block w-100 jumbotron-img"
						src={weAre}
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 jumbotron-img"
						src={pokeBowl}
						alt="Second slide"
					/>

					<Carousel.Caption>
						<div className="slogan">
							<p>Take a break, </p>
							<p>Take your bento</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 jumbotron-img"
						src={chickenBowl}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<div className="slogan">
							<p>Take a break, </p>
							<p>Take your bento</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Jumbotron;
