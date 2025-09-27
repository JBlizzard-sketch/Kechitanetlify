import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

test('renders Kechita heading', () => {
  render(<Home />)
  expect(screen.getByText(/Igniting Kenyan Hustles/i)).toBeInTheDocument()
})
