const BASE_URL = "https://api.themoviedb.org/3/movie";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
};

export const getMovies = (type: string | undefined = "popular", next: number | undefined = 1): Promise<IAPIResponse> =>
  fetch(`${BASE_URL}/${type}?language=ko&page=${next}`, options).then((r) => r.json());

export const getPopular = (next: number): Promise<IAPIResponse> => fetch(`${BASE_URL}/popular?language=ko&page=${next}`, options).then((r) => r.json());

export const getNowPlaying = (next: number): Promise<IAPIResponse> => fetch(`${BASE_URL}/now_playing?language=ko&page=${next}`, options).then((r) => r.json());

export const getComingSoon = (next: number): Promise<IAPIResponse> => fetch(`${BASE_URL}/upcoming?language=ko&page=${next}`, options).then((r) => r.json());

export const getMovie = (id: string) => fetch(`${BASE_URL}/movie?id=${id}`).then((r) => r.json());

export const makeImagePath = (image: string) => `https://image.tmdb.org/t/p/w500${image}`;

export const makeBgPath = (image: string) => `https://image.tmdb.org/t/p/original${image}`;

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetail extends IMovie {
  belongs_to_collection: BelongsToCollection;
  budget: number;
  homepage: string;
  genres: Genre[];
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IAPIResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
