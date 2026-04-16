export const getStats = (timeline) => {
    const stats = {
        call: 0,
        message: 0,
        video: 0 
    };

    for (const item of timeline) {
        if (item.status === 'call') stats.call++;
        if (item.status === 'message') stats.message++;
        if (item.status === 'video') stats.video++; 
    };

    return stats;
};