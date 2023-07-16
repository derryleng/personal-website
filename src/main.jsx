import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import BlogPage from './routes/BlogPage.jsx';
import ErrorPage from "./routes/ErrorPage.jsx";
import HomePage from './routes/HomePage.jsx';
import './styles/tailwind.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "blog/",
        element: <BlogPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
