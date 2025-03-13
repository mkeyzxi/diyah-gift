import PropTypes from 'prop-types';

const Navigasi = ({name, addClass}) => {
	return (
		<div
			className={`text-[var(--pinkSecondary)] font-reguler text-sm cursor-pointer ${addClass} px-1 py-0 `}
		>
			{name}
		</div>
	);
};

Navigasi.propTypes = {
	name: PropTypes.string.isRequired,
	addClass: PropTypes.string,
};

export default Navigasi;
