import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import Layout from './ui/Layout.tsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Product from './pages/Product.tsx';
import Cancel from './pages/Cancel.tsx';
import Cart from './pages/Cart.tsx';
import Category from './pages/Category.tsx';
import Favorite from './pages/Favorite.tsx';
import NotFound from './pages/NotFound.tsx';
import Profile from './pages/Profile.tsx';
import Success from './pages/Success.tsx';
import Orders from './pages/Orders.tsx';
import Blog from './pages/Blog.tsx';

const RouterLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

const router = createBrowserRouter([{
    path: "/", 
    element: <RouterLayout />,
    children:[
      {
        path: "/", 
        element: <App />,   
      },
      {
        path: "/product", 
        element: <Product />,   
      },
      {
        path: "/product/:id", 
        element: <Product />,   
      },
      {
        path: "/cancel", 
        element: <Cancel />,   
      },
      {
        path: "/cart", 
        element: <Cart />,   
      },
      {
        path: "/category", 
        element: <Category />,   
      },
      {
        path: "/category/:id", 
        element: <Category />,   
      },
      {
        path: "/favorite", 
        element: <Favorite />,   
      },
      {
        path: "*", 
        element: <NotFound />,   
      },
      {
        path: "/profile", 
        element: <Profile />,   
      },
      {
        path: "/success", 
        element: <Success />,   
      },
      {
        path: "/orders", 
        element: <Orders />,   
      },
      {
        path: "/blog", 
        element: <Blog />,   
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
