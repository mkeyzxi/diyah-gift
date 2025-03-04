import PropTypes from 'prop-types';
import InputField from './InputField';

// const FormGmail = ({ refs }) => {
// 	const { namaRef, gmailRef, pesanRef } = refs;
const FormGmail = ({ refs }) => {
	const { namaRef, gmailRef, pesanRef } = refs;

	return (
		<div className="max-w-md mx-auto mt-5">
			<InputField ref={namaRef} label="Nama" placeholder="Masukkan nama" />
			<InputField ref={gmailRef} label="Gmail" placeholder="Masukkan gmail" type="email" />
			<InputField ref={pesanRef} label="Pesan" placeholder="Masukkan pesan" />
		</div>
	);
};

FormGmail.propTypes = {
	refs: PropTypes.shape({
		namaRef: PropTypes.object.isRequired,
		gmailRef: PropTypes.object,
		pesanRef: PropTypes.object.isRequired,
	}).isRequired,
};

export default FormGmail;
