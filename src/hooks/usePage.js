// lib
const React = require('react')

const PAGE_INFO_DEFAULT = {
  pageNo: 1,
  pageSize: 10,
  total: 0,
}

const usePage = () => {
  const [list, setList] = React.useState([])

  const [loading, setLoading] = React.useState(false)

  const [pageInfo, setPageInfo] = React.useState(PAGE_INFO_DEFAULT)

  return [list, pageInfo, loading, setList, setPageInfo, setLoading]
}

module.exports = usePage
