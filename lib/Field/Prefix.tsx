import { useField } from './Context'
import { classes } from '../Utils'

export const Prefix = () => {
  const { prefix, prefixClass } = useField()
  return (
    <div className={classes('prefix', prefixClass)}>
      {prefix}
    </div>
  )
}

export default Prefix
