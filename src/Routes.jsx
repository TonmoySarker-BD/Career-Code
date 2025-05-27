import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/SignIn",
                Component : SignIn
            },
            {
                path: "/Register",
                Component: Register
            }
        ]
    },
]);