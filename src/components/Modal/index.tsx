import { Box } from 'components/Box'
import React, { FC } from 'react'
import RModal from 'react-modal'
import styles from './styles.module.scss'

type Props = {
  isOpen: boolean
  onClose?: () => void
  children?: React.ReactNode
  boxClassName?: string
  title?: string
}

const elem = document.getElementById('root') as HTMLElement

export const Modal: FC<Props> = ({
  isOpen,
  onClose,
  children,
  boxClassName,
  title,
}) => {
  return (
    <RModal 
      appElement={elem}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      className={styles.modal} 
      isOpen={isOpen}
    >
      <Box title={title} bodyClassName={boxClassName} onClose={onClose}>{children}</Box>
    </RModal>
  )
}