import React, { FC } from 'react'
import styles from './styles.module.scss'

type Props = {
  data?: string
  label: string
}

export const MovieDetailRow: FC<Props> = ({
  data,
  label
}) => {
  return (
    <>
      {data && <p className={styles.label}><span>{label}</span>: {data}</p>}
    </>
  )
}