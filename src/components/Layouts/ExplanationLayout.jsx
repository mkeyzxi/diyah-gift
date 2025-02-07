import Button from "../UI/Button";
import PropTypes from 'prop-types';
const Explanation = ({subExplanation, paragraphExplanation}) => {
  return (
	<div className="flex flex-col items-start justify-center gap-4 h-[300px] w-1/2" >
    <h3 className="md:text-2xl text-xl font-semibold">{subExplanation}</h3>
    {/* <h3 className="md:text-2xl text-xl font-semibold">MEMBERIKAN HADIAH YANG AKAN MENJADI KENANGAN</h3> */}
    <p>{paragraphExplanation}</p>
    {/* <p>Penyedia Hadiah Yang Akan Menyediakan Hadiah Menjadi Kenangan Bagi Sipenerima Hadiah, Guna Menjadi Kerabat, Keluarga, Sahabat Yang Akan Selalu Di Kenang.</p> */}
    <Button label="Lihat Produk"/>
  </div>
  )
}

Explanation.propTypes = {
  subExplanation: PropTypes.string.isRequired,
  paragraphExplanation: PropTypes.string.isRequired,
};

export default Explanation;
