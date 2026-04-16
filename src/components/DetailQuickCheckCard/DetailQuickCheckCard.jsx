import { FiPhoneCall } from "react-icons/fi";
import { BiMessageDots } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";

import useTimeline from '../../hooks/useTimeline.jsx'
import useToast from '../../hooks/useToast.jsx';
import dateFormatter from '../../utils/dateFormatter.js'

const DetailQuickCheckCard = ({ friend }) => {
    const { timeline, setTimeline } = useTimeline();
        const { triggerToast } = useToast();
    
    const handleCall = (name) => {
        const newTimeline = {
            name: name,
            status: 'call',
            date: dateFormatter(new Date())
        };

        setTimeline([...timeline, newTimeline]);
    };

    const handleText = (name) => {
        const newTimeline = {
            name: name,
            status: 'message',
            date: dateFormatter(new Date())
        };

        setTimeline([...timeline, newTimeline]);
    };

    const handleVideo = (name) => {
        const newTimeline = {
            name: name,
            status: 'video',
            date: dateFormatter(new Date())
        };

        setTimeline([...timeline, newTimeline]);
    };

    const handleToast = (type, name) => {
        triggerToast(`${type} With ${name}`, 'success', 3000);
    };

    return (
        <>
            <div className="w-full bg-white border border-[#E9E9E9] p-4 rounded-sm md:rounded-lg md:p-6">
                <h3 className="font-geist text-lg font-medium text-[#244D3F] md:text-xl">Quick Check-In</h3>
                <div className="w-full grid grid-cols-1 gap-[14px] mt-[14px] md:gap-4 lg:grid-cols-3 lg:mt-4">
                    <button onClick={() => {
                            handleCall(friend?.name), 
                            handleToast('Call', friend?.name)
                        }} 
                        className="w-full py-[14px] bg-[#F8FAFC] border border-[#E9E9E9] rounded-sm flex items-center justify-center gap-2 flex-col text-[#1F2937] transition-colors duration-200 ease-linear hover:bg-[#244D3F] hover:border-[#244D3F] hover:text-white group cursor-pointer md:rounded-lg">
                        <FiPhoneCall size={22}></FiPhoneCall>
                        <span className="font-geist text-[15px] font-normal md:text-base lg:text-lg">Call</span>
                    </button>
                    <button onClick={() => {
                            handleText(friend?.name), 
                            handleToast('Message', friend?.name)
                        }} 
                        className="w-full py-[14px] bg-[#F8FAFC] border border-[#E9E9E9] rounded-sm flex items-center justify-center gap-2 flex-col text-[#1F2937] transition-colors duration-200 ease-linear hover:bg-[#244D3F] hover:border-[#244D3F] hover:text-white group cursor-pointer md:rounded-lg">
                        <BiMessageDots size={22}></BiMessageDots>
                        <span className="font-geist text-[15px] font-normal md:text-base lg:text-lg">Message</span>
                    </button>
                    <button onClick={() => {
                        handleVideo(friend?.name), 
                        handleToast('Video', friend?.name)
                        }} 
                        className="w-full py-[14px] bg-[#F8FAFC] border border-[#E9E9E9] rounded-sm flex items-center justify-center gap-2 flex-col text-[#1F2937] transition-colors duration-200 ease-linear hover:bg-[#244D3F] hover:border-[#244D3F] hover:text-white group cursor-pointer md:rounded-lg">
                        <LuVideo size={22}></LuVideo>
                        <span className="font-geist text-[15px] font-normal md:text-base lg:text-lg">Video</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default DetailQuickCheckCard;