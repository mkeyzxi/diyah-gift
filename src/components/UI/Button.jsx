import PropTypes from 'prop-types';

const Button = ({label,onClick, svg}) => {
	return (
		<button className="flex items-center justify-center gap-1 w-full bg-[var(--pinkSecondary)] !p-1.5 text-white transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:scale-105 active:scale-95 " onClick={onClick}>
			{label}
			{svg}
		</button>
	);
};
Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	svg: PropTypes.node, // Dibuat opsional
};

export default Button;
