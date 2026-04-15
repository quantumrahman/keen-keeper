import { useNavigate } from 'react-router';

import Tag from '../Tag/Tag.jsx'
import Badge from '../Badge/Badge.jsx'

const FirendCard = ({ friend }) => {
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/firend-details/${id}`);
    };

    return (
        <>
            <div onClick={() => handleNavigate(friend?.id)} className="w-full flex items-center flex-col gap-3 bg-white p-4 border border-[#E9E9E9] rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-sm md:p-6">
                <div className="w-[60px] h-[60px] bg-[#E9E9E9] rounded-full overflow-hidden md:w-20 md:h-20">
                    <img src={friend?.picture} alt="user profile picture" />
                </div>
                <div className="w-full flex items-center justify-center flex-col gap-2">
                    <div className="w-full text-center">
                        <h2 className="font-geist text-lg font-semibold text-[#1F2937] md:text-xl">{friend?.name}</h2>
                        <span className="font-geist text-[11px] font-normal text-[#64748B] md:text-xs">{friend?.days_since_contact}d ago</span>
                    </div>
                    <div className="w-full flex items-center justify-center flex-col gap-2">
                        <div className='w-full flex items-center justify-center gap-2 flex-wrap'>
                            {friend?.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
                        </div>
                        <Badge variant={`${friend?.status}`}>{friend?.status}</Badge>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FirendCard;