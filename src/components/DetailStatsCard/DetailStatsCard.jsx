const DetailStatsCard = ({ value, text }) => {

    return (
        <>
            <div className="w-full bg-white border border-[#E9E9E9] rounded-sm py-5 px-4 text-center space-y-2 md:py-6 md:px-4 lg:py-8 md:rounded-lg">
                <h3 className="font-geist text-2xl font-semibold text-[#244D3F] md:text-[26px] lg:text-3xl">{value}</h3>
                <label className="font-geist text-[15px] font-normal text-[#64748B] md:text-base lg:text-lg">{text}</label>
            </div>
        </>
    );
};

export default DetailStatsCard;