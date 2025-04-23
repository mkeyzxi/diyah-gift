// import PropTypes from 'prop-types';
import InputField from './InputField';
// import Button from '../UI/Button';
import { useEffect, useRef } from 'react';
const FormWhatsapp = () => {
	const namaRef = useRef(null);
	const pesanRef = useRef(null);
	useEffect(() => {
		namaRef.current.focus();
	}, []);
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
			{/* <Button label="Kirim" onClick={() => handleSubmit(namaRef, pesanRef)} /> */}
			<button className='flex items-center justify-center gap-1 w-full bg-[var(--pinkSecondary)] !p-1.5 text-white transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:scale-105 active:scale-95 dark:bg-[#870446] dark:text-gray-100' onClick={() => handleSubmit(namaRef, pesanRef)}>kirim</button>
		</div>
	);
};

export default FormWhatsapp;
