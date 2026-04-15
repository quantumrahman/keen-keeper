const PageHeading = ({ children }) => {

    return (
        <>
            <div className="w-full pt-[48px] pb-4 md:pt-[64px] md:pb-[20px] lg:pt-[80px] lg:pb-[24px]">
                <h1 className="font-geist text-[32px] font-bold text-[#1F2937] md:text-[40px] lg:text-[48px]">
                    { children }
                </h1>
            </div>
        </>
    );
};

export default PageHeading;