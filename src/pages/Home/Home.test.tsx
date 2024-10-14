import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Home } from '@/pages/Home/Home'

describe('Home', () => {
  it('renders home', () => {
    const home = render(<Home />)

    expect(home).not.toBeNull()
  })
})
