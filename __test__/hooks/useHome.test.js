import { renderHook, act } from '@testing-library/react-hooks'
import useHomepage from '../../containers/Home/hooks'
import dayjs from 'dayjs'
import MockDate from 'mockdate'
import { handleParamUrl } from '../../utils/common';

jest.mock('next/router', () => ({
    useRouter: () => ({
      query: { sort: null },
      push: jest.fn
    }),
  }));
// jest.mock('react')
jest.mock('dayjs', () => jest.fn((...args) => jest.requireActual('dayjs')(args.filter((arg) => arg).length > 0 ? args : '2020-08-12')),);

jest.mock('axios')

describe('Hook homepage should run correctly', () => {
   it('progress bar should run correctly', () => {
    const {result} = renderHook(() => useHomepage())

    act(() => {
        result.current.handleBar(1)
    })
    expect(result.current.handleBar(1).backgroundColor).toBe("pink")
    expect(result.current.handleBar(0.5).backgroundColor).toBe('#a9a9a9')
   })


   it('call api should be right', async () => {
    const {result} = renderHook(() => useHomepage())
    const data = await result.current.getCampaignHandle()
    expect(data).toEqual([])
   })

   it('handle osrt should be correct', () => {
    const {result} = renderHook(() => useHomepage())
    const query = {sort: 'donation-asc'}
    const urlParam = handleParamUrl('', query)
    expect(result.current.handleSort(query)).toEqual(urlParam)
   })
})