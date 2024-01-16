import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryProvider, ThemeProvier } from "./components/Providers";
import { Route, Routes } from "react-router-dom";
import { PATH } from "./constants";
import App from "./App";
import { MovieDetail, Movies } from "./pages";

const Remote = () => {
  return (
    <QueryProvider>
      <ThemeProvier>
        <ReactQueryDevtools initialIsOpen={true} />
        <Routes>
          <Route path={`${PATH.ROOT}/*`} element={<App />}>
            <Route path={`${PATH.DYNAMIC_MOVIS}/*`} element={<Movies />}>
              <Route path={`${PATH.DETAIL}/:id`} element={<MovieDetail />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvier>
    </QueryProvider>
  );
};

export default Remote;
