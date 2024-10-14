import { AppLayout } from '@/layouts/AppLayout/AppLayout'
import { Home } from '@/pages/Home/Home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
])
