import './App.css';
import { Route, Routes } from 'react-router';
import Navigation from './components/Layouts/Navigation';
import SalempangLayout from './components/Layouts/SalempangLayout';
import Button from './components/UI/Button';
import HeadingTo from './components/Layouts/HeadingTo';
import Explanation from './components/Layouts/ExplanationLayout';
import IntroLayout from './components/Layouts/IntroLayout';
import CardServiceLayout from './components/Layouts/CardServiceLayout';
import CardProductLayout from './components/Layouts/CardProductLayout';
import IconWhatsapp from './components/UI/IconWhatsapp';
import Navigasi from './components/UI/Navigasi';
import HeaderNavLayout from './components/Layouts/HeaderNavLayout';
import Footer from './components/Layouts/Footer';
function App() {
	

	return (
		<Routes>
			<Route path="/" element={<Footer />} />
			<Route path="/headerLayout" element={<HeaderNavLayout />} />
			<Route path="/navigasi" element={<Navigasi />} />
			<Route path="/iconWhasapp" element={<IconWhatsapp />} />
			<Route path="/cardProduct" element={<CardProductLayout />} />
			<Route path="/cardservice" element={<CardServiceLayout />} />
			<Route path="/intro" element={<IntroLayout />} />
			<Route path="/explanation" element={<Explanation />} />
			<Route path="/headingto" element={<HeadingTo />} />
			<Route path="/button" element={<Button />} />
			<Route path="/salempang" element={<SalempangLayout />} />
			<Route path="/app" element={<Navigation />} />
		</Routes>
	);
}

export default App;
