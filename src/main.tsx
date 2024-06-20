import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageLayout from './components/layout/pageLayout.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <App />
      </PageLayout>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
