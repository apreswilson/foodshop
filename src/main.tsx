import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageLayout from './components/layout/pageLayout.tsx';
import Login from './components/pages/login/login.tsx';
import Join from './components/pages/join/join.tsx';
import Shop from './components/pages/shop/shop.tsx';
import Cart from './components/pages/cart/cart.tsx';
import Checkout from './components/pages/checkout/checkout.tsx';
import Save from './components/pages/save/save.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <App />
      </PageLayout>
    )
  },
  {
    path: "/shop",
    element: (
      <PageLayout>
        <Shop />
      </PageLayout>
    )
  },
  {
    path: "/save",
    element: (
      <PageLayout>
        <Save />
      </PageLayout>
    )
  },
  {
    path: "/cart",
    element: (
      <PageLayout>
        <Cart />
      </PageLayout>
    )
  },
  {
    path: "/checkout",
    element: (
      <PageLayout>
        <Checkout />
      </PageLayout>
    )
  },
  {
    path: "/login",
    element: (
      <PageLayout>
        <Login />
      </PageLayout>
    )
  },
  {
    path: "/signup",
    element: (
      <PageLayout >
        <Join />
      </PageLayout>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
