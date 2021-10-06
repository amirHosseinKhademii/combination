import axios from 'axios'

export const getPlaceholder = async () => {
  const { data } = await axios.get('https://randomuser.me/api/')
  return data
}

export const deletePlaceholder = async (id) => {
  const { data } = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  return data
}

export const savePlaceholder = async (payload) => {
  const { data } = await axios.post(
    `https://jsonplaceholder.typicode.com/posts`,
    payload
  )
  return data
}

export const editPlaceholder = async ({ payload, id }) => {
  const { data } = await axios.post(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    payload
  )
  return data
}
