const Skeleton = () => {
	return (
		<div className="p-0 animate-pulse w-[160px] md:w-[200px] bg-[var(--pinkSecondary)] dark:bg-[#870446] rounded-lg ">
			{/* Gambar */}
			<div
				className="relative overflow-clip md:h-[160px] h-[140px] w-full flex items-start justify-center 
				bg-[var(--pinkBackground)] dark:bg-[#2D2B2C] rounded">
			</div>

			<div className="p-2 space-y-1">
				{/* Judul Skeleton */}
				<div className="h-4 bg-[var(--pinkBackground)] dark:bg-[#2D2B2C] rounded w-3/4"></div>
				<div className="h-4 bg-[var(--pinkBackground)] dark:bg-[#2D2B2C] rounded w-1/2"></div>

				<hr className="mt-2 border-[var(--pinkSecondary)] dark:border-[#870446]" />

				<div className="flex items-center justify-between mt-2">
					{/* Harga */}
					<div className="h-4 bg-[var(--pinkBackground)] dark:bg-[#2D2B2C] rounded w-20"></div>

					{/* Tombol */}
					<div className="flex gap-2">
						<div className="h-8 w-8 bg-[var(--pinkBackground)] dark:bg-[#2D2B2C] rounded-full"></div>
						<div className="h-8 w-8 bg-[var(--pinkBackground)] dark:bg-[#2D2B2C] rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skeleton;