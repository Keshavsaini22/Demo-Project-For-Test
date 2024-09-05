import { Navigate, RouteObject } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import BaseLayout from "./layouts/BaseLayout";
import SidebarLayout from "./layouts/SidebarLayout";
import UserSettings from "./pages/UserSettings";

function Route(isLogined: true | false, role: string) {
    const routes: RouteObject[] = [
        {

            path: 'auth',
            element: isLogined ? <Navigate to={'/'} /> : <BaseLayout />,
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
            element: isLogined ? <SidebarLayout /> : <Navigate to='/auth/login' />,
            children: [
                {
                    path: '/',
                    element: <>HELLO HOME</>
                },
                {
                    path: 'setting',
                    element: <UserSettings />,
                },
            ]
        }
    ];
    return routes;
}

export default Route;
