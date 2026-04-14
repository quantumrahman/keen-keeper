import { NavLink } from 'react-router'
import { House, Clock, ChartLine } from 'lucide-react';

import navlinks from "../../utils/navLinks.js";

const Navbar = () => {
    
    return (
        <>
            <div className="w-auto hidden md:block">
                <ul className="flex items-center justify-center">
                    {
                        navlinks.map((link) => 
                            <NavLink key={link.id} to={link.path} className={
                                ({ isActive }) => isActive ? 'py-3 px-4 bg-[#244D3F] rounded-sm text-white' : 'py-3 px-4 bg-white rounded-sm text-[#64748B] hover:text-[#244D3F]'}>
                                <div className='flex items-center justify-center gap-1'>
                                    {
                                        link.name === 'Home' ? <House size={20}></House>
                                        : link.name === 'Timeline' ? <Clock size={20}></Clock>
                                        : link.name === 'Stats' ? <ChartLine size={20}></ChartLine>
                                        : ''
                                    }
                                    <span className='font-geist text-base font-semibold'>{link.name}</span>
                                </div>
                            </NavLink>
                        )
                    }
                </ul>
            </div>
        </>
    );
};

export default Navbar;