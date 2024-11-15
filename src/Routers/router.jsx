import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Prouducts/Products";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },

        ]
    },
    {
        path: '/login',
        element: <LogIn/>
    },
    {
        path: '/signup',
        element: <Register/>
    },
]);