import PropTypes from 'prop-types';

const Button = ({label}) => {
	return (
		// <button className="flex items-center justify-center gap-1 w-full bg-[var(--pinkSecondary)] !p-1 md:!p-2 !hover:text-[var(--black)]">
		// 	Lihat Produk
		// 	<svg
		// 		xmlns="http://www.w3.org/2000/svg"
		// 		width={15}
		// 		height={20}
		// 		viewBox="0 0 12 24"
		// 		className=''
		// 	>
		// 		<path
		// 			fill="currentColor"
		// 			fillRule="evenodd"
		// 			d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
		// 		></path>
		// 	</svg>
		// </button>

		<button className="flex items-center justify-center gap-1 w-full bg-[var(--pinkSecondary)] !p-1.5 text-white transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:scale-105 active:scale-95 ">
			{label}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="18"
				viewBox="0 0 12 24"
			>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
				></path>
			</svg>
		</button>
	);
};
Button.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Button;
