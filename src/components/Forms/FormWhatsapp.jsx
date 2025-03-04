// import PropTypes from 'prop-types';
import InputField from './InputField';
import Button from '../UI/Button';
import { useRef } from 'react';
const FormWhatsapp = () => {
	const namaRef = useRef(null);
	const pesanRef = useRef(null);

	const handleSubmit = (namaPengirim, pesanPengirim) => {
		const nama = namaPengirim.current.value;
		const pesan = pesanPengirim.current.value;

		// alert(`pengirim ${nama} pesan ${pesan}`);
		if (!nama || !pesan) {
			alert('Mohon lengkapi semua form');
			return;
		}
		const message = `Halo kak, saya ${nama} \n${pesan}`;
		const whatsappUrl = `https://wa.me/6285342181132?text=${encodeURIComponent(
			message,
		)}`;
		window.open(whatsappUrl, '_blank');
	};

	return (
		<div className="max-w-md mx-auto mt-5">
			<InputField ref={namaRef} label="Nama" placeholder="Masukkan nama" />
			<InputField ref={pesanRef} label="Pesan" placeholder="Masukkan pesan" />
			<Button label="Kirim" onClick={() => handleSubmit(namaRef, pesanRef)} />
		</div>
	);
};

export default FormWhatsapp;
