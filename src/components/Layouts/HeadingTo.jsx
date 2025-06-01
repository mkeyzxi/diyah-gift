// import PropTypes from "prop-types";
// const HeadingTo = ({lineTitle}) => {
//   return (
// 	<div className="flex gap-7 px-3 sm:p-0 mt-5 items-center justify-center w-full">
// 		<h2 className="text-md font-extrabold whitespace-nowrap text-[var(--blackCustom)] ">{lineTitle}</h2>
// 		<hr className="w-full text-[var(--blackCustom)] rounded-full "/>
// 	</div>
//   )
// }
// HeadingTo.propTypes = {
// 	lineTitle: PropTypes.string.isRequired,
// }

// export default HeadingTo;

// dengan aria
import PropTypes from "prop-types";

const HeadingTo = ({ lineTitle }) => {
	return (
		<div
			className="flex gap-7 px-3 sm:p-0 mt-5 items-center justify-center w-full"
			aria-labelledby="headingTitle"
			aria-describedby="headingDescription"
		>
			<h2
				id="headingTitle"
				className="text-md font-extrabold whitespace-nowrap text-[var(--blackCustom)]"
				aria-label="Section title"
			>
				{lineTitle}
			</h2>
			<hr
				id="headingDescription"
				className="w-full text-[var(--blackCustom)] rounded-full"
				aria-hidden="true"
			/>
		</div>
	);
};

HeadingTo.propTypes = {
	lineTitle: PropTypes.string.isRequired,
};

export default HeadingTo;

// malas ngonding
