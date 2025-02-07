import PropTypes from "prop-types";
const IntroLayout = ({textOne, textTwo}) => {
	return (
		<div className="max-w-full min-h-screen bg-[url(../image/BerandaBackground.png)] bg-cover flex flex-col justify-center items-center gap-2 text-[var(--pink)] font-semibold text-7xl lg:text-[263px] lg:gap-0 border-b-5 border-b-[var(--yellow)]">
			<h1 className="">{textOne}</h1>
			<div className="w-14 absolute z-1 overflow-hidden lg:w-[230px] lg:top-[30%] ">
				<img
					src="src/assets/model.jpg"
					className="scale-130 md:scale-110 lg:scale-100 rounded-xs" 
					alt="Foto Wisuda dari Suci Wahyuni, S.E"
					height="100%"
					width="100%"
				/>
			</div>

			<h1 className="text-6xl relative z-2 lg:text-[227px]">{textTwo}</h1>
		</div>
	);
};

IntroLayout.propTypes = {
    textOne: PropTypes.string,
    textTwo: PropTypes.string,
};

export default IntroLayout;


