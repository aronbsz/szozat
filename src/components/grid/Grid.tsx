import { Word } from '../../lib/statuses'
import { MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guesses: Word[]
  currentGuess: Word
  size: { width: number; height: number }
  isRevealing?: boolean
}

export const Grid = ({ guesses, currentGuess, size, isRevealing }: Props) => {
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : []

  return (
    <div
      className="grid grid-rows-8 gap-1 mx-auto p-2"
      style={{ width: `${size.width}px`, height: `${size.height}px` }}
    >
      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === i}
        />
      ))}
      {guesses.length < MAX_CHALLENGES && <CurrentRow guess={currentGuess} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}
