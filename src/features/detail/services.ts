import { createAsyncThunk } from '@reduxjs/toolkit';
import ActionTypeConstants from '../../constants/ActionTypeConstants';
import { fetchMovieApi } from './Api';
import { FetchMovieProps } from './types';

export const fetchMovie = createAsyncThunk(
  ActionTypeConstants.fetchMovie,
  async ({movieID }: FetchMovieProps) => {
    const movie = await fetchMovieApi({movieID: movieID });
    return movie.data;
  },
);
