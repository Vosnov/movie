import { useCallback, useEffect, useMemo, useState } from "react"

export const usePagination = <T>(data: Array<T>, limit = 10) => {
  const [paginationData, setPaginationData] = useState<T[]>([])

  useEffect(() => {
    setPaginationData(data.slice(0, limit))
  }, [data, limit])

  const onChange = useCallback((page: number) => {
    setPaginationData(data.slice(page * 10, page * 10 + 10))
  }, [data])

  const count = useMemo(() => {
    return Math.ceil(data.length / limit)
  }, [data, limit])

  return {
    paginationData,
    count,
    onChange
  }
}