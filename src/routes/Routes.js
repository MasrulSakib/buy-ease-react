import Cart from "../components/sections/cart/Cart";
import Home from "../components/sections/home/Home";
import Main from "../layout/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            }

        ]
    },

])