import { WhiteCloseIcon, WhitePlayIcon } from 'assets/images'
import React, { FC } from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'

type Props = {
  children?: React.ReactNode
  className?: string
  bodyClassName?: string
  title?: string
}

export const Box: FC<Props> = ({children, className, bodyClassName, title}) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.head}>
        <div className={styles.circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.title_wrapper}>
          <p className={styles.title}>{title}</p>
          <img src={WhitePlayIcon} width={16} alt="" />
        </div>
        <img src={WhiteCloseIcon} width={16} alt="" />
      </div>

      <div className={bodyClassName}>
        {children}
      </div>
    </div>
  )
}