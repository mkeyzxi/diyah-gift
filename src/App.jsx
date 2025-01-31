import './App.css';
import { Route, Routes } from 'react-router';
import Navigation from './components/Layouts/Navigation';
import SalempangLayout from './components/Layouts/SalempangLayout';
import Button from './components/UI/Button';
import HeadingTo from './components/Layouts/HeadingTo';
import Explanation from './components/Layouts/ExplanationLayout';
function App() {
	

	return (
		<Routes>
			<Route path="/" element={<Explanation />} />
			<Route path="/headingto" element={<HeadingTo />} />
			<Route path="/button" element={<Button />} />
			<Route path="/salempang" element={<SalempangLayout />} />
			<Route path="/app" element={<Navigation />} />
		</Routes>
	);
}

export default App;
