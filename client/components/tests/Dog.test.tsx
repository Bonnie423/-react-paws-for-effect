// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { it, describe, expect } from 'vitest'
import '../../test/setup.tsx'

import Dog from '../Dog.tsx'

describe('<Dog /> component', ()=>{
  it('renders a dog name', ()=>{
    render(<Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" imageSrc="/images/greyhound.png" />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent('Desdemona')
    expect(heading).toMatchInlineSnapshot(`
      <h3
        class="dog-name"
      >
        Desdemona
      </h3>
    `)
  })

  it('should show dog images', ()=>{
    render(<Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" imageSrc="/images/greyhound.png" />)
    const image = screen.getByAltText('A dog')
    expect(image).toHaveAttribute('src', "/images/greyhound.png")
  })
})