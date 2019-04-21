import candidateAPI from '@/api/candidate.js'

export default {
  data () {
    return {
      candidates: [],
      showLikeCard: true,
      currentRow: undefined
    }
  },
  methods: {
    // 路由跳转方法
    jump (path) {
      this.$router.push(path)
    },
    async fresh () {
      // 查询业务系统数据
      // let res = await candidateAPI.getBusinessSystemPage({})
      // this.candidates = res.data
    },
    // 处理当前行变更
    handleCurrentChange (val) {
      this.currentRow = val
    }
  },
  created () {}
}
