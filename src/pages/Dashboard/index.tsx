import { UseQueryHookResult } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { BoxMovieList } from 'components';
import { SettingButton } from 'containers';
import { useAppDispatch, useAppSelector, useErrorRedirect } from 'hooks';
import React, { FC, useCallback, useMemo } from 'react'
import { movieApi, MovieData } from 'services';
import { MovieListName, movieListNames, movieSlice } from 'store/reducres/movie';
import styles from './styles.module.scss'
import data from './top250.json'

type MovieListProps = {
  name: MovieListName
}

const Top250Movies: FC<MovieListProps> = ({
  name
}) => {
  // const {data: top250Data, isLoading: top250Loading} = movieApi.useGetTop250Query()
  useErrorRedirect(false)

  const dispatch = useAppDispatch()

  const closeHandler = useCallback(() => {
    dispatch(movieSlice.actions.closeMovieList(name))
  }, [dispatch, name])

  return (
    <BoxMovieList 
      onClose={closeHandler}
      isLoading={false} 
      className={styles.box} 
      title={movieListNames[name]} 
      data={data?.items || []}
    />
  )
}

const MostPopularMovies: FC<MovieListProps> = ({
  name
}) => {
  // const {data: top250Data, isLoading: top250Loading} = movieApi.useGetTop250Query()
  useErrorRedirect(false)

  const dispatch = useAppDispatch()

  const closeHandler = useCallback(() => {
    dispatch(movieSlice.actions.closeMovieList(name))
  }, [dispatch, name])

  return (
    <BoxMovieList 
      onClose={closeHandler}
      isLoading={false} 
      className={styles.box} 
      title={movieListNames[name]} 
      data={data?.items || []}
    />
  )
}

const MostPopularTv: FC<MovieListProps> = ({
  name
}) => {
  // const {data: top250Data, isLoading: top250Loading} = movieApi.useGetTop250Query()
  useErrorRedirect(false)

  const dispatch = useAppDispatch()

  const closeHandler = useCallback(() => {
    dispatch(movieSlice.actions.closeMovieList(name))
  }, [dispatch, name])

  return (
    <BoxMovieList 
      onClose={closeHandler}
      isLoading={false} 
      className={styles.box} 
      title={movieListNames[name]}
      data={data?.items || []}
    />
  )
}

export type MovieList = {
  name: MovieListName
  element: JSX.Element
}

const startMovies: MovieList[] = [
  {name: MovieListName.Top250, element: <Top250Movies name={MovieListName.Top250}/>},
  {name: MovieListName.MostPopularMovie, element: <MostPopularMovies name={MovieListName.MostPopularMovie}/>},
  {name: MovieListName.MostPopularTv, element: <MostPopularTv name={MovieListName.MostPopularTv}/>},
]

export const Dashboard = () => {
  const {closeMoveListNames} = useAppSelector(state => state.movie)

  const movies = useMemo(() => {
    return startMovies.filter(movie => !closeMoveListNames.includes(movie.name))
  }, [closeMoveListNames])

  return (
    <div className={styles.wrapper}>
      <SettingButton movieNames={startMovies.map(elem => elem.name)}/>

      {movies.map(movie => (
        <React.Fragment key={movie.name}>
          {movie.element}
        </React.Fragment>
      ))}
    </div>
  );
}