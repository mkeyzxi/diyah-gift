import PropTypes from 'prop-types';
import InputField from './InputField';


const FormGmail = () => {
	return (
		<div className="max-w-md mx-auto mt-5">
			<InputField label="Nama" placeholder="Masukkan nama" />
			<InputField label="Gmail" placeholder="Masukkan Gmail" type='email' />
			<InputField label="Pesan" placeholder="Masukkan pesan" />
		</div>
	);
};

FormGmail.propTypes = {
	label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}


export default FormGmail;
