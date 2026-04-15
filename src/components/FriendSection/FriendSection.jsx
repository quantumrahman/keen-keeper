import { use } from 'react'
import FriendCard from '../FriendCard/FriendCard.jsx'

const FriendSection = ({ friendPromise }) => {
    const friends = use(friendPromise);
    
    return (
        <>
            <div className='w-full grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4'>
                {
                    friends.map((friend) => <FriendCard key={friend?.id} friend={friend}></FriendCard>)
                }
            </div>
        </>
    );
};

export default FriendSection;