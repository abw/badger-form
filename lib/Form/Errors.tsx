import FormError from './Error.js'
import { useForm } from './Context.js'
import { hasValue, isFunction } from '@abw/badger-utils'
import { ErrorsTitleFn, FormErrorsProps } from './types.js'

export const Errors = ({
  title,
  prompt,
  fieldErrors=false,
  className='error alert border'
}: FormErrorsProps) => {
  const {
    error,
    errors,
    errorsTitle,
    errorsPrompt,
    Error=FormError,
  } = useForm()
  const hasError = hasValue(error)
  const n = (fieldErrors ? errors.length : 0) + (hasError ? 1 : 0)
  const show = n !== 0

  if (! show) {
    return null
  }

  title ??= errorsTitle
  prompt ??= errorsPrompt

  return (
    <div className={className}>
      { Boolean(title) &&
        <div className="headline">
          { isFunction<ErrorsTitleFn>(title)
            ? title(n)
            : title
          }
        </div>
      }
      <div>
        { hasError &&
          <h4><Error error={error}/></h4>
        }
        { fieldErrors && errors.length !== 0 &&
          <>
            { Boolean(prompt) &&
              <p className="wide">
                {
                  isFunction<ErrorsTitleFn>(prompt)
                    ? prompt(errors.length)
                    : prompt
                }
              </p>
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