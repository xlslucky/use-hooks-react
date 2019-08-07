// lib
const React = require('react')

const getInitAttribute = () => ({
  bodyClientWidth: document.body.clientWidth, // 网页可见区域宽
  bodyClientHeight: document.body.clientHeight, // 网页可见区域高
  bodyOffsetWidth: document.body.offsetWidth, // 网页可见区域宽(包括边线的宽)
  bodyOffsetHeight: document.body.offsetHeight, // 网页可见区域高(包括边线的宽)
  bodyScrollWidth: document.body.scrollWidth, // 网页正文全文宽
  bodyScrollHeight: document.body.scrollHeight, // 网页正文全文高
  bodyScrollTop: document.body.scrollTop, // 网页被卷去的高
  bodyScrollLeft: document.body.scrollLeft, // 网页被卷去的左
  windowScreenTop: window.screenTop, // 网页正文部分上
  windowScreenLeft: window.screenLeft, // 网页正文部分左
  screenHeight: window.screen.height, // 屏幕分辨率的高
  screenWidth: window.screen.width, // 屏幕分辨率的宽
  screenAvailHeight: window.screen.availHeight, // 屏幕可用工作区高度
  screenAvailWidth: window.screen.availWidth, // 屏幕可用工作区宽度
})

const useResize = () => {
  if (typeof window !== 'object' || typeof document !== 'object') return []

  const [attribute, setAttribute] = React.useState(getInitAttribute())

  React.useEffect(() => {
    window.onresize = () => {
      setAttribute({
        bodyClientWidth: document.body.clientWidth,
        bodyClientHeight: document.body.clientHeight,
        bodyOffsetWidth: document.body.offsetWidth,
        bodyOffsetHeight: document.body.offsetHeight,
        bodyScrollWidth: document.body.scrollWidth,
        bodyScrollHeight: document.body.scrollHeight,
        bodyScrollTop: document.body.scrollTop,
        bodyScrollLeft: document.body.scrollLeft,
        windowScreenTop: window.screenTop,
        windowScreenLeft: window.screenLeft,
        screenHeight: window.screen.height,
        screenWidth: window.screen.width,
        screenAvailHeight: window.screen.availHeight,
        screenAvailWidth: window.screen.availWidth,
      })
    }

    return () => {
      window.onresize = null
    }
  }, [])

  return [attribute]
}

module.exports = useResize
