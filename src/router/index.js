import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import("@/pages/home"))
const Detail = React.lazy(() => import("@/pages/detail"))

const Entire = React.lazy(() => import("@/pages/entire"))

const routes = [
  {
    path: '/',
    element: <Navigate to="home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  },
]

export default routes
