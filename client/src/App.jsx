import React from 'react';
import { Route, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Single from './pages/Single';
import Write from './pages/Write';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
])

const App = () => {
  return (
    <div className='flex justify-center'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
