const ContainerLayout = ({ children }) => {

    return (
        <>
            <div className="w-full max-w-[1110px] mx-auto px-5">
                {children}
            </div>
        </>
    );
};

export default ContainerLayout;