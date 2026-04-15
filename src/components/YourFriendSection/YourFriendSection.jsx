import { Suspense } from 'react'
import { fetchFriend } from '../../service/fetchFriend.js'

import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import FriendSection from '../FriendSection/FriendSection.jsx'

const YourFriendSection = () => {
    const friendPromise = fetchFriend();

    return (
        <>
            <SectionHeading>Your Friends</SectionHeading>
            <Suspense fallback={<p>friend loading...</p>}>
                <FriendSection friendPromise={friendPromise}></FriendSection>
            </Suspense>
        </>
    );
};

export default YourFriendSection;