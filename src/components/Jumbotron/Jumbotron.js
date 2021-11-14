import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../img/forBanner/banner1.png";
import banner2 from "../../img/forBanner/banner2.png";
import banner3 from "../../img/forBanner/banner3.png";

function Jumbotron() {
	return (
		// <div>
		<Carousel className="jumbotron" fade>
			<Carousel.Item>
				<Carousel.Caption>
					<div className="slogan">
						{/* <p>Take a break, </p>
							<p>Take your bento</p> */}
					</div>
				</Carousel.Caption>
				<img
					className="d-block w-100 jumbotron-img"
					src={banner1}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 jumbotron-img"
					src={banner2}
					alt="Second slide"
				/>

				<Carousel.Caption>
					<div className="slogan">
						{/* <p>Take a break, </p>
							<p>Take your bento</p> */}
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 jumbotron-img"
					src={banner3}
					alt="Third slide"
				/>

				<Carousel.Caption>
					<div className="slogan">
						{/* <p>Take a break, </p>
							<p>Take your bento</p> */}
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		// </div>
	);
}

export default Jumbotron;
