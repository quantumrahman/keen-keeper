import { ChartLine, Clock, House, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router'
import { useState } from 'react'

import navlinks from '../../utils/navLinks.js'
import Logo from '../Logo/Logo.jsx'
import Navbar from '../Navbar/Navbar.jsx'

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggleMenu = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <div className="w-full bg-white border-b border-[#E9E9E9] py-4">
                <div className='w-full max-w-[1440px] mx-auto px-5'>
                    <div className='flex items-center justify-between'>
                        <Logo><span className='font-bold text-[#1F2937]'>Keen</span>Keeper</Logo>
                        <Navbar></Navbar>
                        <button onClick={handleToggleMenu} className='cursor-pointer md:hidden'>
                            <Menu color='#244D3F'></Menu>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`w-full max-w-[350px] min-h-screen bg-white/20 fixed top-0 right-0 backdrop-blur-sm z-30 transform transition-transform duration-500 delay-500 ${toggle ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className='w-full py-4.5 px-5'>
                    <button onClick={handleToggleMenu} className='cursor-pointer'>
                        <X color='#244D3F'></X>
                    </button>
                </div>
                <div className='w-full mt-5 px-5 flex justify-center flex-col gap-5'>
                    {
                        navlinks.map((link) => <NavLink onClick={handleToggleMenu} key={link.id} to={link.path} className={
                            ({ isActive }) => isActive ? 'py-3 px-4 bg-[#244D3F] rounded-sm text-white' : 'py-3 bg-white rounded-sm text-[#64748B] hover:text-[#244D3F]'}>
                            <div className='flex items-center gap-2'>
                                {
                                    link.name === 'Home' ? <House size={20}></House>
                                    : link.name === 'Timeline' ? <Clock size={20}></Clock>
                                    : link.name === 'Stats' ? <ChartLine size={20}></ChartLine>
                                    : ''
                                }
                                <span className='font-geist text-base font-semibold'>{link.name}</span>
                            </div>
                        </NavLink>)
                    }
                </div>
            </div>
        </>
    );
};

export default Header;