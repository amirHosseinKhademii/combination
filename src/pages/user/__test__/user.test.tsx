import { render, screen, waitFor } from '@testing-library/react'
import event from '@testing-library/user-event'
import { getUser } from 'services/placeholder'
import View from '..'

const service = getUser as any

const mockData = {
  results: [
    {
      name: { first: 'amir', last: 'khademi' },
      email: 'user@',
      picture: { large: 'some img' },
    },
  ],
}

jest.mock('services/placeholder')

describe('User view', () => {
  beforeEach(() => service.mockResolvedValueOnce(mockData))
  afterEach(() => jest.resetAllMocks())

  it('Should render proper data and refetch', async () => {
    render(<View />)
    const btn = screen.getByRole('button')
    await waitFor(() => screen.queryByTestId('card-image'))
    expect(btn).toHaveTextContent('New user')
    event.click(btn)
    jest.spyOn(console, 'error').mockImplementation(jest.fn())
    expect(service).toHaveBeenCalledTimes(2)
    expect(service).toHaveBeenCalledWith()
    jest.resetAllMocks()
    expect(btn).toHaveTextContent('Loading ...')
    await waitFor(() => btn.textContent !== 'Loading ...')
    expect(btn).toHaveTextContent('New user')
  })
})
