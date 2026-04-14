import { Plus } from 'lucide-react'

const HeroSection = () => {

    return (
        <>
            <div className="w-full flex items-center justify-center flex-col text-center gap-4">
                <h1 className="font-geist text-3xl font-bold text-[#1F2937] md:text-[38px] lg:text-5xl">Friends to keep close in your life</h1>
                <div className="w-full max-w-[600px]">
                    <p className="font-geist text-sm font-normal text-[#64748B] md:text-[15px] lg:text-base">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>
                <button className="font-geist text-sm font-semibold text-white flex items-center justify-center gap-1 bg-[#244D3F] py-[10px] px-[14px] rounded-sm transform transition-transform duration-300 hover:-translate-y-0.5 mt-4 md:mt-8 md:text-base md:py-3 md:px-4 cursor-pointer">
                    <Plus></Plus>
                    Add a Friend
                </button>
            </div>
        </>
    );
};

export default HeroSection;