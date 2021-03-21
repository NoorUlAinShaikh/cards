import { customLabels } from "../../constants/customLabels";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<h2 className="logo"> {customLabels.PRODUCT_NAME} </h2>
		</div>
	);
};

export default Header;
