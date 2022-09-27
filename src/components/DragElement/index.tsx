import React, { FC, MouseEventHandler, useCallback, useMemo, useRef, useState } from 'react'

type Position = {
  x: number
  y: number
}

type Props = {
  children: React.ReactNode
}

export const DragElement: FC<Props> = ({children}) => {
  const [enter, setEnter] = useState(false)
  const [grab, setGrab] = useState(false)
  const [startPosition, setStartPosition] = useState<Position>()
  const ref = useRef<HTMLDivElement>(null)

  const onEnter = useCallback(() => {
    setEnter(true)
  }, [])

  const onLeave = useCallback(() => {
    setEnter(false)
  }, [])

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

  const cursor = useMemo(() => {
    if (enter) return 'grab'
    else if (grab) return 'grabbing'

    return 'default'
  }, [enter, grab])

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
      ref={ref}
      onMouseUp={up}
      onMouseDown={down}
      onMouseMove={moveHandler}
      style={{cursor, position: startPosition !== undefined ? 'absolute' : undefined, backgroundColor: 'red'}}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}  
    >
      {children}
    </div>
  )
}