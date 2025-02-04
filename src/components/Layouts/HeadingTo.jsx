import PropTypes from "prop-types";
const HeadingTo = ({lineTitle}) => {
  return (
	<div className="flex gap-7 items-center justify-center w-full">
		<h2 className="text-md font-extrabold whitespace-nowrap text-[var(--blackCustom)]">{lineTitle}</h2>
		<hr className="w-full text-[var(--blackCustom)] rounded-full "/>
	</div>
  )
}
HeadingTo.propTypes = {
	lineTitle: PropTypes.string.isRequired,
}

export default HeadingTo;