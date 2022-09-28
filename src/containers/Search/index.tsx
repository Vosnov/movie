import React, { ChangeEventHandler, FC, useCallback, useEffect, useState } from 'react'
import styles from './styles.module.scss'
// import data from './data.json'
import { Image, Loader } from 'components'
import { Link } from 'react-router-dom'
import { RoutePath } from 'App'
import { movieApi } from 'services'
import { useDebounce } from 'hooks'

type Props = {
  
}

export const Search: FC<Props> = () => {
  const [movieName, setMovieName] = useState('')
  const debounceMovieName = useDebounce(movieName, 500)

  const [search, {isLoading, data, isError}] = movieApi.useSearchMutation()

  useEffect(() => {
    if (debounceMovieName.length > 0) {
      search(debounceMovieName)
    }
  }, [debounceMovieName, search])

  const changeHandler = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setMovieName(e.target.value)
  }, [])

  return (
    <div className={styles.wrapper}>
      <input 
        value={movieName}
        onChange={changeHandler} 
        placeholder='MOVIE NAME' 
        className={styles.input} 
        type="text" 
      />

      {debounceMovieName.length > 0 && (
        <div className={styles.search_dropdown}>
          {!isLoading && data?.results && data.results.slice(0, 6).map(movie => (
            <Link 
              key={movie.id} 
              to={{pathname: RoutePath.detail, search: `?id=${movie.id}`}} 
              className={styles.search_movie}
            >
              <Image className={styles.image} src={movie.image}/>
              <p className={styles.title}>{movie.title}</p>
            </Link>
          ))}
          {isLoading && (
            <div className={styles.loader}>
              <Loader />
            </div>
          )}
          {isError && (
            <p>ERROR</p>
          )}
        </div>
      )}
    </div>
  )
}