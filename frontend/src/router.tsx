import { RouteObject } from "react-router-dom";
import useNetworkStatus from "./hooks/useNetworkStatus";
import BaseLayout from "./layouts/BaseLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Maintaince from "./pages/Error/Maintaince";
import Error from "./pages/Error";

function Route(isLogined: true | false, role: string) {
    const isOnline = useNetworkStatus();

    const routes: RouteObject[] = [
        {
            path: 'auth',
            element: isLogined ? <>Logged in</> : <BaseLayout />,
            children: [
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'signup',
                    element: <Signup />
                }
            ]
        },
        {
            path: '*',
            element: <Error />,
        },
    ]
    if (!isOnline) {
        return [
            {
                path: '*',
                element: <Maintaince />
            }
        ];
    }
    return routes
}

export default Route