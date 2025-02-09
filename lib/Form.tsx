import FormLayout from './Form/Layout'
import { Provider }  from './Form/Context'
import { FormComponentProps } from './Form/types'

export const Form = ({
  children,
  Layout=FormLayout,
  ...props
}: FormComponentProps) => {
  return (
    <Provider {...props}>
      <Layout>
        {children}
      </Layout>
    </Provider>
  )
}

export default Form
