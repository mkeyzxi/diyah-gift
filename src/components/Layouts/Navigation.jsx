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
            <ul className={`md:flex md:items-center md:gap-10 gap-5 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[peachPuff] md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li className='!p-1 group text-center md:text-left'>
                    <Link className="!font-normal text-md group-hover:border-b-2 !text-[var(--blackCustom)] border-[var(--pink)] group-active:text-[var(--pink)]" to="/">Beranda</Link>
                </li>
                <li className='!p-1 group text-center md:text-left'>
                    <Link className="!font-normal text-md group-hover:border-b-2 !text-[var(--blackCustom)] border-[var(--pink)] group-active:text-[var(--pink)]" to="/galeri">Galeri</Link>
                </li>
                <li className='!p-1 group text-center md:text-left'>
                    <Link className="!font-normal text-md group-hover:border-b-2 !text-[var(--blackCustom)] border-[var(--pink)] group-active:text-[var(--pink)]" to="/kontak">Kontak</Link>
                </li>
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