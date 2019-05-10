import es from '@/api/es.js'

export default {
  data () {
    return {
      candidates: [],
      page: { // 分页
        total: 0,
        index: 1,
        size: 10
      },
      showSearchConditionArea: false, // 是否显示搜索区域
      showLikeCard: true,
      currentRow: undefined,
      searchCandition: '' // 搜索条件
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
    },
    // 搜索候选人信息
    async searchCandidate () {
      let searchBody = {
        'from': (this.page.index - 1) * this.page.size,
        'size': this.page.index * this.page.size
      }
      let res = await es.fullTextSearchForCandidateInfo(this.searchCandition, searchBody)
      this.candidates = res['hits']['hits']
      this.page.total = res['hits']['total']
    },
    // 处理分页 尺寸变化
    handlePageSizeChange () {
      this.searchCandidate()
    },
    // 处理分页 当前页变化
    handlePageCurrentChange (val) {
      this.searchCandidate()
    },
    showCandidateInfo (id) {
      this.$router.push({name: 'candidateInfo', params: {id: id}})
    }
  },
  created () {}
}
