import { CalendarIcon, RankIcon } from 'assets/images'
import React, { FC, useCallback } from 'react'
import styles from './styles.module.scss'

type Props = {
  image: string
  title: string
  year: string
  rank: string
}

const colors = ['#FF5C5C', '#4D7BFF', '#7FFF5B', '#FFFF50', '#FF90FF']

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const ShortMovie: FC<Props> = ({
  image,
  title,
  year,
  rank
}) => {
  const getRandomColor = useCallback(() => {
    const random = getRandomInt(0, colors.length - 1)
    return colors[random]
  }, [])

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} style={{borderColor: getRandomColor()}} src={image} alt="movieLogo" />
      <p className={styles.title}>{title}</p>
      <div className={styles.info_wrapper}>
        <div className={styles.info}>
          <img className={styles.info_icon} width={16} src={CalendarIcon} alt="icon" />
          <p>{year}</p>
        </div>
        <div className={styles.info}>
          <img className={styles.info_icon} width={16} src={RankIcon} alt="icon" />
          <p>{rank}</p>
        </div>
      </div>
    </div>
  )
}