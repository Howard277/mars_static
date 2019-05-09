import axios from 'axios'

export default {
  async postCandidateInfo (params) {
    debugger
    let res = await axios.post('/es/mars_candidate/candidate', params)
    return res.data
  }
}
