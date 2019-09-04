// lib
const React = require('react')

const useModal = (initItem, initVisible = false) => {
  const [visible, setVisible] = React.useState(initVisible)

  const [current, setCurrent] = React.useState(initItem)

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

module.exports = useModal
