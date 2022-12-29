import MovieProps, { TVProps } from '../../types/Movie';

export interface FetchMovieProps {
  movieID: number;
}

export interface MediaType {
  loading: boolean;
  haveBeenRatedBeforeByMe: boolean;
  error: boolean;
  movieDetails: MovieProps | TVProps | null;
  movieRatingByMe: number;
}
