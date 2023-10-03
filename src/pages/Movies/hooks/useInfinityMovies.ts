import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { useIntersectionObserver } from "@/hooks";
import { getMovies } from "@/api";
import { getQueryKeyFromPath } from "@/utils/getQueryKeyFromPath";

export const useInfinityMovies = () => {
  const { pathName } = useParams();

  const NextPagefetcher = ({ pageParam = 1 }) => getMovies(pathName, pageParam);

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["MOVIES", getQueryKeyFromPath(pathName)],
    queryFn: NextPagefetcher,
    getNextPageParam: (lastpage) => lastpage.page + 1,
  });

  const { bottomItemRef } = useIntersectionObserver(() => fetchNextPage());

  return { bottomItemRef, data, isFetchingNextPage };
};
