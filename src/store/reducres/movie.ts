import {createSlice} from '@reduxjs/toolkit'

export type Movie = {
  id: number,
  type: string,
  name: string,
  description: string
  slogan: string
  year: number,
}

export type MovieState = {
  movies: Movie[]
}

const initialState: MovieState = {
  movies: []
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    add: (state) => {
      state.movies.push({id: 1, type: '', name: '', description: '', slogan: '', year: 10})
    }
  }
})

export const movieReducer = movieSlice.reducer