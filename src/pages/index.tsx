import { useFetch } from 'hooks/use-fetch'

import { getPlaceholder as service } from 'services/placeholder'

const View = () => {
  const { data, loading, fetching, cache, refetch } = useFetch({
    service,
  })

  console.log(loading, fetching, cache, data)

  return (
    <div>
      <button onClick={() => refetch()}>
        {loading ? 'Loading' : 'Refetch'}
      </button>

      <br />
      {/* <ul>
        {(data || []).map((item) => (
          <li style={{ color: fetching ? '#f5f' : '#000' }} key={item.id}>
            {item.title}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default View
