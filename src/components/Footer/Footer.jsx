import { Link } from 'react-router'

import ContainerLayout from '../../layouts/ContainerLayout.jsx'
import SocialIcon from '../SocialIcon/SocialIcon.jsx'
import socialLinks from '../../utils/socialLinks.js'
import standardLink from '../../utils/standardLink.js'

const Footer = () => {

    return (
        <>
            <div className='w-full bg-[#244D3F] pt-12 pb-6 md:pt-16 md:pb-7 lg:pt-[80px] lg:pb-[30px]'>
                <ContainerLayout>
                    <div className='w-full flex items-center justify-center flex-col gap-[6px] md:gap-3 lg:gap-6'>
                        <div className='w-full text-center space-y-[14px] md:space-y-[15px] lg:space-y-4'>
                            <h2 className='font-geist text-[36px] font-medium text-white md:text-[54px] lg:text-[72px]'><span className='font-bold'>Keen</span>Keeper</h2>
                            <p className='font-geist text-sm font-normal text-white/70 md:text-[15px] lg:text-base'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                        </div>
                        <div className='w-auto flex items-center justify-center flex-col gap-4'>
                            <h3 className='font-geist text-lg font-medium text-white md:text-[19px] lg:text-xl'>Social Links</h3>
                            <div className="w-full flex items-cneter justify-center gap-3">
                                {
                                    socialLinks.map((social) => <Link key={social.id} to={social.url} className='transform transition-transform duration-300 hover:-translate-y-0.5'><SocialIcon socialType={social.icon}></SocialIcon></Link>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className='w-full border-t border-white/10 mt-5 pt-[10px] flex items-center justify-between flex-col-reverse gap-2 md:flex-row md:pt-5 md:mt-10 lg:pt-[30px]'>
                        <p className='font-geist text-sm font-normal text-[#FAFAFA]/40 md:text-[15px] lg:text-base'>&copy; 2026 KeenKeeper. All rights reserved.</p>
                        <div className='space-x-4 md:space-x-5 lg:space-x-10'>
                            {
                                standardLink.map((link) => <Link key={link.id} to={'/'} className='font-geist text-sm font-normal text-[#FAFAFA]/40 transform transition-colors duration-300 hover:text-white md:text-[15px] lg:text-base'>{link.name}</Link>)
                            }
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </>
    );
};

export default Footer;