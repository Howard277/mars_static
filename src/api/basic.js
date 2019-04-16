import axios from 'axios'

export default {
  async login (params) {
    let res = await axios.post('/general/login', params)
    return res.data
  }
}
