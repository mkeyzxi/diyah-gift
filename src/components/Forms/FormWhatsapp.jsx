import PropTypes from 'prop-types';
import InputField from './InputField';


const FormWhatsapp = () => {
	return (
		<div className="max-w-md mx-auto mt-5">
			<InputField label="Nama" placeholder="Masukkan nama" />
			<InputField label="Pesan" placeholder="Masukkan pesan" />
		</div>
	);
};

FormWhatsapp.propTypes = {
	label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}


export default FormWhatsapp;
