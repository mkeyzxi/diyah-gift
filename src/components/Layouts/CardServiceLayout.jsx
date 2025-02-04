import PropTypes from 'prop-types';

const CardServiceLayout = ({service, paragraphService}) => {
  return (
	<div className="w-[300px] h-[200px] bg-[var(--pinkBackgroundOpacity)] flex flex-col justify-start items-start gap-1 p-4 rounded-sm ">
		<div className="w-[58px] h-[58px] bg-[url(../image/BerandaBackground.png)] rounded-sm">
		</div>
		<h3 className="font-extrabold text-xl">{service}</h3>
		{/* <h3 className="font-extrabold text-xl">Pengetikan</h3> */}
		<p className="font-reguler font-sm mt-2 line-clamp-2">{paragraphService}</p>
		{/* <p className="font-reguler font-sm mt-2 line-clamp-2">Pengetikan tugas, pekerjaan kantor, atau rumus yang ada di matematika ceckekceke.</p> */}
	</div>
  )
}

CardServiceLayout.propTypes = {
	service: PropTypes.string.isRequired,
	paragraphService: PropTypes.string.isRequired,
};

export default CardServiceLayout