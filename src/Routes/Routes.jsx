import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch('../data/news.json')
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;