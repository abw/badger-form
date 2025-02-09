import { useField } from './Context'
import { classes } from '../Utils'

const Suffix = () => {
  const { suffix, suffixClass } = useField()
  return (
    <div className={classes('suffix', suffixClass)}>
      {suffix}
    </div>
  )
}

export default Suffix
