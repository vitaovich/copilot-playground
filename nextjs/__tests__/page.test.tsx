import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home Page', () => {
  it('renders correctly', () => {
    const { container } = render(<Home />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('contains Next.js logo', () => {
    render(<Home />)
    const logo = screen.getByAltText('Next.js logo')
    expect(logo).toBeInTheDocument()
  })

  it('contains getting started text', () => {
    render(<Home />)
    const text = screen.getByText(/Get started by editing/)
    expect(text).toBeInTheDocument()
  })
})