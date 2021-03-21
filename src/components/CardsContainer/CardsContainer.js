import { useEffect } from "react";
import IndividualCard from "../IndividualCard/IndividualCard";
import useFetchCards from "../../hooks/useFetchCards";
import { customLabels } from "../../constants/customLabels";
import "./CardsContainer.css";

const CardsContainer = () => {
	const [cards, fetchCards, loading] = useFetchCards();

	useEffect(() => {
		//fetch Cards on mount
		if (typeof fetchCards === "function") fetchCards();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderCards = () => {
		return cards && cards.length > 0
			? cards.map(card => <IndividualCard key={card.id} card={card} />)
			: customLabels.NO_CARDS_DEFAULT_MSG;
	};

	return (
		<div className="cards-container">
			{loading ? <div className="loading">Loading...</div> : renderCards()}
		</div>
	);
};

export default CardsContainer;
