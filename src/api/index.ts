const BASE_URL = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTcyMjQ3ZjRlZGMyZTM0MTYxNDU1NzE1YjhjNWFhNSIsInN1YiI6IjYxZTU3MjYwY2FlNjMyMDA0MTQ1OWE1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yW8o1FDyjkG6HVlSwFOMLNLU1Pk3eYg4MlNr8IwuLxk`,
  },
};

const fetcher = async (url: string) => {
  const res = await fetch(`${BASE_URL}${url}`, options);

  const data = await res.json();

  if (res.status >= 400) throw { status: res.status, data };

  return data;
};

export const getMovies = (type: string | undefined = "popular", next: number | undefined = 1): Promise<IAPIResponse> => fetcher(`movie/${type}?language=ko&page=${next}`);

export const getMovie = (id: string): Promise<IMovieDetail> => fetcher(`movie/${id}?language=ko`);

export const searchMovie = (query: string) => fetcher(`search/movie?query=${query}&include_adult=false&language=ko&page=1`);

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
