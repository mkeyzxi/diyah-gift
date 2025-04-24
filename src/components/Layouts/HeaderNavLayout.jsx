// // import Navigasi from "../UI/Navigasi";
// import PropTypes from 'prop-types';

// const HeaderNavLayout = ({headerTitle, children}) => {
// 	return (
// 		<div className="flex items-center justify-between flex-col md:flex-row flex-wrap gap-3 ">
// 			<div>
// 				<h1 className="text-2xl font-medium text-gray-900 ">{headerTitle}</h1>
// 			</div>

// 			<ul className="flex items-center space-x-5 flex-wrap justify-center">
// 				<li className="flex justify-center items-center gap-5">{children}</li>
// 			</ul>
// 		</div>
// 	);
// };

// HeaderNavLayout.propTypes = {
// 	headerTitle: PropTypes.string.isRequired,
// 	children: PropTypes.node.isRequired,
// };

// export default HeaderNavLayout;


// dengan aria
import PropTypes from 'prop-types';

const HeaderNavLayout = ({ headerTitle, children }) => {
	return (
		<div 
			className="flex items-center justify-between flex-col md:flex-row flex-wrap gap-3"
			aria-labelledby="headerTitle"
			aria-describedby="headerDescription"
		>
			{/* Header Title */}
			<div>
				<h1 id="headerTitle" className="text-2xl font-medium text-gray-900" aria-label="Header Title">
					{headerTitle}
				</h1>
			</div>

			{/* Navigation Links */}
			<ul 
				className="flex items-center space-x-5 flex-wrap justify-center"
				aria-label="Navigation links"
				aria-describedby="navigationLinks"
			>
				<li className="flex justify-center items-center gap-5" id="navigationLinks">
					{children}
				</li>
			</ul>
		</div>
	);
};

HeaderNavLayout.propTypes = {
	headerTitle: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default HeaderNavLayout;
