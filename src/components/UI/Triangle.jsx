import PropTypes from 'prop-types';
const Triangle = ({addClass}) => {
	return (
		<div
			className={`w-0 h-0 border-l-[27px] border-l-transparent border-r-[27px] border-r-transparent border-b-[40px] border-b-[var(--blackCustom)] rotate-180  ${addClass}`}
		></div>
	);
};

Triangle.propTypes = {
	addClass: PropTypes.string, // addClass harus berupa string
};

export default Triangle;
