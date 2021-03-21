import { useState } from "react";

let count = 0;
const cardsArray = [
	{
		id: Date.now() + ++count,
		image_url: "https://source.unsplash.com/1920x1080/?rooms",
		title: "Hireable Rooms",
		chronicle: "Anything Room at Green Square",
		location: "Zetland"
	},
	{
		id: Date.now() + ++count,
		image_url: "",
		title: "Hireable Rooms",
		chronicle: "Anything Room at Green Square",
		location: "Zetland"
	},
	{
		id: Date.now() + ++count,
		image_url: "",
		title: "Hireable Rooms",
		chronicle: "Anything Room at Green Square",
		location: "Zetland"
	},
	{
		id: Date.now() + ++count,
		image_url: "https://source.unsplash.com/1920x1080/?rooms",
		title: "Hireable Rooms",
		chronicle: "Anything Room at Green Square",
		location: "Zetland"
	},
	{
		id: Date.now() + ++count,
		image_url: "https://source.unsplash.com/1920x1080/?rooms",
		title: "Hireable Rooms",
		chronicle: "Anything Room at Green Square",
		location: "Zetland"
	},
	{
		id: Date.now() + ++count,
		image_url: "",
		title: "Hireable Rooms",
		chronicle: "Anything Room at Green Square",
		location: "Zetland"
	}
];

const useFetchCards = () => {
	const [cards, setCards] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchCards = () => {
		setLoading(true);
		setTimeout(() => {
			setCards(cardsArray);
			setLoading(false);
		}, 3000);
	};

	return [cards, fetchCards, loading];
};

export default useFetchCards;
