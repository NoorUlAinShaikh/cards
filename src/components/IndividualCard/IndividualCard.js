import React from "react";
import { customLabels } from "../../constants/customLabels";
import "./IndividualCard.css";

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
		<a
			className="card-link"
			href={image_url}
			target="_blank"
			rel="noreferrer nofollow noopener"
		>
			<div className={`card ${image_url ? "" : "justify-center-important"}`}>
				{image_url && (
					<div className="card-image">
						<img src={`${image_url}`} alt="The Perfect Room" />
					</div>
				)}
				<div className="card-content">
					<div className="card-title">{title}</div>
					<div className="card-chronicle">{chronicle}</div>
					<div className="card-location">{location}</div>
				</div>
			</div>
		</a>
	);
};

export default IndividualCard;
