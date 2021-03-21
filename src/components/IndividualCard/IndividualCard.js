import React from "react";
import { customLabels } from "../../constants/customLabels";

const IndividualCard = props => {
	const { TITLE_DEFAULT, CHRONICLE_DEFAULT, LOCATION_DEFAULT } = customLabels;

	const {
		card: {
			image_url = "",
			title = TITLE_DEFAULT,
			chronicle = CHRONICLE_DEFAULT,
			location = LOCATION_DEFAULT
		} = {}
	} = props;

	return (
		<div className="card">
			{image_url && <img src={`${image_url}`} alt="The Perfect Room" />}
			<div>{title}</div>
			<div>{chronicle}</div>
			<div>{location}</div>
		</div>
	);
};

export default IndividualCard;
