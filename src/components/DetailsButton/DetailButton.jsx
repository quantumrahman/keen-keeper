import { RiNotificationSnoozeLine, RiArchiveLine, RiDeleteBinLine  } from "react-icons/ri";

const DetailButton = ({ buttonType = 'default', text = 'Default Text', iconType }) => {

    const styles = {
        'primary': 'bg-white text-[#1F2937] border-[#E9E9E9] hover:bg-[#244D3F] hover:border-[#E9E9E9] hover:text-white',
        'secondary': 'bg-white text-[#EF4444] border-[#E9E9E9] hover:bg-[#EF4444] hover:border-[#EF4444] hover:text-white'
    };

    const icons = {
        'snooze': <RiNotificationSnoozeLine size={16}></RiNotificationSnoozeLine>,
        'archive': <RiArchiveLine size={16}></RiArchiveLine>,
        'delete': <RiDeleteBinLine size={16}></RiDeleteBinLine>
    };

    return (
        <>
            <div className={`w-full py-[10px] ${styles[buttonType]} flex items-center justify-center gap-2 border rounded-sm transition-colors duration-200 ease-linear cursor-pointer md:py-3 lg:py-4`}>
                {icons[iconType]}
                <span className="font-geist text-sm font-medium md:text-[15px] lg:text-base">{text}</span>
            </div>
        </>
    );
};

export default DetailButton;