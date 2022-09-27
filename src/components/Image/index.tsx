import React, { FC, memo } from 'react'
import { getRandomColor } from 'utils'

export type ImageProps = {
  src: string
  colorBorder?: boolean
  alt?: string
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export const Image: FC<ImageProps> = memo(({
  src: image,
  colorBorder,
  alt,
  ...props
}) => {
  return (
    <img 
      {...props}
      style={{border: `4px solid ${colorBorder ? getRandomColor() : 'transparent'}`, ...props.style}} 
      src={image} 
      alt={alt || 'img'}
    />
  )
})