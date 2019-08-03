// lib
import { useState } from 'react'

const useSearch = (initParams = {}, initRefresh = false) => {
  const [refresh, setRefresh] = useState(initRefresh)

  const [params, setParams] = useState(initParams)

  return [refresh, params, setRefresh, setParams]
}

export default useSearch
