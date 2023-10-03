import { Suspense } from "react";
import { MovieList, Skeleton } from "./MovieList";
import { Outlet } from "react-router-dom";

export const Movies = () => {
  return (
    <>
      <Outlet />
      <Suspense fallback={<Skeleton />}>
        <MovieList />
      </Suspense>
    </>
  );
};
