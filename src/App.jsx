import './App.css';
import { Route, Routes } from 'react-router';
import Navigation from './components/Layouts/Navigation';
import Footer from './components/Layouts/Footer';
import BerandaPage from './pages/BerandaPage';
import GaleriPage from './pages/GaleriPage';
import KontakPage from './pages/KontakPage';
function App() {
	return (
		<div className='flex flex-col overflow-clip gap-10 dark:bg-[#1E1E1E] dark:text-gray-100 transition-colors duration-300'>
			<Navigation />
			<Routes>
				<Route path="/" element={<BerandaPage />} />
				<Route path="/galeri" element={<GaleriPage />} />
				<Route path="/kontak" element={<KontakPage />} />

			</Routes>
			<Footer />
		</div>
	);
}

export default App;
