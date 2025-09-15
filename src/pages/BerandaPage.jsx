import HeadingTo from '../components/Layouts/HeadingTo';
import IntroLayout from '../components/Layouts/IntroLayout';
import SalempangLayout from '../components/Layouts/SalempangLayout';
import WhatIsLayout from '../components/Layouts/WhatIsLayout';
import { useRef, useEffect } from 'react';
import useScroll from '../components/Hooks/useScroll';

const BerandaPage = () => {
	const headForTitle = useRef(document.querySelector('title'));
	headForTitle.current.text = 'Beranda | diyah.gift';
	const scrollToTop = useScroll();

	useEffect(() => {
		scrollToTop;
	}, []);
	return (
		<div className="flex flex-col">
			<IntroLayout textOne="HADIYAH" textTwo="UNTUKMU" />
			<SalempangLayout />

			<div className="container mx-auto justify-center items-center space-y-16 md:space-y-10 px-2 md:px-20 mb-10 ">
				<HeadingTo lineTitle="APA ITU" />
				<WhatIsLayout />
			</div>
		</div>
	);
};

export default BerandaPage;
