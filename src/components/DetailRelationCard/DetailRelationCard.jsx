const DetailRelationCard = ({ days }) => {

    return (
        <>
            <div className="w-full bg-white border border-[#E9E9E9] p-4 rounded-sm md:rounded-lg md:p-6">
                <div className="w-full flex items-center justify-between">
                    <h3 className="font-geist text-lg font-medium text-[#244D3F] md:text-xl">Releationship Goal</h3>
                    <button className="bg-[#F8FAFC] py-1 px-[13.5px] cursor-pointer border border-[#E9E9E9] rounded-sm flex items-center justify-center transition-colors duration-200 ease-linear hover:bg-[#244D3F] hover:border-[#244D3F] group md:py-2 md:px-[17px]">
                        <span className="font-geist text-[13px] font-medium text-[#1F2937] group-hover:text-white md:text-sm">Edit</span>
                    </button>
                </div>
                <p className="font-geist text-[15px] font-normal text-[#64748B] mt-[14px] md:text-sm md:mt-4">Connect every <span className="font-bold text-[#1F2937]">{days} days</span></p>
            </div>
        </>
    );
};

export default DetailRelationCard;