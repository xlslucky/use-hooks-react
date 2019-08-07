// lib
const React = require('react')

const useModal = () => {
  const [visible, setVisible] = React.useState(false)

  const [current, setCurrent] = React.useState()

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
