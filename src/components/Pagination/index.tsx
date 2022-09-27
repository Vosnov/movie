import React, { FC, useCallback } from 'react'
import ReactPaginate, {ReactPaginateProps} from 'react-paginate'
import styles from './styles.module.scss'
import cx from 'classnames'

type Props = {
  pageCount: number
  className?: string
  onChange?: (page: number) => void
}

export const Pagination: FC<Props> = ({
  pageCount,
  className,
  onChange
}) => {
  const changeHandler = useCallback<Required<ReactPaginateProps>['onPageChange']>((e) => {
    if (onChange) onChange(e.selected)
  }, [onChange])

  return (
    <ReactPaginate 
      activeClassName={styles.active}
      onPageChange={changeHandler}
      nextLabel="NEXT" 
      previousLabel="PREV" 
      className={cx(styles.wrapper, className)} 
      pageCount={pageCount}
    />
  )
}