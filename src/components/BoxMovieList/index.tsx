import { Box } from 'components/Box'
import { ShortMovie } from 'components/ShortMovie'
import React, { FC } from 'react'
import { MovieDetail } from '../../services/movie'
import styles from './styles.module.scss'
import cx from 'classnames'
import { Pagination } from 'components/Pagination'
import { usePagination } from 'hooks'

type Props = {
  data: MovieDetail[]
  title?: string
  className?: string
  isLoading?: boolean
  onClose?: () => void
}

export const BoxMovieList: FC<Props> = ({data, title, className, isLoading, onClose}) => {
  const {paginationData, count, onChange} = usePagination(data, 10)

  return (
    <Box 
      onClose={onClose} 
      isLoading={isLoading} 
      title={title} 
      className={cx(styles.wrapper, className)} 
      bodyClassName={styles.box_body}
    >
      {paginationData.map(item => (
        <ShortMovie
          id={item.id} 
          key={item.id} 
          image={item.image} 
          rank={item.rank} 
          title={item.title} 
          year={item.year}
         />
      ))}
      <Pagination className={styles.pagination} pageCount={count} onChange={onChange}/>
    </Box>
  )
}