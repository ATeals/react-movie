import { RouterProvider as Provider } from "react-router";
import { router } from "@/Router";

export const RouterProvider = () => {
    return <Provider router={router} />;
};
