import { range } from '../../utils/range'
import { WordInput } from '../word-input'

type Props = {
  sideLength: number
  grid: number
}

export const Matrix: React.FC<Props> = ({ sideLength, grid }) => {
  return (
    <div style={{ width: `${sideLength}px`, height: `${sideLength}px`, padding: '20px' }}>
      <div
        className={`grid gap-0`}
        style={{
          gridTemplateColumns: `repeat(${grid}, minmax(0, 1fr))`,
        }}
      >
        {range(1, grid).map((rowNumber) =>
          range(1, grid).map((columnNumber) => (
            <WordInput
              className={`col-start-${columnNumber} col-span-1 border border-gray-700 border-solid text-center`}
              key={`r-${rowNumber}_c-${columnNumber}`}
              size={sideLength / grid}
            />
          )),
        )}
      </div>
    </div>
  )
}
