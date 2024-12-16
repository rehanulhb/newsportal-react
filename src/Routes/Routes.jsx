import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";

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
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>

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