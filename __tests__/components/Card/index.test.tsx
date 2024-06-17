import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '@/components/Card'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, priority, fill, ...props }) => {
    return <img src={src.src} {...props} />
  }
}))

describe('Card component', () => {
  test('renders card with correct image and name', () => {
    const image = 'image-url'
    const name = 'Test Name'
    const { getByAltText, getByText } = render(
      <Card
        image={image}
        name={name}
        fullHeart={false}
        onClickHeart={function (
          event: React.MouseEvent<HTMLElement, MouseEvent>
        ): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
    expect(getByAltText(`Character image ${name}`)).toBeInTheDocument()
    expect(getByText(name)).toBeInTheDocument()
  })

  test('renders empty heart button', () => {
    const { getByTestId } = render(
      <Card
        image="image-url"
        name="Test Name"
        fullHeart={false}
        onClickHeart={function (
          event: React.MouseEvent<HTMLElement, MouseEvent>
        ): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
    const heartButton = getByTestId('heart-button')
    expect(heartButton).toHaveAttribute('src', '/img.jpg')
  })

  test('renders full heart button when fullHeart is true', () => {
    const { getByTestId } = render(
      <Card
        image="image-url"
        name="Test Name"
        fullHeart={true}
        onClickHeart={function (
          event: React.MouseEvent<HTMLElement, MouseEvent>
        ): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
    const heartButton = getByTestId('heart-button')
    expect(heartButton).toHaveAttribute('src', '/img.jpg')
  })

  test('calls onClickHeart when clicking on heart button', () => {
    const onClickHeart = jest.fn()
    const { getByTestId } = render(
      <Card
        image="image-url"
        name="Test Name"
        onClickHeart={onClickHeart}
        fullHeart={false}
      />
    )
    const heartButton = getByTestId('heart-button')
    fireEvent.click(heartButton)
    expect(onClickHeart).toHaveBeenCalledTimes(1)
  })
})
