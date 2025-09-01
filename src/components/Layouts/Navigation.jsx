// import { useState } from 'react';
// import logo from '../../assets/logo.png';
// import { Link } from 'react-router';
// import IconModeNav from '../UI/IconModeNav';
// // import IconBasketNav from '../UI/IconBasketNav';

// export default function Navigation() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div 
//             className="bg-[peachPuff] md:justify-around flex justify-between items-center fixed top-0 right-0 left-0 !px-4 !py-1 shadow-md z-50 dark:bg-[#CC9F02] dark:text-gray-100"
//             role="navigation"
//             aria-label="Main navigation"
//         >
//             <div className="w-18">
//                 <img 
//                     src={logo} 
//                     alt="Logo of Diyah" 
//                     width="100%" 
//                     height="100%" 
//                     aria-label="Diyah logo"
//                 />
//             </div>

//             {/* Icons for Mobile View */}
//             <div className="md:hidden flex items-center gap-4">
              
//                 <div
//                     className=""
//                     aria-label="Go to the basket"
//                 >
                    
//                         <IconModeNav />
//                 </div>
//                 {/* <div
//                     className="bg-[var(--pinkBackground)] !p-1 rounded-full shadow-custom hover:scale-105 transition-all hover:bg-[var(--blackCustom)] active:bg-[var(--pink)] active:scale-95 hover:text-[var(--pink)] group"
//                     aria-label="Go to the basket"
//                 >
//                     <Link to="/">
//                         <IconBasketNav />
//                     </Link>
//                 </div> */}
//                 <button 
//                     onClick={toggleMenu} 
//                     className="text-[var(--blackCustom)] text-2xl focus:outline-none"
//                     aria-label="Toggle navigation menu"
//                     aria-expanded={isMenuOpen ? "true" : "false"}
//                     aria-controls="mobile-menu"
//                 >
//                     ☰
//                 </button>
//             </div>

//             {/* Menu Items */}
//             <ul 
//                 id="mobile-menu"
//                 className={`md:flex md:items-center md:gap-10 gap-5 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[peachPuff] md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}
//                 aria-hidden={!isMenuOpen}
//             >
//                 {[{ name: "Beranda", path: "/" }, { name: "Galeri", path: "/galeri" }, { name: "Kontak", path: "/kontak" }]
//                     .map((item, index) => (
//                         <li key={index} className="relative group text-center md:text-left py-1">
//                             <Link 
//                                 className="font-normal text-md text-[var(--blackCustom)] group-hover:text-[var(--pink)] transition-colors duration-300" 
//                                 to={item.path}
//                                 aria-label={`Go to ${item.name}`}
//                             >
//                                 {item.name}
//                             </Link>
//                             {/* Garis bawah animasi */}
//                             <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[var(--blackCustom)] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
//                         </li>
//                     ))}
//             </ul>

//             {/* Icons for Desktop View */}
//             <div className="hidden md:flex items-center gap-5">
              
//                     <IconModeNav />
                
//                 {/* <div
//                     className="bg-[var(--pinkBackground)] !p-1 rounded-full shadow-custom hover:scale-105 transition-all hover:bg-[var(--blackCustom)] active:bg-[var(--pink)] active:scale-95 hover:text-[var(--pink)] group"
//                     aria-label="Go to the basket"
//                 >
//                     <Link to="/">
//                         <IconBasketNav />
//                     </Link>
//                 </div> */}
//             </div>
//         </div>
//     );
// }



import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, useLocation} from 'react-router';
import IconModeNav from '../UI/IconModeNav';

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	// const params = useParams();
	const { pathname }  = useLocation();
	const menuItems = [
		{ name: 'Beranda', path: '/' },
		{ name: 'Galeri', path: '/galeri' },
		{ name: 'Kontak', path: '/kontak' },
	];
	// console.log(params);

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
						
						
					)) }
				</ul>

				{/* Desktop Icons */}
				<div className="hidden md:flex items-center gap-4">
					<IconModeNav />
				</div>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden flex items-center gap-3">
					<IconModeNav />
					<button
						onClick={toggleMenu}
						className="text-3xl focus:outline-none text-[var(--blackCustom)] dark:text-gray-100"
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
					>
						☰
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div
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
			</div>
		</header>
	);
}
