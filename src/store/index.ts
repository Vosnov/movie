import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieApi } from "services";
import { movieReducer } from "./reducres/movie";

export const rootReducer = combineReducers({
  movie: movieReducer,
  [movieApi.reducerPath]: movieApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch