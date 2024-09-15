
// Other misc utilities
export const imgUrl = uri =>
  `${import.meta.env.BASE_URL}/${uri}`.replace(/\/+/, '/')

export const idSafe = text =>
  text.replace(/\W+/, '_').toLowerCase()

//export const uriSafe = text =>

