import {useState} from 'react';
import HeaderNavLayout from '../components/Layouts/HeaderNavLayout';
import FormWhatsapp from '../components/Forms/FormWhatsapp';
import FormGmail from '../components/Forms/FormGmail';
import Button from '../components/UI/Button';
const KontakPage = () => {
	const [titleHeaderState, setTitleHeaderState] = useState('whatsapp');
	return (
		<div className="container mx-auto justify-center items-center space-y-16 md:space-y-10 px-2 md:px-20 mt-20 h-screen">
			<div className="">
				<HeaderNavLayout headerTitle={`Menampilkan ${titleHeaderState}`}>
					<span
						className={`text-[var(--pinkSecondary)] cursor-pointer ${
							titleHeaderState === 'Whatsapp' ? '!text-green-400' : ''
						}}`}
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
						berterimakasih atas masukan tersebut, tidak hanya saran kami juga
						menerima pemesanan kok, jadi tunggu apa lagi.
					</p>
				</div>
				<div
					className="w-full"
				>
					{titleHeaderState === 'Whatsapp' ? <FormWhatsapp /> : <FormGmail />}
					<div className="w-[100px] mx-auto">
					<Button label="Kirim"/>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default KontakPage;
