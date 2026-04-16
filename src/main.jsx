import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'

import router from './routers/router.js'
import FriendProvider from './context/FriendContext/FriendsProvider.jsx'
import TimelineProvider from './context/TimelineContext/TimelineProvider.jsx'
import ToastProvider from './context/ToastContext/ToastProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <TimelineProvider>
        <FriendProvider>
          <RouterProvider router={router}></RouterProvider>
        </FriendProvider>
      </TimelineProvider>
    </ToastProvider>
  </StrictMode>
);