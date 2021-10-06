import { renderHook, act } from '@testing-library/react-hooks'
import { getUser } from 'services/placeholder'
import { useUser } from '..'

const service = getUser as any

const mockData = {
  data: {
    results: [
      {
        name: { first: 'amir', last: 'khademi' },
        email: 'user@',
        picture: { large: 'some img' },
      },
    ],
  },
}

jest.mock('services/placeholder')

describe('Use user hook', () => {
  beforeEach(() => service.mockResolvedValueOnce(mockData))
  afterEach(() => jest.resetAllMocks())

  it('Should render proper data', async () => {
    const { result, waitFor } = renderHook(() => useUser())
    expect(result.current.loading).toBeTruthy()
    await waitFor(() => !result.current.loading)
    expect(service).toHaveBeenCalledTimes(1)
    expect(result.current.data).toBe(mockData)
  })
  it('Should refetch proper data', async () => {
    const { result, waitFor, waitForNextUpdate } = renderHook(() => useUser())
    await waitFor(() => !result.current.loading)
    expect(result.current.cache).toBe(undefined)
    act(() => result.current.refetch())
    jest.spyOn(console, 'error').mockImplementation(jest.fn())
    expect(result.current.fetching).toBeTruthy()
    await waitForNextUpdate()
    expect(service).toHaveBeenCalledTimes(2)
    expect(result.current.cache).toBe(mockData)
    expect(result.current.isNew).toStrictEqual({
      email: undefined,
      first: undefined,
      img: undefined,
      last: undefined,
    })
  })
})
