import { PATH, QUERY_KEY } from "@/constants";

// const pathToKeyMap = {
//   [PATH.MOVIES.HOME]: QUERY_KEY.POPULER,
//   [PATH.MOVIES.COMING_SOON]: QUERY_KEY.COMING_SOON,
//   [PATH.MOVIES.NOW_PLAYING]: QUERY_KEY.NOW_PLAYING,
// };

// export const getQueryKeyFromPath = (pathName?: string) => (pathName && pathName in pathToKeyMap ? pathToKeyMap[pathName as keyof typeof pathToKeyMap] || QUERY_KEY.POPULER : QUERY_KEY.POPULER);

export const getQueryKeyFromPath = (pathValue?: string) => {
  const matchedKey = Object.keys(PATH.MOVIES).find((key) => PATH.MOVIES[key as keyof typeof PATH.MOVIES] === pathValue);

  return matchedKey ? QUERY_KEY[matchedKey as keyof typeof QUERY_KEY] || QUERY_KEY.POPULER : QUERY_KEY.POPULER;
};
