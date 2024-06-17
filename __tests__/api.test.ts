import { getCharacters, getCharacter, getCharacterComics } from '@/api'
import * as formatters from '@/utils/formatters'

const baseUrl: string = process.env.NEXT_PUBLIC_ENDPOINT ?? ''
const publicKey: string = process.env.NEXT_PUBLIC_KEY ?? ''

// Mocking fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { results: [] } })
  })
) as jest.Mock

// Mocking formatCharactersResponse and formatComicsResponse functions
jest.mock(
  '@/utils/formatters',
  () =>
    ({
      formatCharactersResponse: jest.fn(),
      formatComicsResponse: jest.fn()
    } as jest.Mocked<typeof formatters>)
)

describe('getCharacters', () => {
  test('calls fetch with correct URL and parameters', async () => {
    await getCharacters('Iron Man', { otherParam: 'value' })

    expect(fetch).toHaveBeenCalledWith(
      `${baseUrl}characters?apikey=${publicKey}&limit=50&nameStartsWith=Iron+Man&otherParam=value`
    )
  })

  test('calls formatCharactersResponse with response data', async () => {
    await getCharacters(undefined, {})

    expect(formatters.formatCharactersResponse).toHaveBeenCalled()
  })
})

describe('getCharacter', () => {
  test('calls fetch with correct URL and parameters', async () => {
    await getCharacter(123, { otherParam: 'value' })

    expect(fetch).toHaveBeenCalledWith(
      `${baseUrl}characters/123?apikey=${publicKey}&otherParam=value`
    )
  })

  test('calls formatCharactersResponse with response data', async () => {
    await getCharacter(undefined, {})

    expect(formatters.formatCharactersResponse).toHaveBeenCalled()
  })
})

describe('getCharacterComics', () => {
  test('calls fetch with correct URL and parameters', async () => {
    await getCharacterComics(123, { otherParam: 'value' })

    expect(fetch).toHaveBeenCalledWith(
      `${baseUrl}characters/123/comics?apikey=${publicKey}&limit=20&otherParam=value`
    )
  })

  test('calls formatComicsResponse with response data', async () => {
    await getCharacterComics(undefined, {})

    expect(formatters.formatComicsResponse).toHaveBeenCalled()
  })
})
