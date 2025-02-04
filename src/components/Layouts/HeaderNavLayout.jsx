// import Navigasi from "../UI/Navigasi";
import PropTypes from "prop-types";

const HeaderNavLayout = ({headerTitle, children}) => {
	return (
		<div className="flex items-center justify-between px-6 py-4 flex-col md:flex-row flex-wrap gap-3">
			<div>
				<h1 className="text-xl font-medium text-gray-900">{headerTitle}</h1>
			</div>

			<ul className="flex items-center space-x-5 flex-wrap justify-center">
				<li className="">
				{children}
				</li>
				
			</ul>
		</div>
	);
};

HeaderNavLayout.propTypes = {
    headerTitle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default HeaderNavLayout;
