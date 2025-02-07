import './App.css';
import {Route, Routes} from 'react-router';
import Navigation from './components/Layouts/Navigation';
import Footer from './components/Layouts/Footer';
import BerandaPage from './pages/BerandaPage';

function App() {
	return (
		<div className='flex flex-col overflow-clip'>
			<Navigation />
			<Routes>
				<Route path="/" element={<BerandaPage />} />
				
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
