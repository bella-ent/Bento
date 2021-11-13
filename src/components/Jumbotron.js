import React from "react";
import { Carousel } from "react-bootstrap";

function Jumbotron() {
	return (
		<div>
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://asianfoodnetwork.com/content/dam/afn/global/en/articles/bento-box/AFN_Apam_Balik_article_1920x1280_6.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://static3.bigstockphoto.com/2/4/3/large1500/342532552.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="http://sakuracolorado.com/wp-content/uploads/2013/11/Sakurahabachisushi-0013-sakurasushi-e1458918956127.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Jumbotron;
