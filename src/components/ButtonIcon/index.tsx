import { Image } from 'components/Image'
import React, { FC } from 'react'

type Props = {
  src: string
  alt?: string
  onClick?: () => void
  className?: string
  imgClassName?: string
}

export const ButtonIcon: FC<Props> = ({src, alt, onClick, className, imgClassName}) => {
  return (
    <button className={className} onClick={onClick}>
      <Image className={imgClassName} src={src} alt={alt}/>
    </button>
  )
}