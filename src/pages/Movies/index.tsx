import { Suspense } from "react";
import { MovieList, SKMovieList } from "./MovieList";
import { Outlet } from "react-router-dom";
import { Aside } from "@/components";

export const Movies = () => {
  return (
    <>
      <Suspense fallback={<SKMovieList />}>
        <MovieList />
      </Suspense>
      <Outlet />
      <Aside />
    </>
  );
};
