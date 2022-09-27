import { Box, DragElement, Image, MovieDetailRow } from 'components';
import React, { useCallback, useMemo,} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { movieApi } from 'services';
import styles from './styles.module.scss'
import { IMDBIcon, PlayIcon } from 'assets/images';
import cx from 'classnames'

export const Detail = () => {
  const [search] = useSearchParams()
  const id = useMemo(() => (search.get('id')), [search])
  const navigate = useNavigate()

  const {data, isLoading} = movieApi.useGetTitleQuery(id)

  const back = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <div className={styles.wrapper}>
      <DragElement>
        <Box 
          isLoading={isLoading}
          onClose={back} 
          className={styles.box} 
          bodyClassName={styles.box_body} 
          title={data?.fullTitle || ''}
        >
          {data && (
            <>
              <div className={styles.left_section}>
                <Image className={styles.logo} alt='movieLogo' src={data?.image} colorBorder/>
                <div className={styles.stats}>
                  <div className={styles.rating}>
                    <Image className={styles.icon} src={IMDBIcon} alt='icon' />
                    <p>{data.imDbRating}</p>
                  </div>
                  <div className={styles.rating}>
                    <Image className={styles.icon} src={PlayIcon} alt='icon' />
                    <p>{data.metacriticRating}</p>
                  </div>
                </div>
              </div>
              <div className={styles.right_section}>
                <MovieDetailRow label='plot' data={data.plot}/>
                <MovieDetailRow label='date' data={data.releaseDate}/>
                <MovieDetailRow label='time' data={data.runtimeStr}/>
                <MovieDetailRow label='genres' data={data.genres}/>
                <MovieDetailRow label='directors' data={data.directors}/>
                <MovieDetailRow label='companies' data={data.companies}/>
                <MovieDetailRow label='rating' data={data.contentRating}/>
                {data.actorList.length > 0 && (
                  <>
                    <span className={cx(styles.bold, styles.row)}>ACTORS: </span>
                    <div className={styles.actor_list}>
                      {data.actorList.slice(0, 20).map(actor => (
                        <div key={actor.id} className={styles.actor}>
                          <Image src={actor.image} colorBorder/>
                          <p>{actor.name}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </Box>
      </DragElement>
    </div>
  );
}