import '@testing-library/jest-dom'

const originalError = console.error

beforeAll(() => {
  console.error = (...args) => {
    if (/Warning: `ReactDOMTestUtils.act` is deprecated/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
