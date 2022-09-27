import { RoutePath } from 'App'
import { CalendarIcon, RankIcon } from 'assets/images'
import { Image, LoadableImage } from 'components'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

type Props = {
  image: string
  title: string
  year: string
  rank: string
  id: string
}

export const ShortMovie: FC<Props> = ({
  image,
  title,
  year,
  rank,
  id
}) => {
  return (
    <Link to={{
      pathname: RoutePath.detail,
      search: `?id=${id}`
    }}>
      <div className={styles.wrapper}>
        <LoadableImage className={styles.image} src={image} alt="movieLogo" colorBorder/>
        <p className={styles.title}>{title}</p>
        <div className={styles.info_wrapper}>
          <div className={styles.info}>
            <Image className={styles.info_icon} width={16} src={CalendarIcon} alt="icon" />
            <p>{year}</p>
          </div>
          <div className={styles.info}>
            <Image className={styles.info_icon} width={16} src={RankIcon} alt="icon"/>
            <p>{rank}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}