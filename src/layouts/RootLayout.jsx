import { Outlet } from 'react-router'

import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

const RootLayout = () => {

    return (
        <>
            <div className='w-full min-h-screen flex items-center justify-between flex-col'>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    );
};

export default RootLayout;