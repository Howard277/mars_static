import vue from 'vue'

export default {
  data () {
    return {
      new_description: '', // 新增描述
      form: {
        chinese_name: '',
        english_name: '',
        phone_no: '',
        birthday: '',
        sex: 'male',
        marry_status: 'single',
        live_city: '', // 居住城市
        headhunter_description: [] // 描述信息
      }
    }
  },
  methods: {
    // 提交一个新描述
    submitNewDescription () {
      if (this.new_description.length === 0) {
        this.$message('请输入新描述！')
        return
      }
      let loginInfo = JSON.parse(window.localStorage['loginInfo'])
      let userInfo = loginInfo['userInfo']
      let realName = userInfo['real_name']
      vue.set(this.form.headhunter_description, this.form.headhunter_description.length, realName + '：' + this.new_description)
    }
  },
  created () {}
}
