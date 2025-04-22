import Explanation from './ExplanationLayout';

const WhatIsLayout = () => {
	return (
		<div className="flex flex-col md:flex-row md:gap-10 w-full justify-between px-3 md:p-0">
			<Explanation className="order-2 md:order-0"
				subExplanation="MEMBERIKAN HADIAH YANG AKAN MENJADI KENANGAN"
				paragraphExplanation="Penyedia Hadiah Yang Akan Menyediakan Hadiah Menjadi Kenangan Bagi Sipenerima Hadiah, Guna Menjadi Kerabat, Keluarga, Sahabat Yang Akan Selalu Di Kenang."
			>
				<div className="w-full md:hidden flex justify-between flex-row gap-2 md:gap-5 bg-slate-400 p-1 md:p-5 order-1 md:order-0">
				<div className="w-1/2 bg-slate-900">
					<img src="../public/image/buket/ImageBuket10.webp" width="100%" height="100%" alt="Profile Selempang" />
				</div>
				<div className='bg-slate-900 w-1/2  '><img src="../public/image/buket/ImageBuket9.webp" width=" 100%" height="100%" alt="Profile Buket" /></div>
			</div>
			</Explanation>
			<div className="hidden md:w-1/2 md:flex flex-row gap-2 md:gap-5 justify-center items-center bg-slate-400 p-1 md:p-5 order-1 md:order-0">
				<div className="w-1/2 bg-slate-900">
					<img src="../public/image/buket/ImageBuket10.webp" width="100%" height="100%" alt="Profile Selempang" />
				</div>
				<div className='bg-slate-900 w-1/2 '><img src="../public/image/buket/ImageBuket9.webp" width="100%" height="100%" alt="Profile Buket" /></div>
			</div>
		</div>
	);
};

export default WhatIsLayout;
