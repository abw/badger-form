import React from 'react'
import { useField } from './Context.js'

export const Debug = () => {
  const field = useField()
  return (
    <div className="debug">
      <h4>Field: {field.name}</h4>
      <pre>
        {JSON.stringify(field, null, 2)}
      </pre>
    </div>
  )
}

export default Debug
