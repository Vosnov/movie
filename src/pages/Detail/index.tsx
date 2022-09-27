import { Box, DragElement, Image, LoadableImage, MovieDetailRow, Pagination } from 'components';
import React, { useCallback, useMemo,} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { movieApi } from 'services';
import styles from './styles.module.scss'
import { IMDBIcon, PlayIcon } from 'assets/images';
import cx from 'classnames'
// import data from './data.json'
import { useErrorRedirect, usePagination } from 'hooks';

export const Detail = () => {
  const [search] = useSearchParams()
  const id = useMemo(() => (search.get('id')), [search])
  const navigate = useNavigate()

  const {data, isLoading, isError} = movieApi.useGetTitleQuery(id)
  useErrorRedirect(isError)

  const back = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const {count, onChange, paginationData} = usePagination(data?.actorList || [], 10)

  return (
    <div className={styles.wrapper}>
      <DragElement>
        <Box 
          isLoading={false}
          onClose={back} 
          className={styles.box} 
          bodyClassName={styles.box_body} 
          title={data?.fullTitle || ''}
        >
          {data && (
            <>
              <div className={styles.left_section}>
                <LoadableImage className={styles.logo} alt='movieLogo' src={data?.image} colorBorder/>
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
                <span className={cx(styles.bold, styles.row)}>ACTORS: </span>
                {data.actorList.length > 0 && (
                  <div className={styles.actors_wrapper}>
                    <div className={styles.actor_list}>
                      {paginationData.map(actor => (
                        <div key={actor.id} className={styles.actor}>
                          <LoadableImage className={styles.actorImage} src={actor.image} colorBorder/>
                          <p>{actor.name}</p>
                        </div>
                      ))}
                    </div>
                    <Pagination className={styles.pagination} pageCount={count} onChange={onChange}/>
                  </div>
                )}
              </div>
            </>
          )}
        </Box>
      </DragElement>
    </div>
  );
}