import HeadingTo from '../components/Layouts/HeadingTo';
import IntroLayout from '../components/Layouts/IntroLayout';
import SalempangLayout from '../components/Layouts/SalempangLayout';
import WhatIsLayout from '../components/Layouts/WhatIsLayout';
const BerandaPage = () => {
	return (
		<div>
			<IntroLayout textOne="HADIYAH" textTwo="UNTUKMU" />
			<SalempangLayout />
			<div className="container mx-auto">
				<HeadingTo lineTitle="APA ITU" />
				<WhatIsLayout />
			</div>
		</div>
	);
};

export default BerandaPage;
