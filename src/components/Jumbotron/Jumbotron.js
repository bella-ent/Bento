import React from "react";
import { Carousel } from "react-bootstrap";

function Jumbotron() {
	return (
		<div>
			<Carousel className="jumbotron" fade>
				<Carousel.Item>
					<img
						className="d-block w-100 jumbotron-img"
						src="https://asianfoodnetwork.com/content/dam/afn/global/en/articles/bento-box/AFN_Apam_Balik_article_1920x1280_6.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Bento</h3>
						<p>This is detail</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 jumbotron-img"
						src="https://static3.bigstockphoto.com/2/4/3/large1500/342532552.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Bento</h3>
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
						<h3>Bento</h3>
						<p>This is detail</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Jumbotron;
