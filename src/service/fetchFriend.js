export const fetchFriend = async () => {
    const res = await fetch('/api/friend.json');

    if (!res.ok) {
        throw new Error('Failed to fetch friends');
    };

    return res.json();
};