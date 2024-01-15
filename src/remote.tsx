import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryProvider, RouterProvider, ThemeProvier } from "./components/Providers";

const Remote = () => {
  return (
    <QueryProvider>
      <ThemeProvier>
        <ReactQueryDevtools initialIsOpen={true} />
        <RouterProvider />
      </ThemeProvier>
    </QueryProvider>
  );
};

export default Remote;
