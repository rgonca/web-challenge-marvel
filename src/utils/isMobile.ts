import { headers } from 'next/headers'

export default () => {
  const userAgent = headers()?.get('User-Agent')
  if (!userAgent) {
    return false
  }

  return userAgent
    .replace(/ \(.*\)/, '')
    .split(' ')
    .some((e) => e.match(/^Mobile($|\/)/))
}
