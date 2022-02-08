import { Word } from '../../lib/statuses'
import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'

type Props = {
  guess: Word
}

export const CurrentRow = ({ guess }: Props) => {
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - guess.length))

  return (
    <div className={`grid grid-cols-${MAX_WORD_LENGTH} gap-1`}>
      {guess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
