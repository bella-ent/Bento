import vegan from "../img/forMenu/vegan.png";
import beef from "../img/forMenu/beef.png";
import chicken from "../img/forMenu/chicken.png";
import fish from "../img/forMenu/fish.png";

export const menus = [
	{
		title: "Vegan",
		detail: [
			"Enjoy your lunch break with healthy, tasty, and 100% plant-based meals",
		],
		img: vegan,
	},
	{
		title: "Fish",
		detail: [
			"Weather you like Salmon or Tuna, row or cooked, we have it for you",
		],
		img: fish,
	},
	{
		title: "Beef",
		detail: ["The authentic taste of the popular quick meal in Japan"],
		img: beef,
	},
	{
		title: "Chicken",
		detail: ["A delicious combination of chicken, fresh vegetables and grains"],
		img: chicken,
	},
	// {
	// 	title: "Random Bento",
	// 	detail: ["The authentic taste of the popular quick meal in Japan "],
	// 	img: "https://cdn.shopify.com/s/files/1/0115/5776/5179/products/loot-box-ol-512.png?v=1576127282",
	// },
];

export const menusDE = [
	{
		title: "Vegan",
		detail: ["Genieße gesunden, leckeren und 100 % pflanzlichen Mahlzeiten "],
		img: vegan,
	},
	{
		title: "Fisch",
		detail: ["Ob Sie Lachs oder Thunfisch mögen, wir haben es für Sie"],
		img: fish,
	},
	{
		title: "Rindfleisch",
		detail: [
			"Der authentische Geschmack des beliebten schnellen Essens in Japan",
		],
		img: beef,
	},
	{
		title: "Hähnchen",
		detail: [
			"Eine köstliche Kombination aus Hühnchen, frischem Gemüse und Getreide",
		],
		img: chicken,
	},
	// {
	// 	title: "Random Bento",
	// 	detail: ["The authentic taste of the popular quick meal in Japan "],
	// 	img: "https://cdn.shopify.com/s/files/1/0115/5776/5179/products/loot-box-ol-512.png?v=1576127282",
	// },
];

export const detailMenus = [
	{
		title: "Vegan Bento",
		detail: [
			"Enjoy your lunch break with healthy, tasty, and 100% plant-based meals",
		],
		img: vegan,
		price: 10,
		btn: "Order",
	},
	{
		title: "Fish Bento",
		detail: [
			"Weather you like Salmon or Tuna, row or cooked, we have it for you",
		],
		img: fish,
		price: 10,
		btn: "Order",
	},
	{
		title: "Beef Bento",
		detail: ["The authentic taste of the popular quick meal in Japan "],
		img: beef,
		price: 10,
		btn: "Order",
	},
	{
		title: "Chicken Bento",
		detail: [
			"A delicious combination of chicken, fresh vegetables and grains ",
		],
		img: chicken,
		price: 10,
		btn: "Order",
	},
];

export const random = {
	title: "Custom Bento",
	detail: ["You can choose all you want! fun to select your meal"],
	img: "https://cdn.shopify.com/s/files/1/0115/5776/5179/products/loot-box-ol-512.png?v=1576127282",
	price: 10,
	btn: "Select Ingredients",
};
