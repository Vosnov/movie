import { Box } from 'components/Box'
import { ShortMovie } from 'components/ShortMovie'
import React, { FC } from 'react'
import { Top250Detail } from '../../services/movie'
import styles from './styles.module.scss'
import cx from 'classnames'

type Props = {
  data: Top250Detail[]
  title?: string
  className?: string
}

export const BoxMovieList: FC<Props> = ({data, title, className}) => {
  return (
    <Box title={title} className={cx(styles.wrapper, className)} bodyClassName={styles.box_body}>
      {data.map(item => (
        <ShortMovie key={item.id} image={item.image} rank={item.rank} title={item.title} year={item.year}/>
      ))}
    </Box>
  )
}