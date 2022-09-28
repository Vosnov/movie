import { BoxMovieList } from 'components';
import { Search, SettingButton } from 'containers';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { FC, useCallback, useMemo } from 'react'
import { movieApi } from 'services';
import { MovieListName, movieListNames, movieSlice } from 'store/reducres/movie';
import styles from './styles.module.scss'

type MovieListProps = {
  name: MovieListName
}

const Top250Movies: FC<MovieListProps> = ({
  name
}) => {
  const {data, isLoading, isError} = movieApi.useGetTop250Query()

  const dispatch = useAppDispatch()

  const closeHandler = useCallback(() => {
    dispatch(movieSlice.actions.closeMovieList(name))
  }, [dispatch, name])

  return (
    <BoxMovieList 
      onClose={closeHandler}
      isLoading={isLoading || isError} 
      className={styles.box} 
      title={movieListNames[name]} 
      data={data?.items || []}
    />
  )
}

const MostPopularMovies: FC<MovieListProps> = ({
  name
}) => {
  const {data, isLoading, isError} = movieApi.useGetMostPopularQuery()

  const dispatch = useAppDispatch()

  const closeHandler = useCallback(() => {
    dispatch(movieSlice.actions.closeMovieList(name))
  }, [dispatch, name])

  return (
    <BoxMovieList 
      onClose={closeHandler}
      isLoading={isLoading || isError} 
      className={styles.box} 
      title={movieListNames[name]} 
      data={data?.items || []}
    />
  )
}

const MostPopularTv: FC<MovieListProps> = ({
  name
}) => {
  const {data, isLoading, isError} = movieApi.useGetMostPopularTVQuery()

  const dispatch = useAppDispatch()

  const closeHandler = useCallback(() => {
    dispatch(movieSlice.actions.closeMovieList(name))
  }, [dispatch, name])

  return (
    <BoxMovieList 
      onClose={closeHandler}
      isLoading={isLoading || isError} 
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
      <div className={styles.search_wrapper}>
        <Search />
      </div>
      <SettingButton movieNames={startMovies.map(elem => elem.name)}/>

      {movies.map(movie => (
        <React.Fragment key={movie.name}>
          {movie.element}
        </React.Fragment>
      ))}
    </div>
  );
}