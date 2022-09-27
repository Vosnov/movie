import React, { FC, memo } from 'react'
import { getRandomColor } from 'utils'

type Props = {
  src: string
  colorBorder?: boolean
  alt?: string
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export const Image: FC<Props> = memo(({
  src: image,
  colorBorder,
  alt,
  ...props
}) => {
  return (
    <img 
      style={{border: `4px solid ${colorBorder ? getRandomColor() : 'transparent'}`, ...props.style}} 
      src={image} 
      alt={alt || 'img'}
      {...props}
    />
  )
})