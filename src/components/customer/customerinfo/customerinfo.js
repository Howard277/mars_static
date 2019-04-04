export default {
  data () {
    return {
      customer: {
        id: '',
        name: '',
        birthday: '',
        age: '',
        address: ''
      }
    }
  },
  methods: {
    // 提交
    onSubmit () {
      console.log('submit!')
    },
    // 取消
    cancelSubmit () {
      for (let key in this.customer) {
        this.customer[key] = ''
      }
    }
  }
}
