const PageHeading = ({ children }) => {

    return (
        <>
            <div className="w-full mb-4 md:mb-[20px] lg:mb-[24px]">
                <h1 className="font-geist text-[32px] font-bold text-[#1F2937] md:text-[40px] lg:text-[48px]">
                    { children }
                </h1>
            </div>
        </>
    );
};

export default PageHeading;