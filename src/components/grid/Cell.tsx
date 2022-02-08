import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`

  const containerClasses = classnames(
    'grow relative inline-flex justify-center border-solid border-2 font-bold rounded dark:text-white before:content-[""] before:block before:pb-[100%]',
    {
      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
        !status,
      'border-black dark:border-slate-100': value && !status,
      'absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700':
        status === 'absent',
      'correct shadowed bg-green-500 text-white border-green-500':
        status === 'correct',
      'present shadowed bg-yellow-500 text-white border-yellow-500':
        status === 'present',
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  const classes = classnames(
    'absolute w-[100%] h-[100%] flex items-center justify-center mx-0.5 text-lg font-bold dark:text-white',
    {
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={containerClasses} style={{ animationDelay }}>
      <div className={classes} style={{ animationDelay }}>
        <div className="letter-container" style={{ animationDelay }}>
          {value}
        </div>
      </div>
    </div>
  )
}
