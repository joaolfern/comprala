import App from './App'
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)

    screen.getByText('count is')
  })
})
