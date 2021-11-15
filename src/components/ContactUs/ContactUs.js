import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../../assets/ContactUs.css";

function ContactUs() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div>
			<div class="contact-container">
				<div class="contact-box">
					<h2>Contact Us</h2>
					<div class="flex">
						<div class="contact-info">
							<p>
								Do you have any questions or other concerns? Then simply contact
								us at <a href="tel:0176-70834316">0176-70834316</a>, <br />
								or write to us at{" "}
								<a href="mailto: info@bentofoodtruck.de ">
									info@bentofoodtruck.de
								</a>{" "}
								or use the contact form below.
							</p>
							<p>
								For more information, visit us on our social media channels:
							</p>
						</div>

						<div class="contact-form-parent">
							<form>
								<fieldset className="contact-form">
									{/* <legend>Contact Us</legend> */}
									<div class="name control-margin">
										<label for="first_name">
											Your Name:<span>*</span>
										</label>
										<input
											type="text"
											q
											name="firstName"
											id="first_name"
											required
										/>
									</div>
									<div class="email control-margin">
										<label for="Email">
											Email:<span>*</span>
										</label>
										<input
											type="email"
											name="email"
											id="Email"
											placeholder="smithbob@gmail.com"
											required
										/>
									</div>
									<div class="number control-margin">
										<label for="phone">Phone Number:(optional)</label>
										<input type="number" name="phn" id="phone" />
									</div>
									<div class="message control-margin">
										<label for="message">Your Message:</label>
										<textarea
											name="msg"
											id="message"
											min="5"
											max="150"
											rows="3"
											cols="62"
										></textarea>
									</div>
									<div class="contact">
										<label for="contact">
											How do you like to be contacted?
										</label>
									    <br></br>
										<label for="contactP">phone</label>
										<input type="radio" name="Contact" id="contactP" />

										<label for="contactE">email</label>
										<input type="radio" name="Contact" id="contactE" />
									</div>
									<div class="button">
										<input type="submit" class="submitButton" />
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
