import { useCallback, useState } from "react"

export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return {
    isOpen,
    setIsOpen,
    onToggle
  }
}