import axios from 'axios'

export default {
  // 索引候选人信息
  async postCandidateInfo (params) {
    let res = await axios.post('/es/mars_candidate/candidate', params)
    return res.data
  },
  // 更新候选人信息
  async putCandidateInfo (id, params) {
    let res = await axios.put('/es/mars_candidate/candidate/' + id, params)
    return res.data
  },
  // 全文检索 候选人信息
  async fullTextSearchForCandidateInfo (params, searchBody) {
    let url = '/es/mars_candidate/candidate/_search?q='
    if (params.length === 0) {
      url = '/es/mars_candidate/candidate/_search'
    }
    let res = await axios.get(url + params, {'params': searchBody})
    return res.data
  },
  // 通过id获得 候选人信息
  async getCandidateInfoById (id) {
    let url = '/es/mars_candidate/candidate/' + id
    debugger
    let res = await axios.get(url)
    return res.data
  }
}
