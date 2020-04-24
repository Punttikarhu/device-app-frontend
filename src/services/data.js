import axios from 'axios'
const baseUrl = 'http://192.168.43.9:3001'

const send = status => {
  return axios.post(baseUrl, status)
}

export default { send }