import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { route } from './Routes/Routes';
import { BookProvider } from './context/BookContext';
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={route} />
      <ToastContainer position="top-center" autoClose={2000} />
    </BookProvider>
  </StrictMode>
)
