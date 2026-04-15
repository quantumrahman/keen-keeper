import { useContext } from "react";
import { FriendContext } from '../context/FriendContext/FriendContext.jsx'

const useFriends = () => {
    const context = useContext(FriendContext);

    if (!context) {
        throw new Error('useFriends must be used within FriendsProvider');
    };

    return context;
};

export default useFriends;