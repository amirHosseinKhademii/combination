import axios from 'axios'

export const getUser = async () => {
  const { data } = await axios.get('https://randomuser.me/api/')
  return data
}
