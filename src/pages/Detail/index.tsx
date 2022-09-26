import { Box } from 'components';
import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom';
import { movieApi, MovieDetailData } from 'services';
// import styles from './styles.module.scss'
import data from './data.json'


const typedData = (data as MovieDetailData)

export const Detail = () => {
  const [search] = useSearchParams()
  const id = useMemo(() => (search.get('id')), [search])

  // const {data} = movieApi.useGetTitleQuery(id)

  console.log(data)

  return (
    <div>
      <Box title={typedData.fullTitle}>
        <div>
          <img src={typedData.image} alt="movieLogo" />
          <div>{typedData.imDbRating}</div>
          <div>{typedData.metacriticRating}</div>
        </div>
        <div>

        </div>
      </Box>
    </div>
  );
}