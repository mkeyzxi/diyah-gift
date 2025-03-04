import PropTypes from 'prop-types';
import InputField from './InputField';

const FormWhatsapp = ({ refs }) => {
	const { namaRef, pesanRef } = refs;

	return (
		<div className="max-w-md mx-auto mt-5">
			<InputField ref={namaRef} label="Nama" placeholder="Masukkan nama" />
			<InputField ref={pesanRef} label="Pesan" placeholder="Masukkan pesan" />
		</div>
	);
};

FormWhatsapp.propTypes = {
	refs: PropTypes.shape({
		namaRef: PropTypes.object.isRequired,
		pesanRef: PropTypes.object.isRequired,
	}).isRequired,
};

export default FormWhatsapp;
