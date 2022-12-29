import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "./services";
import { MediaType } from "./types";

const initialState: MediaType = {
  loading: false,
  haveBeenRatedBeforeByMe: false,
  error: false,
  movieDetails: { id: 0 },
  movieRatingByMe: 0,
  movieRating: 0,
  movieRatingByPeople: 0,
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.movieDetails = action.payload;
      state.haveBeenRatedBeforeByMe = false;
    });
    builder.addCase(fetchMovie.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

const { reducer } = detailSlice;
export default reducer;
export { fetchMovie };
