import { getMovie } from "@/api";
import { queryClient } from "@/components/Providers/QueryProvider";
import { DELAY, QUERY_KEY } from "@/constants";
import { useRef } from "react";

export const useMovieItem = (movieId: string) => {
  const imageErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/logo.png";
  };

  const modifier = useRef(0);

  const handleMouseOver = () => {
    modifier.current = setTimeout(() => {
      console.log("fetching");
      queryClient.fetchQuery({ queryKey: [QUERY_KEY.MOVIE, movieId], queryFn: () => getMovie(movieId) });
    }, DELAY.FETCH);
  };

  const handelMouseOut = () => {
    clearTimeout(modifier.current);
  };

  return { imageErrorHandler, handleMouseOver, handelMouseOut };
};
