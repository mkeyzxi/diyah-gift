import { useState, useRef } from 'react';
import HeaderNavLayout from '../components/Layouts/HeaderNavLayout';
import FormWhatsapp from '../components/Forms/FormWhatsapp';
import FormGmail from '../components/Forms/FormGmail';
import Button from '../components/UI/Button';

const KontakPage = () => {
	const [titleHeaderState, setTitleHeaderState] = useState('Whatsapp');
	const namaRef = useRef(null);
	const gmailRef = useRef(null);
	const pesanRef = useRef(null);

	const handleSubmit = () => {
		const nama = namaRef.current.value;
		const pesan = pesanRef.current.value;
		const gmail = titleHeaderState === 'Email' ? gmailRef.current.value : null;

		if (!nama || !pesan || (titleHeaderState === 'Email' && !gmail)) {
			alert('Mohon lengkapi semua form');
			return;
		}

		if (titleHeaderState === 'Whatsapp') {
			const message = `Halo, saya ${nama}. ${pesan}`;
			const whatsappUrl = `https://wa.me/6285342181132?text=${encodeURIComponent(message)}`;
			window.open(whatsappUrl, '_blank');
		} else {
			const mailtoLink = `mailto:muhmakbul6@gmail.com?subject=Pesan dari ${nama}&body=${encodeURIComponent(
				`Nama: ${nama}\nEmail: ${gmail}\nPesan: ${pesan}`
			)}`;
			window.location.href = mailtoLink;
		}
	};

	return (
		<div className="container mx-auto justify-center items-center space-y-16 md:space-y-10 px-2 md:px-20 mt-20 h-screen">
			<div>
				<HeaderNavLayout headerTitle={`Menampilkan ${titleHeaderState}`}>
					<span
						className={`text-[var(--pinkSecondary)] cursor-pointer ${
							titleHeaderState === 'Whatsapp' ? '!text-green-400' : ''
						}`}
						onClick={() => setTitleHeaderState('Whatsapp')}
					>
						Whatsapp
					</span>
					<span
						className="text-[var(--pinkSecondary)] cursor-pointer"
						onClick={() => setTitleHeaderState('Email')}
					>
						Email
					</span>
				</HeaderNavLayout>
			</div>

			<div className="flex flex-col gap-2">
				<div className="flex flex-col justify-center items-center gap-2 w-full md:w-1/2 mx-auto text-center">
					<h2 className="text-2xl font-medium text-gray-900">Kontak</h2>
					<p>
						Jika Anda memiliki saran atau masukan untuk meningkatkan pengalaman
						bersama diyah.gift jangan malu-malu untuk kirimkan yah, kami sangat
						berterima kasih atas masukan tersebut. Tidak hanya saran, kami juga
						menerima pemesanan kok, jadi tunggu apa lagi.
					</p>
				</div>

				<div className="w-full">
					{titleHeaderState === 'Whatsapp' ? (
						<FormWhatsapp refs={{ namaRef, pesanRef }} />
					) : (
						<FormGmail refs={{ namaRef, gmailRef, pesanRef }} />
					)}
					<div className="w-[100px] mx-auto">
						<Button label="Kirim" onClick={handleSubmit} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default KontakPage;
