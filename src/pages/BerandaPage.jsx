import HeadingTo from '../components/Layouts/HeadingTo';
import IntroLayout from '../components/Layouts/IntroLayout';
import SalempangLayout from '../components/Layouts/SalempangLayout';
import WhatIsLayout from '../components/Layouts/WhatIsLayout';
const BerandaPage = () => {
	return (
		<div className="flex flex-col">
			<IntroLayout textOne="HADIYAH" textTwo="UNTUKMU" />
			<SalempangLayout />
			
			<div className="container mx-auto justify-center items-center space-y-16 md:space-y-10 px-2 md:px-20 ">
			<HeadingTo lineTitle="APA ITU" />
				<WhatIsLayout />
			</div>
		</div>
	);
};

export default BerandaPage;
