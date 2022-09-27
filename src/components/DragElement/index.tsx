import React, { FC, MouseEventHandler, useCallback, useRef, useState } from 'react'
import styles from './styles.module.scss'

type Position = {
  x: number
  y: number
}

type Props = {
  children: React.ReactNode
}

export const DragElement: FC<Props> = ({children}) => {
  const [grab, setGrab] = useState(false)
  const [startPosition, setStartPosition] = useState<Position>()
  const ref = useRef<HTMLDivElement>(null)

  const down = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
    setGrab(true)
    setStartPosition({
      x: e.clientX - e.currentTarget.getBoundingClientRect().left,
      y: e.clientY - e.currentTarget.getBoundingClientRect().top
    })
  }, [])

  const up = useCallback(() => {
    setGrab(false)
  }, [])

  const moveHandler = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
    if (grab && ref.current) {
      e.preventDefault()
      const left = e.screenX - (startPosition?.x || 0)
      const top = e.screenY - 100 - (startPosition?.y || 0)

      ref.current.style.top = top + "px"
      ref.current.style.left = left + "px"
    }
  }, [grab, ref, startPosition])

  return (
    <div
      className={styles.grabbable}
      ref={ref}
      onMouseUp={up}
      onMouseDown={down}
      onMouseMove={moveHandler}
      style={{position: startPosition !== undefined ? 'absolute' : undefined, backgroundColor: 'red'}}
    >
      {children}
    </div>
  )
}