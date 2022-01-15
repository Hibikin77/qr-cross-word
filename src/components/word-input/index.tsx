import { useState } from 'react'

type Props = {
  className: string
}

export const WordInput: React.FC<Props> = ({ className }) => {
  const [isCorrect, setCorrect] = useState(false)

  return (
    <input
      type='text'
      className={className}
      width='40px'
      height='40px'
      style={{ backgroundColor: isCorrect ? `black` : 'white' }}
      onChange={(e) => {
        if (e.target.value === '1') {
          setCorrect(true)
        }
      }}
    />
  )
}
