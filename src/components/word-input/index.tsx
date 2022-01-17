import { useState } from 'react'

type Props = {
  className: string
  size: number
}

export const WordInput: React.FC<Props> = ({ className, size }) => {
  const [isCorrect, setCorrect] = useState(false)

  return (
    <input
      type='text'
      className={className}
      style={{
        backgroundColor: isCorrect ? `black` : 'white',
        width: `${size}px`,
        height: `${size}px`,
      }}
      onChange={(e) => {
        if (e.target.value === '1') {
          setCorrect(true)
        } else {
          setCorrect(false)
        }
      }}
    />
  )
}
