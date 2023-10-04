import { createBrowserRouter } from "react-router-dom";

import App from "@/App";

import { MovieDetail, Movies } from "@/pages";
import { PATH } from "@/constants";

export const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
    children: [
      {
        path: PATH.DYNAMIC_MOVIS,
        element: <Movies />,
        children: [
          {
            path: PATH.DETAIL + "/:id",
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]);
