import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { CommingSoon, Home, NowPlaying } from "@/pages";
import { PATH } from "@/constants";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: PATH.HOME, element: <Home /> },
            { path: PATH.COMMING_SOON, element: <CommingSoon /> },
            { path: PATH.NOW_PLAYING, element: <NowPlaying /> },
        ],
    },
]);
