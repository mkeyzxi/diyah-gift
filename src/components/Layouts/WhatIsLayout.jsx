import Explanation from './ExplanationLayout';

const WhatIsLayout = () => {
	return (
		<div className="flex flex-row gap-5 w-full ">
			<Explanation
				subExplanation="MEMBERIKAN HADIAH YANG AKAN MENJADI KENANGAN"
				paragraphExplanation="Penyedia Hadiah Yang Akan Menyediakan Hadiah Menjadi Kenangan Bagi Sipenerima Hadiah, Guna Menjadi Kerabat, Keluarga, Sahabat Yang Akan Selalu Di Kenang."
			/>
			<div className="w-1/2 flex flex-row gap-5 ">
				<div className="w-1/2  h-1/2 bg-slate-900">
					<img src="" width="100%" height="100%" alt="Profile Selempang" />
				</div>
				<div className='bg-slate-900 w-1/2'><img src="" width=" 100%" height="100%" alt="Profile Buket" /></div>
			</div>
		</div>
	);
};

export default WhatIsLayout;
