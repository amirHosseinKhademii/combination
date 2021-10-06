import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '..'

describe('Input core', () => {
  it('Should render properly', () => {
    render(<Input />)
    const element = screen.getByTestId('input-core')
    expect(element).toBeInTheDocument()
  })
  it('Should render properly with placeholder', () => {
    render(<Input placeholder="password" />)
    const element = screen.getByPlaceholderText('password')
    expect(element).toBeVisible()
  })
  it('Should render properly with error', () => {
    render(<Input error="Error" />)
    const element = screen.getByTestId('input-core')
    expect(element.className).toContain('border-red-400')
  })

  it('Should change properly', () => {
    render(<Input />)
    const element = screen.getByTestId('input-core') as any
    fireEvent.change(element, { target: { value: 'changed' } })
    expect(element.value).toBe('changed')
  })
})
