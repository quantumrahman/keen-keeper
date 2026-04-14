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
                Component: DetailsPage
            },
            {
                path: '/timeline',
                Component: TimelinePage
            },
            {
                path: '/stats',
                Component: StatsPage
            }
        ]
    },
    {
        path: '*',
        Component: NotFoundPage
    },
]);

export default router;