import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'

import router from './routers/router.js'
import FriendProvider from './context/FriendContext/FriendsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router}></RouterProvider>
    </FriendProvider>
  </StrictMode>
);