import { useEffect, useState } from 'react'

export const useHighlight = (isNew, value) => {
  const [highLight, setHighLight] = useState(false)

  useEffect(() => {
    if (isNew) setHighLight(true)
    const timeOut = setTimeout(() => {
      setHighLight(false)
    }, 2000)
    return () => {
      clearTimeout(timeOut)
    }
  }, [value, isNew])

  return { highLight }
}
