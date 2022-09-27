import { BoxMovieList } from 'components';
import React from 'react'
import { movieApi } from 'services';
import styles from './styles.module.scss'
import data from './top250.json'

export const Dashboard = () => {
  // const {data: top250Data, isLoading: top250Loading} = movieApi.useGetTop250Query()
  // const {data: mostPopularData, isLoading: mostPopularLoading} = movieApi.useGetMostPopularQuery() 
  // const {data: mostPopularTVs, isLoading: mostPopularTvLoading} = movieApi.useGetMostPopularTVQuery()

  return (
    <div className={styles.wrapper}>
      <BoxMovieList 
        isLoading={false} 
        className={styles.box} 
        title='Top 250 Movies' 
        data={data?.items || []}
      />
      <BoxMovieList 
        isLoading={false} 
        className={styles.box} 
        title='Most Popular Movies' 
        data={data?.items || []}
      />
      <BoxMovieList 
        isLoading={false} 
        className={styles.box} 
        title='Most Popular TVs' 
        data={data?.items || []}
      />
    </div>
  );
}