import React from "react";
import { Carousel } from "react-bootstrap";

function Jumbotron() {
	return (
		<div>
			<Carousel className="jumbotron" fade>
				<Carousel.Item>
					<img
						className="d-block w-100 jumbotron-img"
						src="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/811631557001/d343662e-5434-49fe-8837-8ac6ab7af365/cac53c31-f005-4d0b-a0c1-fc7f18645d2c/1280x720/match/image.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Chicken Bento</h3>
						<p>
							Fried Chicken with grilled vegetables. You can choose rice or
							noodle as well.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 jumbotron-img"
						src="https://static.dw.com/image/17226619_101.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>SuShi Bento</h3>
						<p>This is detail</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 jumbotron-img"
						src="http://sakuracolorado.com/wp-content/uploads/2013/11/Sakurahabachisushi-0013-sakurasushi-e1458918956127.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Beef Bento</h3>
						<p>This is detail</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Jumbotron;
