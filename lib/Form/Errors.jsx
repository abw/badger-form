import React from 'react'
import FormError from './Error.jsx'
import { useForm } from './Context.js'
import { maybeFunction } from '@abw/badger-utils'

const Errors = ({
  form = useForm(),
  title = form.errorsTitle,
  prompt = form.errorsPrompt,
  fieldErrors=false,
  className='error alert border'
}) => {
  const {
    error,
    errors,
    Error=FormError,
  } = form
  const hasError = Boolean(error)
  const n = (fieldErrors ? errors.length : 0) + (hasError ? 1 : 0)
  const show = n !== 0

  if (! show) {
    return null
  }

  return (
    <div className={className}>
      { Boolean(title) &&
        <div className="headline">{maybeFunction(title, n)}</div>
      }
      <div>
        { hasError && <h4><Error error={error}/></h4> }
        { fieldErrors && errors.length !== 0 &&
          <>
            { Boolean(prompt) &&
              <p className="wide">{maybeFunction(prompt, errors.length)}</p>
            }
            <ul>
              { errors.map(
                (error, n) =>
                  <li key={n}>
                    <Error error={error}/>
                  </li>
              )}
            </ul>
          </>
        }
      </div>
    </div>
  )
}

export default Errors