import React, { ChangeEventHandler, FC } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

type Props = {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  className?: string
}

export const Checkbox: FC<Props> = ({
  checked,
  onChange,
  className,
}) => {
  return (
    <label className={cx(styles.container, className)}>
      <input onChange={onChange} type={'checkbox'} checked={checked}/>
      <span className={styles.checkmark}></span>
    </label>
  )
}