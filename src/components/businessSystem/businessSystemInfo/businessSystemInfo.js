import businessSystem from '@/api/businessSystem.js'

export default {
  data () {
    return {
      businessSystem: {
        systemCode: '',
        systemName: ''
      }
    }
  },
  methods: {
    // 提交操作
    async onSubmit () {
      let data = await businessSystem.postBusinessSystem(this.businessSystem)
      if (data['status']) {
        this.$message({
          message: '提交成功！',
          type: 'success'
        })
        this.$router.push('/businessSystemList')
      } else {
        this.$message.error('提交失败！')
      }
    },
    // 取消提交
    cancelSubmit () {
      for (let property in this.businessSystem) {
        this.businessSystem[property] = ''
      }
    }
  },
  created () {
  }
}
