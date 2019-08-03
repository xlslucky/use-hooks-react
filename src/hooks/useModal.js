// lib
import { useState } from 'react'

const useModal = () => {
  const [visible, setVisible] = useState(false)

  const [current, setCurrent] = useState()

  const openModal = item => {
    setCurrent(item)
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(false)
    setCurrent()
  }

  return [visible, current, openModal, closeModal]
}

export default useModal
