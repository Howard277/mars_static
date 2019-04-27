import exam from '@/api/exam.js'

export default {
  data () {
    return {
      query: {
        condition: '',
        pageSize: 10,
        pageIndex: 1
      }, // 查询条件
      currentRow: {}, // 当前行
      questionList: {
        count: 0,
        data: [],
        pageSize: 10,
        pageIndex: 1
      }
    }
  },
  methods: {
    // 处理当前行变更
    handleCurrentChange (val) {
      this.currentRow = val
    },
    // 搜索数据
    async search () {
      this.query.pageIndex = this.questionList.pageIndex
      this.query.pageSize = this.questionList.pageSize
      let data = await exam.getQuestionByCondition(this.query)
      Object.assign(this.questionList, data)
    },
    // 路由跳转
    jump (path) {
      this.$router.push(path)
    }
  }
}
