import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router';
import IconModeNav from '../UI/IconModeNav';
import IconBasketNav from '../UI/IconBasketNav';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[peachPuff] md:justify-around flex justify-between items-center fixed top-0 right-0 left-0 !px-4 !py-1 shadow-md z-50 dark:bg-[#CC9F02] dark:text-gray-100 ">
            <div className="w-18">
                <img src={logo} alt="logo diyah" width="100%" height="100%" />
            </div>

            {/* Icons for Mobile View */}
            <div className="md:hidden flex items-center gap-4">
                <div className='bg-[var(--pinkBackground)] !p-1 rounded-full shadow-custom hover:scale-105 transition-all hover:bg-[var(--blackCustom)] active:bg-[var(--pink)] active:scale-95 hover:text-[var(--pink)] group'>
                    <IconModeNav />
                </div>
                <div className='bg-[var(--pinkBackground)] !p-1 rounded-full shadow-custom hover:scale-105 transition-all hover:bg-[var(--blackCustom)] active:bg-[var(--pink)] active:scale-95 hover:text-[var(--pink)] group'>
                    <Link to="/">
                        <IconBasketNav />
                    </Link>
                </div>
                <button onClick={toggleMenu} className="text-[var(--blackCustom)] text-2xl focus:outline-none">
                    ☰
                </button>
            </div>

            {/* Menu Items */}
            <ul className={`md:flex md:items-center md:gap-10 gap-5INFRARED BARRIER OBSTACLE SENSOR HALANGAN RINTANGAN MODULE absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[peachPuff] md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
                {[
                    { name: "Beranda", path: "/" },
                    { name: "Galeri", path: "/galeri" },
                    { name: "Kontak", path: "/kontak" }
                ].map((item, index) => (
                    <li key={index} className="relative group text-center md:text-left py-1">
                        <Link className="font-normal text-md text-[var(--blackCustom)] group-hover:text-[var(--pink)] transition-colors duration-300" to={item.path}>
                            {item.name}
                        </Link>
                        {/* Garis bawah animasi */}
                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[var(--blackCustom)] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </li>
                ))}
            </ul>


            {/* Icons for Desktop View */}
            <div className="hidden md:flex items-center gap-5">
                <div className='bg-[var(--pinkBackground)] !p-1 rounded-full shadow-custom hover:scale-105 transition-all hover:bg-[var(--blackCustom)] active:bg-[var(--pink)] active:scale-95 hover:text-[var(--pink)] group'>
                    <IconModeNav />
                </div>
                <div className='bg-[var(--pinkBackground)] !p-1 rounded-full shadow-custom hover:scale-105 transition-all hover:bg-[var(--blackCustom)] active:bg-[var(--pink)] active:scale-95 hover:text-[var(--pink)] group'>
                    <Link to="/">
                        <IconBasketNav />
                    </Link>
                </div>
            </div>
        </div>
    );
}