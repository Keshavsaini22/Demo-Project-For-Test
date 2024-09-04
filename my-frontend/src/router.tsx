import { RouteObject } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

function Route() {
    const routes: RouteObject[] = [
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/",
            element: <Signup />
        }
    ];
    return routes;
}

export default Route;
