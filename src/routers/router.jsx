import { createBrowserRouter } from 'react-router';

import RootLayout from '../layouts/RootLayout.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import DetailsPage from '../pages/DetailsPage/DetailsPage.jsx'
import TimelinePage from '../pages/TimelinePage/TimelinePage.jsx'
import StatsPage from '../pages/StatsPage/StatsPage.jsx'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: '/firend-details/:details',
                loader: async ({ params }) => {
                    const response = await fetch('/api/friend.json');
                    const friends = await response.json();

                    const friend = friends.find(
                        (friend) => friend?.id === Number(params.details)
                    );

                    if (!friend) {
                        throw new Response("Not Found", { status: 404 });
                    };

                    return friend;
                }, 
                Component: DetailsPage,
                errorElement: <NotFoundPage />
            },
            {
                path: '/timeline',
                Component: TimelinePage
            },
            {
                path: '/stats',
                Component: StatsPage
            },
            {
                path: '*',
                Component: NotFoundPage
            },
        ]
    },
    {
        path: '*',
        Component: NotFoundPage
    },
]);

export default router;