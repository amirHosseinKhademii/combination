import { FC, memo } from 'react'
import { LoaidngBounce } from 'components/loading/bounce'
import { classNames } from 'utils/classes'

export const Button: FC<IButton> = memo(
  ({
    className,
    children,
    onClick,
    disabled,
    type,
    icon,
    loading,
    onMouseEnter,
    onMouseLeave,
    id,
  }): JSX.Element => {
    return (
      <button
        data-testid={id}
        type={type}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled || loading}
        className={classNames(
          'flex items-center justify-center transition rounded focus:outline-none  disabled:opacity-50 ',
          className,
          !icon && 'shadow',
          loading && 'cursor-wait '
        )}
      >
        {loading ? <LoaidngBounce /> : children}
      </button>
    )
  }
)
