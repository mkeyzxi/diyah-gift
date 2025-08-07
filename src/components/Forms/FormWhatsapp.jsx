import InputField from './InputField';
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

		if (!nama || !pesan) {
			alert('Mohon lengkapi semua form');
			return;
		}

		const message = `Halo kak, saya ${nama} \n${pesan}`;
		const whatsappUrl = `https://wa.me/6285342181132?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, '_blank');
	};

	return (
		<div className="max-w-md mx-auto mt-5 bg-white p-4 rounded-md dark:bg-[#1F1D1E]">
			<form className='gap-5 flex flex-col'>
				<InputField
					ref={namaRef}
					label="Nama"
					placeholder="Masukkan nama"
					className="dark:text-white"
				/>
				<InputField
					ref={pesanRef}
					label="Pesan"
					placeholder="Masukkan pesan"
					className="dark:text-white"
				/>

				<button
					onClick={() => handleSubmit(namaRef, pesanRef)}
					className="flex items-center justify-center gap-1 w-full bg-[var(--pinkSecondary)] !p-1.5 text-white transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:scale-105 active:scale-95 dark:bg-[#870446] dark:text-gray-100"
				>
					Kirim
				</button>
			</form>
		</div>
	);
};

export default FormWhatsapp;
