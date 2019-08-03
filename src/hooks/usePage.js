// lib
import { useState } from 'react'

export const PAGE_INFO_DEFAULT = {
  pageNo: 1,
  pageSize: 10,
  total: 0,
}

const usePage = () => {
  const [list, setList] = useState([])

  const [loading, setLoading] = useState(false)

  const [pageInfo, setPageInfo] = useState(PAGE_INFO_DEFAULT)

  return [list, pageInfo, loading, setList, setPageInfo, setLoading]
}

export default usePage
