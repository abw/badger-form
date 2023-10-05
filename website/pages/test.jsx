import React from 'react'
import { useForm } from 'react-hook-form'
import Icon from '../ui/Icon.jsx'

const Test = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="width-20rem">
      <div className={`field ${errors.name ? 'invalid' : ''}`}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="wide"
          {...register('name', { required: 'You must enter your name', maxLength: 30 })}
        />
        { errors.name &&
          <div className="help">{errors.name?.message}</div>
        }
        { errors.name && errors.name.type === 'required' && <div>This is required</div>}
        { errors.name && errors.name.type === 'maxLength' && <div>Max length exceeded</div> }
      </div>
      <div className={`field ${errors.animal ? 'invalid' : ''}`}>
        <label htmlFor="animal">Animal</label>
        <select {...register('animal')} className="wide">
          <option value="badger">Badger</option>
          <option value="ferret">Ferret</option>
          <option value="ferret">Stoat</option>
        </select>
      </div>
      <div className="field">
        <label className="checkbox wide">
          <input type="checkbox" {...register('term')}/>
          I agree to the terms and conditions
        </label>
      </div>
      <div className="text-right">
        <button className="blue" type="submit">
          Submit
          <Icon name="check" className="on-right"/>
        </button>
      </div>
    </form>
  )
}


export default Test