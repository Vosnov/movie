import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export enum MovieListName {
  Top250,
  MostPopularMovie,
  MostPopularTv,
}

export const movieListNames: Record<MovieListName, string> = {
  [MovieListName.Top250]: 'Top 250 Movies',
  [MovieListName.MostPopularMovie]: 'Most Popular Movies',
  [MovieListName.MostPopularTv]: 'Moist Popular TVs',
}

export type MovieState = {
  closeMoveListNames: MovieListName[]
}

const initialState: MovieState = {
  closeMoveListNames: []
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    closeMovieList: (state, action: PayloadAction<MovieListName>) => {
      state.closeMoveListNames.push(action.payload)
    },
    restoreMoveList: (state, action: PayloadAction<MovieListName>) => {
      state.closeMoveListNames = state.closeMoveListNames.filter(name => name !== action.payload)
    }
  }
})

export const movieReducer = movieSlice.reducer