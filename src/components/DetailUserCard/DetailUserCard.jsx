import Tag from '../Tag/Tag.jsx'
import Badge from '../Badge/Badge.jsx'

const DetailUserCard = ({ friend }) => {

    return (
        <>
            <div className='w-full flex items-center flex-col gap-3 bg-white p-4 border border-[#E9E9E9] rounded-lg md:p-6'>
                <div className="w-[60px] h-[60px] bg-[#E9E9E9] rounded-full overflow-hidden md:w-20 md:h-20">
                    <img src={friend?.picture} alt="user profile picture" />
                </div>
                <div className="w-full flex items-center justify-center flex-col gap-2">
                    <div className="w-full text-center">
                        <h2 className="font-geist text-lg font-semibold text-[#1F2937] md:text-xl">{friend?.name}</h2>
                    </div>
                    <div className="w-full flex items-center justify-center flex-col gap-2">
                        <Badge variant={`${friend?.status}`}>{friend?.status}</Badge>
                        {/* <Badge variant={`overdue`}>Overdue</Badge> */}
                        <div className='w-full flex items-center justify-center gap-2 flex-wrap'>
                            {friend?.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
                        </div>
                    </div>
                </div>
                <div className='w-full text-center'>
                    <h2 className='font-geist text-sm font-medium text-[#64748B] italic mb-2 md:text-base'>"{friend?.bio}"</h2>
                    <span className='font-geist text-xs font-normal text-[#64748B] md:text-sm'>Preferred: {friend?.email}</span>
                </div>
            </div>
        </>
    );
};

export default DetailUserCard;