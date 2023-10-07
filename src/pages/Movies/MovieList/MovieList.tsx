import { MovieItem, SKMovieItem } from "../MovieItem";

import * as S from "./MovieList.styled";

import { useInfinityMovies } from "./useInfinityMovies";

export const MovieList = () => {
  const { data, isFetchingNextPage, bottomItemRef } = useInfinityMovies();

  return (
    <>
      <S.GridContainer>
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
      </S.GridContainer>
    </>
  );
};

export const Skeleton = () => {
  return (
    <S.GridContainer>
      {Array.from({ length: 10 }).map((_, i) => (
        <SKMovieItem key={i} />
      ))}
    </S.GridContainer>
  );
};
