import {render  } from '@testing-library/react';
import HomePage from '../../containers/Home'

jest.mock('next/router', () => ({
    useRouter: () => ({
      query: { sort: null },
    }),
  }));

describe('It should be render correctly', () => {
    const container = render(<HomePage />)
    it('code should not change', () => {
        expect(container).toMatchSnapshot()
    })
})