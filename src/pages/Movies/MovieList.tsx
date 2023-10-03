import { GridContainer, MovieItem, SKMovieItem } from "./components";

import { useInfinityMovies } from "./hooks";

export const MovieList = () => {
  const { data, isFetchingNextPage, bottomItemRef } = useInfinityMovies();

  return (
    <>
      <GridContainer>
        {data?.pages.map((page) =>
          page.results.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
            />
          ))
        )}

        {isFetchingNextPage ? (
          <>
            {Array.from({ length: 20 }).map((_, i) => (
              <SKMovieItem key={i} />
            ))}
          </>
        ) : (
          <div ref={bottomItemRef} />
        )}
      </GridContainer>
    </>
  );
};

export const Skeleton = () => {
  return (
    <GridContainer>
      {Array.from({ length: 10 }).map((_, i) => (
        <SKMovieItem key={i} />
      ))}
    </GridContainer>
  );
};
