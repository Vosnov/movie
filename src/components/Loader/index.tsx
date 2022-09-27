import React, { FC } from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'

type Props = {
  className?: string
}

export const Loader: FC<Props> = ({className}) => {
  return (
    <div className={cx(styles.lbs_roller, className)}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}