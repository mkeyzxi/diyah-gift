import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const CardLikeLayout = ({ title }) => {
	const [thisLike, setThisLike] = useState(false);

	// Load from localStorage on mount
	useEffect(() => {
		const storedLike = localStorage.getItem(`liked-${title}`);
		if (storedLike === "true") {
			setThisLike(true);
		} else {
			setThisLike(false);
		}
	}, [title]);

	// Simulasi daftar produk
	const items = Array(4).fill({
		name: "Selempang Diyah",
		price: "RP39.000",
		image: "https://via.placeholder.com/60",
	});

	// Fungsi toggle like
	const toggleLike = () => {
		const newLike = !thisLike;
		setThisLike(newLike);
		localStorage.setItem(`liked-${title}`, newLike);
	};

	return (
		<div className="w-full max-w-xs bg-white rounded-xl shadow-md overflow-hidden">
			<div className="flex justify-between items-center p-2">
				<h2 className="text-lg font-bold text-gray-800">{title}</h2>
				<button
					onClick={toggleLike}
					className={`text-sm px-2 py-1 rounded ${
						thisLike ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
					}`}
				>
					{thisLike ? '♥ Liked' : '♡ Like'}
				</button>
			</div>
			<div className="space-y-3 p-2 overflow-y-auto max-h-[300px]">
				{items.map((item, index) => (
					<div
						key={index}
						className="flex items-center bg-white rounded-lg shadow p-2"
					>
						<img
							src={item.image}
							alt={item.name}
							className="w-14 h-14 rounded bg-gray-200"
						/>
						<div className="ml-4">
							<h3 className="text-sm font-normal text-gray-800">
								{item.name}
							</h3>
							<p className="text-sm font-bold text-black">
								{item.price}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

CardLikeLayout.propTypes = {
	title: PropTypes.string.isRequired,
};


export default CardLikeLayout;
