import { useEffect, useState } from 'react'

export const useHighlight = (isNew, value): { highLight: boolean } => {
  const [highLight, setHighLight] = useState<boolean>(false)

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
