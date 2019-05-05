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
  }
}
