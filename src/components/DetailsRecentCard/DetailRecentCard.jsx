import { History } from 'lucide-react';
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageDots } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";

const DetailRecentCard = () => {

    return (
        <>
            <div className="w-full bg-white border border-[#E9E9E9] p-4 rounded-sm md:rounded-lg md:p-6">
                <div className="w-full flex items-center justify-between">
                    <h3 className="font-geist text-lg font-medium text-[#244D3F] md:text-xl">Recent Interactions</h3>
                    <button className="bg-[#F8FAFC] py-1 px-[6px] cursor-pointer border border-[#E9E9E9] rounded-sm flex items-center justify-center flex-wrap gap-1 transition-colors duration-200 ease-linear text-[#1F2937] hover:bg-[#244D3F] hover:border-[#244D3F] hover:text-white group md:py-2 md:px-[10px]">
                        <History size={13}></History>
                        <span className="font-geist text-[13px] font-medium md:text-sm">Full History</span>
                    </button>
                </div>
                <div className='w-full mt-[14px] lg:mt-4'>
                    <div className="w-full py-[14px] flex items-center justify-between border-b border-[#E9E9E9] md:py-3">
                        <div className="flex items-center justify-center gap-3">
                            <BiMessageDots size={30} color='#1F2937'></BiMessageDots>
                            <div className='space-y-1'>
                                <p className='font-geist text-[15px] font-normal md:text-base lg:text-lg'>Text</p>
                                <span className='font-geist text-sm font-normal text-[#64748B] mb-2 md:text-base'>Asked for career advice</span>
                            </div>
                        </div>
                        <label className='font-geist text-xs font-normal text-[#64748B] md:text-sm'>Jan 28, 2026</label>
                    </div>
                    <div className="w-full py-[14px] flex items-center justify-between border-b border-[#E9E9E9] md:py-3">
                        <div className="flex items-center justify-center gap-3">
                            <FiPhoneCall size={30} color='#1F2937'></FiPhoneCall>
                            <div className='space-y-1'>
                                <p className='font-geist text-[15px] font-normal md:text-base lg:text-lg'>Meetup</p>
                                <span className='font-geist text-sm font-normal text-[#64748B] mb-2 md:text-base'>Industry conference meetup</span>
                            </div>
                        </div>
                        <label className='font-geist text-xs font-normal text-[#64748B] md:text-sm'>March 13, 2026</label>
                    </div>
                    <div className="w-full py-[14px] flex items-center justify-between md:py-3">
                        <div className="flex items-center justify-center gap-3">
                            <LuVideo size={30} color='#1F2937'></LuVideo>
                            <div className='space-y-1'>
                                <p className='font-geist text-[15px] font-normal md:text-base lg:text-lg'>Meetup</p>
                                <span className='font-geist text-sm font-normal text-[#64748B] mb-2 md:text-base'>Business conference</span>
                            </div>
                        </div>
                        <label className='font-geist text-xs font-normal text-[#64748B] md:text-sm'>April 10, 2026</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailRecentCard;