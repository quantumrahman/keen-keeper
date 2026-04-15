const Badge = ({ children, variant }) => {

    const styles = {
        "almost due": "bg-[#EFAD44]",
        "overdue": "bg-[#EF4444]",
        "on-track": "bg-[#244D3F]"
    };

    return (
        <>
            <div className={`${styles[variant]} py-1 px-2 rounded-full flex items-center justify-center md:px-2`}>
                <span className="font-geist text-[11px] font-medium text-white capitalize md:text-xs">
                    { children }
                </span>
            </div>
        </>
    );
};

export default Badge;