import { useField } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { useField } from '@abw/badger-form'

const ColorButtonInput = () => {
  const { value, onChange } = useField()
  const colors = ['red', 'green', 'blue']
  return (
    <div>
      <div className="flex gap-2">
        { colors.map(
          color =>
            <button
              key={color}
              type="button"
              className={`solid ${color}`}
              onClick={() => onChange(color)}
            >
              {color}
            </button>
        )}
      </div>
      { value
        ? <p>You have selected {value}</p>
        : <p>Select a color</p>
      }
    </div>
  )
}

export default ColorButtonInput