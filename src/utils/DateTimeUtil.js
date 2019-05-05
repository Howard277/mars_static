export default {
  // 获取日期字符串
  getDateStr (date) {
    if (date instanceof Date) {
      let year = date.getFullYear()
      let month = date.getMonth()
      let day = date.getDay()
      return year + '-' + month + '-' + day
    } else {
      return ''
    }
  },
  // 获取日期时间字符串
  getDateTimeStr (date) {
    if (date instanceof Date) {
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      let hour = date.getHours()
      let minute = date.getMinutes()
      let second = date.getSeconds()
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
    } else {
      return ''
    }
  },
  // 日期控件选项
  datePickerOptions: {
    disabledDate (time) {
      return time.getTime() > Date.now()
    },
    shortcuts: [{
      text: '今天',
      onClick (picker) {
        picker.$emit('pick', new Date())
      }
    }, {
      text: '昨天',
      onClick (picker) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24)
        picker.$emit('pick', date)
      }
    }, {
      text: '一周前',
      onClick (picker) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', date)
      }
    }]
  }
}
