import { useContext } from 'react'
import { TimelineContext } from '../context/TimelineContext/TimelineContext.jsx'

const useTimeline = () => {
    const context = useContext(TimelineContext);

    if (!context) {
        throw new Error('useFriends must be used within FriendsProvider');
    };

    return context;
};

export default useTimeline;