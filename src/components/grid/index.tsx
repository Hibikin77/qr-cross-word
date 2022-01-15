import { range } from '../../utils/range'
import { WordInput } from '../word-input'

export const Matrix: React.FC = () => {
  return (
    <div className={`grid grid-cols-10 grid-rows-10 gap-0`}>
      {range(1, 10).map((rowNumber) =>
        range(1, 10).map((columnNumber) => (
          <WordInput
            className={`col-start-${columnNumber} col-span-1 border border-gray-700 border-solid text-center`}
            key={`r-${rowNumber}_c-${columnNumber}`}
          />
        )),
      )}
    </div>
  )
}
