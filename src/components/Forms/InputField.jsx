// import { forwardRef } from 'react';
// import PropTypes from 'prop-types';

// const InputField = forwardRef(({ label, placeholder, type = 'text' }, ref) => {
// 	return (
// 		<div className="mb-3">
// 			<label className="block text-gray-700">{label}</label>
// 			<input
// 				ref={ref}
// 				type={type}
// 				placeholder={placeholder}
// 				className="w-full border-2 border-[var(--pinkSecondary)] rounded-md shadow-input p-2 focus:outline-none focus:ring-2 "
// 			/>
// 		</div>
// 	);
// });

// InputField.displayName = 'InputField';

// InputField.propTypes = {
// 	label: PropTypes.string.isRequired,
// 	placeholder: PropTypes.string.isRequired,
// 	type: PropTypes.string,
// };

// export default InputField;


// dengan aria
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const InputField = forwardRef(({ label, placeholder, type = 'text' }, ref) => {
	return (
		<div className="mb-3">
			<label 
				htmlFor={label} 
				className="block text-gray-700"
				id={`${label}-label`}
			>
				{label}
			</label>
			<input
				ref={ref}
				type={type}
				id={label}  // Add an id for linking label to input field
				placeholder={placeholder}
				aria-labelledby={`${label}-label`}  // Associates the label with the input
				aria-placeholder={placeholder}  // Provides additional context for the placeholder
				className="w-full border-2 border-[var(--pinkSecondary)] rounded-md shadow-input p-2 focus:outline-none focus:ring-2"
				aria-required="true"  // If input is required
			/>
		</div>
	);
});

InputField.displayName = 'InputField';

InputField.propTypes = {
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default InputField;
