import { render, screen } from '@testing-library/react'
import Home from '../app/page'

// Mock the CSS modules
jest.mock('../app/page.module.css', () => ({
  page: 'page',
  main: 'main',
  logo: 'logo',
  ctas: 'ctas',
  primary: 'primary',
  secondary: 'secondary',
  footer: 'footer',
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { priority, ...rest } = props
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />
  },
}))

describe('Home Page', () => {
  it('renders the main heading text', () => {
    render(<Home />)
    
    // Check for key text content (text might be split across elements)
    expect(screen.getByText('Get started by editing', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('app/page.tsx')).toBeInTheDocument()
    expect(screen.getByText('Save and see your changes instantly.')).toBeInTheDocument()
  })

  it('renders the Next.js logo', () => {
    render(<Home />)
    
    const logo = screen.getByAltText('Next.js logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/next.svg')
  })

  it('renders the navigation links', () => {
    render(<Home />)
    
    // Check for the main CTA links
    expect(screen.getByText('Deploy now')).toBeInTheDocument()
    expect(screen.getByText('Read our docs')).toBeInTheDocument()
    
    // Check for footer links
    expect(screen.getByText('Learn')).toBeInTheDocument()
    expect(screen.getByText('Examples')).toBeInTheDocument()
    expect(screen.getByText('Go to nextjs.org →')).toBeInTheDocument()
  })

  it('has correct link attributes', () => {
    render(<Home />)
    
    const deployLink = screen.getByText('Deploy now').closest('a')
    expect(deployLink).toHaveAttribute('target', '_blank')
    expect(deployLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    const docsLink = screen.getByText('Read our docs').closest('a')
    expect(docsLink).toHaveAttribute('target', '_blank')
    expect(docsLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})