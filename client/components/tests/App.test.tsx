// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { it, describe, expect } from 'vitest'
import '../../test/setup.tsx'

import App from '../App.tsx'

describe('<App /> component', ()=>{
  it('it renders three dogs', ()=>{
    render(<App />)
    const heading = screen.queryAllByRole('heading')
    expect(heading).toHaveLength(4)
    expect(heading[1]).toHaveTextContent('Desdemona')
  })

  it('renders a dog image', ()=>{
    render(<App />)
    const image = screen.getByAltText('a spinning paw-print')
    expect(image).toBeVisible()
    expect(image).toBeInTheDocument()
  })

})