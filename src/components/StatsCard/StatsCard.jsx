const StatsCard = ({ count, text }) => {

    return (
        <>
            <div className="w-full bg-white border border-[#E9E9E9] rounded-lg flex items-center justify-center flex-col gap-2 py-5 lg:px-3 lg:py-4">
                <span className="font-geist text-2xl font-semibold text-[#244D3F] md:text-[28px] lg:text-[32px]">{count}</span>
                <label className="font-geist text-[15px] font-normal text-[#64748B] md:text-base lg:text-lg">{text}</label>
            </div>
        </>
    );
};

export default StatsCard;