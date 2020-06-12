// lib
const React = require('react')

const getInitAttribute = () => ({
  bodyClientWidth: document.body.clientWidth, // 网页可见区域宽
  bodyClientHeight: document.body.clientHeight, // 网页可见区域高
  bodyOffsetWidth: document.body.offsetWidth, // 网页可见区域宽(包括边线的宽)
  bodyOffsetHeight: document.body.offsetHeight, // 网页可见区域高(包括边线的宽)
})

const useResize = () => {
  if (typeof window !== 'object' || typeof document !== 'object') return []

  const [attribute, setAttribute] = React.useState(getInitAttribute())

  React.useEffect(() => {
    window.onresize = () => {
      setAttribute(getInitAttribute())
    }

    return () => {
      window.onresize = null
    }
  }, [])

  return attribute
}

module.exports = useResize
