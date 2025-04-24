// import Button from "../UI/Button";
// import PropTypes from 'prop-types';
// const Explanation = ({className, subExplanation, paragraphExplanation, children}) => {
//   return (
// 	<div className={`flex flex-col items-start w-full justify-center gap-4 h-[300px] md:w-1/2 ${className}`} >
//     <h3 className="md:text-2xl text-xl font-semibold">{subExplanation}</h3>
//     {/* <h3 className="md:text-2xl text-xl font-semibold">MEMBERIKAN HADIAH YANG AKAN MENJADI KENANGAN</h3> */}
//     {/* {children}
//      */}
//      {children && <div className="w-full">{children}</div>}

//     {console.log(children)}
//     <p>{paragraphExplanation}</p>
//     {/* <p>Penyedia Hadiah Yang Akan Menyediakan Hadiah Menjadi Kenangan Bagi Sipenerima Hadiah, Guna Menjadi Kerabat, Keluarga, Sahabat Yang Akan Selalu Di Kenang.</p> */}
//     <Button label="Lihat Produk" svg={<svg
// 				xmlns="http://www.w3.org/2000/svg"
// 				width="12"
// 				height="18"
// 				viewBox="0 0 12 24"
// 			>
// 				<path
// 					fill="currentColor"
// 					fillRule="evenodd"
// 					d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
// 				></path>
// 			</svg>}/>
//   </div>
//   )
// }

// Explanation.propTypes = {
//   subExplanation: PropTypes.string.isRequired,
//   paragraphExplanation: PropTypes.string.isRequired,
//   className: PropTypes.string,
//   children: PropTypes.element,
// };

// export default Explanation;



// dengan aria
import Button from "../UI/Button";
import PropTypes from 'prop-types';

const Explanation = ({className, subExplanation, paragraphExplanation, children}) => {
  return (
	<div 
		className={`flex flex-col items-start w-full justify-center gap-4 h-[300px] md:w-1/2 ${className}`} 
		aria-labelledby="explanation-title" 
		aria-describedby="explanation-description"
		role="region"
	>
    <h3 
    	id="explanation-title" 
    	className="md:text-2xl text-xl font-semibold"
    >
    	{subExplanation}
    </h3>
    {children && <div className="w-full">{children}</div>}
    
    <p 
    	id="explanation-description"
    >
    	{paragraphExplanation}
    </p>

    <Button 
    	label="Lihat Produk" 
    	svg={
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
		}
	/>
  </div>
  )
}

Explanation.propTypes = {
  subExplanation: PropTypes.string.isRequired,
  paragraphExplanation: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.element,
};

export default Explanation;
