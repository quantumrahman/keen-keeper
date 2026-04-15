import { useState, useEffect } from 'react'
import { FriendContext } from './FriendContext.jsx'

const FriendsProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('/api/friend.json')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);

    return (
        <>
            <FriendContext.Provider value={friends}>
                { children }
            </FriendContext.Provider>
        </>
    );
};

export default FriendsProvider;