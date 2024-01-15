import React from "react";
import ReactDOM from "react-dom/client";

import { QueryProvider, RouterProvider, ThemeProvier } from "./components/Providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <ThemeProvier>
        <ReactQueryDevtools initialIsOpen={true} />
        <RouterProvider />
      </ThemeProvier>
    </QueryProvider>
  </React.StrictMode>
);
