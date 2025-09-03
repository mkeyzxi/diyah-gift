
// import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router';
import IconModeNav from '../UI/IconModeNav';
// import { useEffect } from 'react';		
// import { Link } from 'react-router';
export default function Navigation() {
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	// const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	// const params = useParams();
	const { pathname } = useLocation();
	const menuItems = [
		{ name: 'Beranda', path: '/' },
		{ name: 'Galeri', path: '/galeri' },
		{ name: 'Kontak', path: '/kontak' },
	];
	// console.log(params);

	// useEffect(() => {
	// 	const onFocus = setKeyboardOpen(true);
	// 	const onBlur = setKeyboardOpen(false);

	// 	window.addEventListener('focusin', onFocus);
	// 	window.addEventListener('focusout', onBlur);

	// 	return (
	// 		window.removeEventListener('focusin', onFocus),
	// 		window.removeEventListener('focusout', onBlur)
	// 	)

	// }, []);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-[peachPuff] dark:bg-[#CC9F02] text-[var(--blackCustom)] dark:text-gray-100 shadow-md">
			<nav className="flex items-center justify-between px-4 py-2 md:px-8 md:py-0">
				{/* Logo */}
				<div className="w-[60px] md:w-[80px]">
					<img
						src={logo}
						alt="Logo Diyah"
						className="object-contain w-full h-auto"
					/>
				</div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex items-center gap-8 text-md">
					{menuItems.map((item, index) => (
						<li key={index} className="relative group py-1">
							<Link
								to={item.path}
								className={`transition-colors duration-300 text-[var(--blackCustom)] dark:text-gray-100 hover:text-[var(--pink)] `


								}


							>
								{item.name}
								{console.log(pathname)}
							</Link>
							<span className={`absolute bottom-0 left-1/2 w-0 h-[4px] bg-[var(--blackCustom)] dark:bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0 ${item.path === pathname ? 'w-full !left-0 !bg-[var(--pink)]' : 'w-0'}`}></span>

						</li>


					))}
				</ul>

				{/* Desktop Icons */}
				<div className="hidden md:flex items-center gap-4">
					<IconModeNav />
				</div>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden flex items-center gap-3">
					<IconModeNav />
					{/* <button
						onClick={toggleMenu}
						className="text-3xl focus:outline-none text-[var(--blackCustom)] dark:text-gray-100"
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
					>
						{isMenuOpen ? '✖' : '☰'}
					</button> */}
				</div>
			</nav>

			{/* Mobile Menu */}
			{/* <div
				className={`md:hidden bg-[peachPuff] dark:bg-[#CC9F02] px-4 py-3 transition-all duration-300 ease-in-out ${
					isMenuOpen ? 'block' : 'hidden'
				}`}
				id="mobile-menu"
			>
				<ul className="flex flex-col gap-4 text-center">
					{menuItems.map((item, index) => (
						<li key={index}>
							<Link
								to={item.path}
								onClick={() => setIsMenuOpen(false)}
								className="block text-lg font-medium text-[var(--blackCustom)] dark:text-gray-100 hover:text-[var(--pink)] transition-colors duration-300"
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div> */}
			<nav className=" md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 w-[98%] max-w-md rounded-2xl bg-[var(--peachPuff)]/80 dark:bg-[var(--blackCustom)]/60 backdrop-blur-3xl shadow-lg border border-gray-200 dark:border-[var(--pinkBackgroundOpacity)] transition-colors duration-300">
				<ul className="flex justify-around items-center h-10">

					{/* Home */}
					<Link to={'/'}>

						<li className={`flex flex-col items-center text-gray-700 hover:text-[var(--pink)] dark:text-gray-300 dark:hover:text-[var(--pinkSecondary)] transition-colors duration-300 ${pathname === '/' ? '!text-[var(--pink)] !dark:text-[var(--pinkSecondary)]' : ''}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="26"
								height="26"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-house"
							>
								<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
								<path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
							</svg>
							{/* <span className="text-xs mt-1">Home</span> */}
						</li>
					</Link>

					{/* GALERI (aktif) */}

					<Link to={'/galeri'}>
						<li className={`flex flex-col items-center shadow-sm relative bg-[var(--yellow)] dark:bg-[#CC9F02] p-4 rounded-full text-[var(--blackCustom)] hover:text-[var(--pink)] dark:text-[var(--blackCustom)] dark:hover:text-[var(--pinkSecondary)] transition-colors duration-300  ${pathname === '/galeri' ? '!text-[var(--pink)] !dark:text-[var(--pinkSecondary)]' : ''}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-book-image"
							>
								<path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" />
								<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
								<circle cx="10" cy="8" r="2" />
							</svg>
							{/* <span className="text-xs mt-1">Search</span> */}
						</li>
					</Link>

					{/* kontak */}
					<Link to={'/kontak'}>
						<li className={`flex flex-col items-center text-gray-700 hover:text-[var(--pink)] dark:text-gray-300 dark:hover:text-[var(--pinkSecondary)] transition-colors duration-300 ${pathname === '/kontak' ? '!text-[var(--pink)] !dark:text-[var(--pinkSecondary)]' : ''}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="26"
								height="26"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-user"
							>
								<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
								<circle cx="12" cy="7" r="4" />
							</svg>
							{/* <span className="text-xs mt-1">Profile</span> */}
						</li>
					</Link>

				</ul>
			</nav>

		</header>
	);
}
