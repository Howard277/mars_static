import axios from 'axios'

export default {
  // 提交“业务系统”数据
  async postBusinessSystem (params) {
    let res = await axios.post('/general/postBusinessSystem', params)
    return res.data
  },
  // 获取业务系统分页数据
  async getBusinessSystemPage (params) {
    let res = await axios.get('/general/getBusinessSystemPage', {params: params})
    return res.data
  }
}
