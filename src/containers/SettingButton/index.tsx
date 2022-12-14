import { GearIcon } from "assets/images";
import { ButtonIcon, Modal, Checkbox } from "components";
import { useAppDispatch, useAppSelector, useModal } from "hooks";
import React, { FC, useCallback } from "react";
import { MovieListName, movieListNames, movieSlice } from "store/reducres/movie";
import styles from './styles.module.scss'
import cx from 'classnames'

type Props = {
  movieNames: MovieListName[]
}

export const SettingButton: FC<Props> = ({
  movieNames,
}) => {
  const {onToggle, isOpen} = useModal()
  const dispatch = useAppDispatch()
  const {closeMoveListNames} = useAppSelector(state => state.movie)

  const checkboxHandler = useCallback((name: MovieListName) => {
    return () => {
      if (closeMoveListNames.includes(name)) {
        dispatch(movieSlice.actions.restoreMoveList(name))
      } else {
        dispatch(movieSlice.actions.closeMovieList(name))
      }
    }
  }, [dispatch, closeMoveListNames])

  return (
    <>
      <Modal title="Settings" boxClassName={styles.box} isOpen={isOpen} onClose={onToggle}>
        {movieNames.map(name => (
          <div key={name} className={styles.checkbox_wrapper}>
            <p>CLOSED {movieListNames[name]}</p>
            <Checkbox onChange={checkboxHandler(name)} checked={closeMoveListNames.includes(name)}/>
          </div>
        ))}
      </Modal>
      <div className={cx(styles.wrapper, {[styles.center]: closeMoveListNames.length === movieNames.length})}>
        <ButtonIcon onClick={onToggle} imgClassName={styles.icon} src={GearIcon}/>
      </div>
    </>
  )
}