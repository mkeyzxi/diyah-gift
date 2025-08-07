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
				className="block text-gray-700 dark:text-gray-200"
				id={`${label}-label`}
			>
				{label}
			</label>
			<input
				ref={ref}
				type={type}
				id={label}
				placeholder={placeholder}
				aria-labelledby={`${label}-label`}
				aria-placeholder={placeholder}
				aria-required="true"
				className="w-full border-2 border-[var(--pinkSecondary)] dark:border-pink-700 bg-white dark:bg-[#2A2A2A] dark:text-white dark:placeholder-gray-400 rounded-md shadow-input p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-600"
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
