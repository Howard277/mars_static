import businessSystem from '@/api/businessSystem.js'

export default {
  data () {
    return {
      businessSystems: [],
      showLikeCard: true
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
    }
  },
  created () {
    this.fresh()
  }
}
