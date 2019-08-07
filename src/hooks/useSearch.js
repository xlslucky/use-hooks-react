// lib
const React = require('react')

const useSearch = (initParams = {}, initRefresh = false) => {
  const [refresh, setRefresh] = React.useState(initRefresh)

  const [params, setParams] = React.useState(initParams)

  return [refresh, params, setRefresh, setParams]
}

module.exports = useSearch