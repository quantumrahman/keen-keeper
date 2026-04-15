const SectionHeading = ({ children }) => {

    return (
        <>
            <div className="w-full mb-4">
                <h1 className="font-geist text-xl font-semibold text-[#1F2937] md:text-[22px] lg:text-2xl">
                    { children }
                </h1>
            </div>
        </>
    );
};

export default SectionHeading;