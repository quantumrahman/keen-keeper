import { FiPhoneCall } from "react-icons/fi";
import { BiMessageDots } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";

const TimelineCard = ({ data }) => {

    return (
        <>
            <div className="w-full bg-white border border-[#E9E9E9] rounded-sm py-4 px-4 md:py-4 md:px-4 md:rounded-lg">
                <div className="flex items-center gap-[14px] md:gap-4">
                    {
                        data?.status === 'call'
                        ? <FiPhoneCall className="text-2xl md:text-[27px]" color="#244D3F"></FiPhoneCall>
                        : data?.status === 'message'
                        ? <BiMessageDots className="text-2xl md:text-[27px]" color="#244D3F"></BiMessageDots>
                        : data?.status === 'video'
                        ? <LuVideo className="text-2xl md:text-[27px]" color="#244D3F"></LuVideo>
                        : <FiPhoneCall className="text-2xl md:text-[27px]" color="#244D3F"></FiPhoneCall>
                    }
                    <div className="space-y-0.5">
                        <h3 className="font-geist text-lg font-medium text-[#244D3F] md:text-xl"><span className="capitalize">{data?.status}</span> <span className="font-geist text-[15px] font-normal text-[#64748B] md:text-base lg:text-lg">with {data?.name}</span></h3>
                        <label className="font-geist text-sm font-medium text-[#64748B] md:text-base">{data?.date}</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimelineCard;