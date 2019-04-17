import businessSystem from '@/api/businessSystem.js'

export default {
  data () {
    return {
      businessSystems: [],
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
      let res = await businessSystem.getBusinessSystemPage({})
      this.businessSystems = res.data
    },
    // 处理当前行变更
    handleCurrentChange (val) {
      this.currentRow = val
    }
  },
  created () {
    this.fresh()
  }
}
