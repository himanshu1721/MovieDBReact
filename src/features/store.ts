import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import popularSlice from "./content/popularSlice";
import trendingSlice from "./content/trendingSlice";
import detailSlice from "./detail/detailSlice";
import topRatedSlice from "./topRated/topRatedSlice";

const rootReducer = combineReducers({
  popular: popularSlice,
  trending: trendingSlice,
  topRated: topRatedSlice,
  detail: detailSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
  // other options e.g middleware, go here
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
