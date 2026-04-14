const Logo = ({ children }) => {

    return (
        <>
            <div className="w-auto">
                <h1 className="font-geist text-xl font-medium text-[#244D3F] md:text-2xl">{children}</h1>
            </div>
        </>
    );
};

export default Logo;