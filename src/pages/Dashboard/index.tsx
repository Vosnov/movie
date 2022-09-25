import { BoxMovieList } from 'components';
import React from 'react'
import { movieApi } from 'services';
import styles from './styles.module.scss'

export const Dashboard = () => {
  const {data: top250Data} = movieApi.useGetTop250Query()
  const {data: mostPopularData} = movieApi.useGetMostPopularQuery() 
  const {data: mostPopularTVs} = movieApi.useGetMostPopularTVQuery()

  return (
    <div className={styles.wrapper}>
      <BoxMovieList className={styles.box} title='Top 250 Movies' data={top250Data?.items.slice(0, 10) || []}/>
      <BoxMovieList className={styles.box} title='Most Popular Movies' data={mostPopularData?.items.slice(0, 10) || []}/>
      <BoxMovieList className={styles.box} title='Most Popular TVs' data={mostPopularTVs?.items.slice(0, 10) || []}/>
    </div>
  );
}