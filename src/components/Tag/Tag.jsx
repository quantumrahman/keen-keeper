const Tag = ({ children }) => {

    return(
        <>
            <div className="bg-[#CBFADB] py-1 px-2 rounded-full flex items-center justify-center md:px-2">
                <span className="font-geist text-[11px] font-medium text-[#244D3F] uppercase md:text-xs">
                    { children }
                </span>
            </div>
        </>
    );
};

export default Tag;