import { Box } from 'components';
import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom';
import { movieApi, MovieDetailData } from 'services';
import styles from './styles.module.scss'
import data from './data.json'
import { getRandomColor } from 'utils';
import { IMDBIcon, PlayIcon, WhitePlayIcon } from 'assets/images';
import cx from 'classnames'


const typedData = ((data as unknown) as MovieDetailData)

export const Detail = () => {
  const [search] = useSearchParams()
  const id = useMemo(() => (search.get('id')), [search])

  // const {data} = movieApi.useGetTitleQuery(id)

  console.log(data)

  return (
    <div className={styles.wrapper}>
      <Box className={styles.box} bodyClassName={styles.box_body} title={typedData.fullTitle}>
        <div className={styles.left_section}>
          <img style={{borderColor: getRandomColor()}} className={styles.logo} src={typedData.image} alt="movieLogo" />
          <div className={styles.stats}>
            <div className={styles.rating}>
              <img width={16} src={IMDBIcon} alt="icon" />
              <p>{typedData.imDbRating}</p>
            </div>
            <div className={styles.rating}>
              <img width={16} src={PlayIcon} alt="icon" />
              <p>{typedData.metacriticRating}</p>
            </div>
          </div>
        </div>
        <div className={styles.right_section}>
          {data.plot && <p className={styles.row}><span className={styles.bold}>PLOT</span>: {data.plot}</p>}
          {data.releaseDate && <p className={styles.row}><span className={styles.bold}>DATE</span>: {data.releaseDate}</p>}
          {data.runtimeStr && <p className={styles.row}><span className={styles.bold}>TIME</span>: {data.runtimeStr}</p>}
          {data.genres && <p className={styles.row}><span className={styles.bold}>GENRES</span>: {data.genres}</p>}
          {data.directors && <p className={styles.row}><span className={styles.bold}>DIRECTORS</span>: {data.directors}</p>}
          {data.companies && <p className={styles.row}><span className={styles.bold}>COMPANIES</span>: {data.companies}</p>}
          {data.contentRating && <p className={styles.row}><span className={styles.bold}>RATING</span>: {data.contentRating}</p>}
          {data.actorList.length > 0 && (
            <>
              <span className={cx(styles.bold, styles.row)}>ACTORS: </span>
              <div className={styles.actor_list}>
                {data.actorList.map(actor => (
                  <div key={actor.id} className={styles.actor}>
                    <img style={{borderColor: getRandomColor()}} src={actor.image} alt="actor" />
                    <p>{actor.name}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </Box>
    </div>
  );
}