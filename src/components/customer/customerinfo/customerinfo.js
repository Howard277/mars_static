import DateTimeUtil from '@/utils/DateTimeUtil.js'

export default {
  data () {
    return {
      customer: {
        id: '',
        name: '',
        birthday: '',
        age: '',
        address: ''
      },
      pickerOptions: DateTimeUtil.datePickerOptions // 日期控件快捷键
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
