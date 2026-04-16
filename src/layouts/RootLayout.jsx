import { Outlet } from 'react-router'

import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import ScrollUp from '../components/ScrollUp/ScrollUp.jsx';

const RootLayout = () => {

    return (
        <>
            <ScrollUp></ScrollUp>
            <div className='w-full min-h-screen bg-[#F8FAFC] flex items-center justify-between flex-col'>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    );
};

export default RootLayout;