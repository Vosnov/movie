import { RoutePath } from 'App'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export const Error: FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>An error occurred</p>
      <Link className={styles.link} to={RoutePath.dashboard}>Go to the Main Page</Link>
    </div>
  )
}