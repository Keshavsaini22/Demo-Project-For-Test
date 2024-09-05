import { RouteObject } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import BaseLayout from "./layouts/BaseLayout";
import SidebarLayout from "./layouts/SidebarLayout";

function Route() {
    const routes: RouteObject[] = [
        {

            path: 'auth',
            element: <BaseLayout />,
            children: [
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'signup',
                    element: <Signup />
                },
            ]
        },
        {
            path: "/",
            element: <SidebarLayout />,
            children: [
                {
                    path: '/',
                    element: <>HELLO HOME</>
                }
            ]
        }
    ];
    return routes;
}

export default Route;
