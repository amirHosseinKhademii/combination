import { useHighlight } from 'hooks/use-highlight'
import { FC } from 'react'
import { classNames } from 'utils'

export const CardImage: FC<ICardImage> = ({ src, loading, isNew }) => {
  const { highLight } = useHighlight(isNew, src)

  if (loading)
    return <div className="w-64 h-64 rounded-full animate-pulse bg-gray-300" />
  return (
    <img
      src={src}
      alt="image"
      className={classNames(
        'w-64 h-64 object-contain object-center rounded-full ',
        highLight && ' border-[8px] border-blue-300 shadow-lg '
      )}
    />
  )
}
