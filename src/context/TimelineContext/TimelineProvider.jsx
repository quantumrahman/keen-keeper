import { useState } from 'react'
import { TimelineContext } from './TimelineContext.jsx'

const TimelineProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([])

    const value = {
        timeline,
        setTimeline
    };

    return (
        <>
            <TimelineContext.Provider value={value}>
                { children }
            </TimelineContext.Provider>
        </>
    );
};

export default TimelineProvider;