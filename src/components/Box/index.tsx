import { WhiteCloseIcon, WhitePlayIcon } from 'assets/images'
import React, { FC } from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'
import { Image, ButtonIcon } from 'components'

type Props = {
  children?: React.ReactNode
  className?: string
  bodyClassName?: string
  title?: string
  onClose?: () => void
}

export const Box: FC<Props> = React.memo(({children, className, bodyClassName, title, onClose}) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.shadow}></div>
      <div className={styles.head}>
        <div className={styles.circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.title_wrapper}>
          <p className={styles.title}>{title}</p>
          <Image src={WhitePlayIcon} className={styles.icon} alt="icon" />
        </div>
        <ButtonIcon onClick={onClose} imgClassName={styles.icon} alt='icon' src={WhiteCloseIcon} />
      </div>

      <div className={bodyClassName}>
        {children}
      </div>
    </div>
  )
})