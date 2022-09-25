import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = 'k_txlfsago'

type Top250Detail = {
  Id: string
  Title: string
  Image: string
}

type Top250Data = {
  items: Top250Detail[]
  ErrorMessage: string
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://imdb-api.com/en/API'}),
  endpoints: (build) => ({
    getTop250: build.query<Top250Data, void>({
      query: () => ({url: `/Top250Movies/${token}`})
    })
  })
})