import Button from "../UI/Button";
import PropTypes from 'prop-types';
const Explanation = ({className, subExplanation, paragraphExplanation, children}) => {
  return (
	<div className={`flex flex-col items-start w-full justify-center gap-4 h-[300px] md:w-1/2 ${className}`} >
    <h3 className="md:text-2xl text-xl font-semibold">{subExplanation}</h3>
    {/* <h3 className="md:text-2xl text-xl font-semibold">MEMBERIKAN HADIAH YANG AKAN MENJADI KENANGAN</h3> */}
    {/* {children}
     */}
     {children && <div className="w-full">{children}</div>}

    {console.log(children)}
    <p>{paragraphExplanation}</p>
    {/* <p>Penyedia Hadiah Yang Akan Menyediakan Hadiah Menjadi Kenangan Bagi Sipenerima Hadiah, Guna Menjadi Kerabat, Keluarga, Sahabat Yang Akan Selalu Di Kenang.</p> */}
    <Button label="Lihat Produk"/>
  </div>
  )
}

Explanation.propTypes = {
  subExplanation: PropTypes.string.isRequired,
  paragraphExplanation: PropTypes.string.isRequired,
  className: PropTypes.string,
  // children: PropTypes.element,
};

export default Explanation;
