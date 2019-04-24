import axios from 'axios'

export default {
  // 保存 考题 方法
  async saveQuestion (params) {
    let res = await axios.post('/exam/saveQuestion', params)
    return res.data
  }
}
