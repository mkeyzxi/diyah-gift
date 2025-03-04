// import PropTypes from 'prop-types';
import InputField from './InputField';
import Button from '../UI/Button';
import {useRef} from 'react';
const FormGmail = () => {
	const namaRef = useRef(null);
	const gmailRef = useRef(null);
	const pesanRef = useRef(null);

	// const handleSubmit = (namaPengirim, gmailPengirim, pesanPengirim) => {
	// 	const nama = namaPengirim.current.value.trim();
	// 	const gmail = gmailPengirim.current.value.trim();
	// 	const pesan = pesanPengirim.current.value.trim();
	
	// 	if (!nama || !pesan || !gmail) {
	// 		alert('Mohon lengkapi semua form');
	// 		return;
	// 	}
	
	// 	const subject = encodeURIComponent(`Pesan dari ${nama}`);
	// 	const body = encodeURIComponent(`Nama: ${nama}\nEmail: ${gmail}\nPesan: ${pesan}`);
		
	// 	window.open(`mailto:muhmakbul6@gmail.com?subject=${subject}&body=${body}`, '_self');

	// };
	const handleSubmit = (namaPengirim, gmailPengirim, pesanPengirim) => {
		const nama = namaPengirim.current.value.trim();
		const gmail = gmailPengirim.current.value.trim();
		const pesan = pesanPengirim.current.value.trim();
	
		if (!nama || !pesan || !gmail) {
			alert('Mohon lengkapi semua form');
			return;
		}
	
		const subject = encodeURIComponent(`Pesan dari ${nama}`);
		const body = encodeURIComponent(`Nama: ${nama}\nEmail: ${gmail}\nPesan: ${pesan}`);
	
		// Menggunakan Gmail Compose URL
		const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=muhmakbul6@gmail.com&su=${subject}&body=${body}`;
	
		// Buka di tab baru
		window.open(gmailUrl, '_blank');
	};
	
	
	return (
		<div className="max-w-md mx-auto mt-5">
			<InputField ref={namaRef} label="Nama" placeholder="Masukkan nama" />
			<InputField
				ref={gmailRef}
				label="Gmail"
				placeholder="Masukkan gmail"
				type="email"
			/>
			<InputField ref={pesanRef} label="Pesan" placeholder="Masukkan pesan" />
			<Button
				label="Kirim"
				onClick={() => handleSubmit(namaRef, gmailRef, pesanRef)}
			/>
		</div>
	);
};

export default FormGmail;
