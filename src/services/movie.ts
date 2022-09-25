import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = 'k_txlfsago'

export type MovieDetail = {
  id: string
  title: string
  image: string
  rank: string
  year: string
}

export type MovieData = {
  items: MovieDetail[]
  ErrorMessage: string
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://imdb-api.com/en/API'}),
  endpoints: (build) => ({
    getTop250: build.query<MovieData, void>({
      query: () => ({url: `/Top250Movies/${token}`})
    }),
    getMostPopular: build.query<MovieData, void>({
      query: () => ({url: `/MostPopularMovies/${token}`})
    }),
    getMostPopularTV: build.query<MovieData, void>({
      query: () => ({url: `/MostPopularTVs/${token}`})
    }),
  })
})