import React from 'react'
import { useForm } from './Context.jsx'

const Errors = ({
  title=false,
  headline=false,
  showFieldErrors=false,
  className='error alert border'
}) => {
  const { formState: { errors } } = useForm()
  const { root={}, ...fieldErrors } = errors
  const nRoot  = Object.keys(root).length
  const nField = Object.keys(fieldErrors).length
  const show   = nRoot || (showFieldErrors && nField)

  if (! show) {
    return null
  }
  return (
    <div className={className}>
      { Boolean(headline) &&
        <div className="headline">{headline}</div>
      }
      { Boolean(title) &&
        <h3>{title}</h3>
      }
      { Object.values(root).map(
        (error, n) =>
          <div key={n}>
            {error.message}
          </div>
      )}
      { Boolean(showFieldErrors) && nField > 0 &&
        <ul>
          { Object.entries(fieldErrors).map(
            ([name, error]) => {
              return (<li key={name}><b>{name}</b> - {error.message}</li>)
            }
          )}
        </ul>
      }
    </div>
  )
}

export default Errors