import axios from 'axios'

export default {
  // 索引一个候选人信息
  async postCandidateToIndex (candidate) {
    let res = axios.post('/es/mars/candidate', candidate)
    return res.data
  }
}
