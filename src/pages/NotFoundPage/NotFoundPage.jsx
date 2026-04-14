import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <>
            <div className="w-full min-h-[100px] flex items-center justify-center flex-col">
                <h1 className="font-geist text-[36px] font-bold text-[#1F2937] md:text-[54px] lg:text-[72px]">404</h1>
                <h3 className="font-geist text-2xl font-normal text-[#64748B] uppercase md:text-[36px]">This Page</h3>
                <p className="font-geist text-sm font-normal text-[#64748B]/40 md:text-[15px] lg:text-base">Was Not Found</p>
                <div className="w-auto mt-5"> 
                    <button onClick={handleNavigate} className="font-geist text-sm font-semibold text-white flex items-center justify-center gap-1 bg-[#244D3F] py-[10px] px-[14px] rounded-sm transform transition-transform duration-300 hover:-translate-y-0.5 md:text-base md:py-3 md:px-4 cursor-pointer">
                        <ArrowLeft size={18}></ArrowLeft>
                        Take Me Home
                    </button>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;