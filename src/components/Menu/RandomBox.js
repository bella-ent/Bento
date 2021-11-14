import React, { useState, useRef, useContext } from "react";
import shrimp from "../../img/shrimp.png";
import salad from "../../img/salad.png";
import steak from "../../img/steak.png";
import rice from "../../img/rice-bowl.png";
import chicken from "../../img/chicken-leg.png";
import tofu from "../../img/tofu.png";
import noodle from "../../img/noodles.png";
import { Button } from "react-bootstrap";
import orderContext from "../../contexts/orderContext";

function RandomBox() {
	const { cost, setCost, menuName, setMenuName } = useContext(orderContext);
	const selections = [
		{ selection: "shrimp", icon: shrimp },
		{ selection: "chicken", icon: chicken },
		{ selection: "beef", icon: steak },
		{ selection: "tofu", icon: tofu },
		{ selection: "salad", icon: salad },
		{ selection: "rice", icon: rice },
		{ selection: "noodle", icon: noodle },
	];
	const [ingredients, setIngredients] = useState([]);

	const checkbox1 = useRef();
	const checkbox2 = useRef();
	const checkbox3 = useRef();
	const checkbox4 = useRef();
	const checkbox5 = useRef();
	const checkbox6 = useRef();
	const checkbox7 = useRef();

	function addIngredients(check) {
		setIngredients(
			check.current.checked === true
				? [
						...ingredients,
						...selections.filter((sel) => sel.selection === check.current.name),
				  ]
				: ingredients.filter((item) => item.selection !== check.current.name)
		);
	}
	function addCost() {
		if (ingredients.length === 4) {
			setCost(cost + 10);
			setMenuName([...menuName, "Custom Bento"]);
			alert("Your custom Bento is added to your cart");
		} else {
			alert("There should be 4 ingredients in your bento.");
		}
	}
	return (
		<div className="random">
			{/* <h1>Customizable Lunch Box</h1> */}
			<div className="outer">
				<div className="bento-con">
					<div className="row-bento">
						<div>
							<img
								src={ingredients[0] ? ingredients[0].icon : ""}
								alt={ingredients[0] ? ingredients[0].selection : ""}
							/>
						</div>
						<div>
							<img
								src={ingredients[1] ? ingredients[1].icon : ""}
								alt={ingredients[1] ? ingredients[1].selection : ""}
							/>
						</div>
					</div>
					<div className="row-bento">
						<div>
							<img
								src={ingredients[2] ? ingredients[2].icon : ""}
								alt={ingredients[2] ? ingredients[2].selection : ""}
							/>
						</div>{" "}
						<div>
							<img
								src={ingredients[3] ? ingredients[3].icon : ""}
								alt={ingredients[3] ? ingredients[3].selection : ""}
							/>
						</div>
					</div>
				</div>
				<div className="check-con">
					<h1>Ingredients</h1>
					<div>
						<div>
							<input
								onClick={() => addIngredients(checkbox1)}
								ref={checkbox1}
								type="checkbox"
								name="shrimp"
							/>
							<label for="shrimp">shrimp</label>
						</div>
						<div>
							<input
								onClick={() => addIngredients(checkbox3)}
								ref={checkbox3}
								type="checkbox"
								name="beef"
							/>
							<label for="beef">beef</label>
						</div>
						<div>
							<input
								onClick={() => addIngredients(checkbox5)}
								ref={checkbox5}
								type="checkbox"
								name="chicken"
							/>
							<label for="chicken">chicken</label>
						</div>
						<div>
							<input
								onClick={() => addIngredients(checkbox2)}
								ref={checkbox2}
								type="checkbox"
								name="salad"
							/>
							<label for="salad">salad</label>
						</div>
						<div>
							<input
								onClick={() => addIngredients(checkbox6)}
								ref={checkbox6}
								type="checkbox"
								name="tofu"
							/>
							<label for="tofu">tofu</label>
						</div>
						<div>
							<input
								onClick={() => addIngredients(checkbox4)}
								ref={checkbox4}
								type="checkbox"
								name="rice"
							/>
							<label for="rice">rice</label>
						</div>
						<div>
							<input
								onClick={() => addIngredients(checkbox7)}
								ref={checkbox7}
								type="checkbox"
								name="noodle"
							/>
							<label for="noodle">noodle</label>
						</div>
					</div>
					<Button onClick={addCost} variant="success" id="menu-btn">
						Order Now
					</Button>
				</div>
			</div>
		</div>
	);
}

export default RandomBox;
