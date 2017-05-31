/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import NotFound from 'pages/notfound/NotFound'

describe('pages/notfound/NotFound', () => {
  it('renders correctly', () => {
    const component = renderer.create(<NotFound />)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
