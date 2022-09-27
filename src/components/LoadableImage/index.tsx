import { Image, Loader, ImageProps } from 'components'
import React, { FC, useCallback, useState } from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'

export const LoadableImage: FC<ImageProps> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const loadHandler = useCallback(() => {
    setIsLoaded(true)
  }, [])


  return (
    <>
      {!isLoaded && (<div className={cx(props.className, styles.load_wrapper)}><Loader /></div>)}
      <Image style={{display: !isLoaded ? 'none' : undefined}} onLoad={loadHandler} {...props}/>
    </>
  )
}