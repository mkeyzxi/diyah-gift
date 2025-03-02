import PropTypes from 'prop-types';

const InputField = ({ label, placeholder, type = 'text' }) => {
	return (
		<div className="mb-4">
			<label className="block text-sm font-bold mb-1">{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				className="w-full border-2 border-[var(--pinkSecondary)] rounded-md shadow-input p-2 focus:outline-none focus:ring-2 "
				// focus:ring-pink-500
			/>
		</div>
	);
};

InputField.propTypes = {
	label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
export default InputField;