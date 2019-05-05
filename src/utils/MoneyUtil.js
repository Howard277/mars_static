export default {
  // 计算总薪资
  calcTotalPackage (val) {
    return this.checkNumber(val)
  },
  checkNumber (val) {
    if (val.indexOf('+') !== -1) {
      val = this.plus(val)
    } else if (val.indexOf('-') !== -1) {
      val = this.sub(val)
    } else if (val.indexOf('*') !== -1) {
      val = this.multi(val)
    } else if (val.indexOf('/') !== -1) {
      val = this.division(val)
    }

    if (isNaN(val)) {
      return 0
    } else {
      return val
    }
  },
  // 加法
  plus (val) {
    let a = this.checkNumber(val.substr(0, val.indexOf('+')))
    let b = this.checkNumber(val.substr(val.indexOf('+') + 1, val.length - 1))
    return Number(a) + Number(b)
  },
  // 减法
  sub (val) {
    let a = this.checkNumber(val.substr(0, val.indexOf('-')))
    let b = this.checkNumber(val.substr(val.indexOf('-') + 1, val.length - 1))
    return Number(a) - Number(b)
  },
  // 乘法
  multi (val) {
    let a = this.checkNumber(val.substr(0, val.indexOf('*')))
    let b = this.checkNumber(val.substr(val.indexOf('*') + 1, val.length - 1))
    return Number(a) * Number(b)
  },
  // 除法
  division (val) {
    let a = this.checkNumber(val.substr(0, val.indexOf('/')))
    let b = this.checkNumber(val.substr(val.indexOf('/') + 1, val.length - 1))
    return Number(a) / Number(b)
  }
}
