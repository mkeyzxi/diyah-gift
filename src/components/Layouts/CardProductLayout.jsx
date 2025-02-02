import PropTypes from 'prop-types';

const CardProductLayout = ({judul, price, path}) => {
	return (
		<div className="md:max-w-[185px] max-w-[165px] overflow-hidden bg-white rounded-lg border border-gray-200 shadow-sm">
			<div className="p-0">
				<div className="relative overflow-clip md:h-[150px] h-[130px] object-cover w-full flex items-start justify-center">
					<img
						src={path}
						alt="Product image"
						className="object-contain w-full h-full"
						width="100%"
						height="100%"
					/>
				</div>

				<div className="p-2 space-y-1">
					<h3 className="font-reguler text-sm text-gray-900 line-clamp-2">
						{judul}
					</h3>
					<hr className="mt-2" />

					<div className="flex items-center justify-between">
						<p className="font-semibold text-sm">RP{price}</p>
						<div className="flex gap-0">
							<button
								className="p-2 hover:bg-gray-100 rounded-full transition-colors"
								aria-label="Add to cart"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									className="text-gray-700"
								>
									<path
										fill="currentColor"
										fillRule="evenodd"
										d="M19.285 12.645a3.8 3.8 0 0 0-5.416-5.332q-.288.288-.732.707l-.823.775l-.823-.775q-.445-.42-.733-.707a3.8 3.8 0 0 0-5.374 0c-1.468 1.469-1.485 3.844-.054 5.32l6.984 6.984l6.97-6.972zm-14.75-6.18a5 5 0 0 1 7.072 0q.273.274.707.682q.432-.408.707-.683a5 5 0 0 1 7.125 7.017l-7.125 7.126a1 1 0 0 1-1.414 0L4.48 13.48a5 5 0 0 1 .055-7.017z"
									></path>
								</svg>
							</button>
							<button
								className="p-2 hover:bg-gray-100 rounded-full transition-colors"
								aria-label="Contact on WhatsApp"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									className="text-gray-700"
								>
									<path
										fill="currentColor"
										d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CardProductLayout.propTypes = {
	judul: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	path: PropTypes.string.isRequired,
};

export default CardProductLayout;
