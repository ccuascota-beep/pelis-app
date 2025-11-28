import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";

const router = createBrowserRouter([
    {
        path: "/peliculas",

    },
    {
        path: `/peliculas/:id`,
    }
]);

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    //<App />
    <RouterProvider router={router} />,
//</StrictMode>,
)
