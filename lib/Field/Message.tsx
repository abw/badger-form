import { useField } from './Context'

export const Message = () => {
  const { help, message, messageClass } = useField()
  const text = message ?? help
  return text
    ? <div className={messageClass}>{text}</div>
    : null
}

export default Message
