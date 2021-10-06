import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const Input: FC<IInput> = memo((props): JSX.Element => {
  return (
    <div className={`w-full col-start relative ${props.className}`}>
      {props.label && (
        <label className="mb-2 text-gray-600">{props.label}</label>
      )}
      <input
        data-testid="input-core"
        required={props.required}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={classNames(
          ' w-full h-12  rounded focus:outline-none focus:shadow  text-gray-900 bg-white placeholder-gray-500 px-4',
          props.error
            ? 'border-2 border-red-400 shadow'
            : 'border border-gray-300 focus:ring-2 focus:ring-blue-400 '
        )}
      />
      {props.error && (
        <span className="text-sm text-red-500">{props.error}</span>
      )}
    </div>
  )
})
