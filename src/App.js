import basic from './api/basic.js'

export default {
  name: 'App',
  data () {
    return {
      menus: [],
      activeIndex: 'mainpage',
      activeIndex2: 'mainpage',
      needLogin: true,
      loginUser: {
        loginName: '',
        password: ''
      },
      userInfo: undefined // 用户信息
    }
  },
  methods: {
    // 菜单变更处理函数，遍历data中的menus数据，判断当前选中菜单的index数据然后调整的指定路径
    handleSelect: function (key, keyPath) {
      for (let idx in this.$data['menus']) {
        if (this.$data['menus'][idx]['index'] === key) {
          if ('path' in this.$data['menus'][idx]) {
            this.$router.push(this.$data['menus'][idx]['path'])
          }
        }
      }
    },
    // 菜单项显示控制函数：根据传入的key，判断是否在数组中，如果在就显示，如果不在就不显示
    menuItemDisplay: function (key) {
      for (let idx in this.$data['menus']) {
        if (this.$data['menus'][idx]['index'] === key) {
          return true
        }
      }
      return false
    },
    jump: function (path) {
      this.$router.push(path)
    },
    // 登录函数，获取用户菜单保存到localStorage中
    async login () {
      if (this.loginUser.loginName.length === 0) {
        this.$message({
          message: '请输入用户名！',
          type: 'warning'
        })
        return
      }
      if (this.loginUser.password.length === 0) {
        this.$message({
          message: '请输入密码！',
          type: 'warning'
        })
        return
      }
      // 调用后台登录接口
      let resData = await basic.login(this.loginUser)
      debugger
      if (resData['status']) {
        // 保存信息
        window.localStorage['loginInfo'] = JSON.stringify(resData)
        // 菜单保存后，刷新页面
        window.location.reload()
      } else {
        this.$message({
          message: '登录失败！',
          type: 'warning'
        })
      }
    },
    // 取消登录
    logincancel () {
      this.data.loginUser.name = ''
      this.data.loginUser.password = ''
    },
    // 退出登录
    logout () {
      window.localStorage.removeItem('loginInfo')
      window.location.reload()
    }
  },
  // vue实例创建时调用的函数
  created () {
    let pathname = window.location.pathname
    if (!(pathname.endsWith('.jpg') || pathname.endsWith('.png') || pathname.endsWith('.css'))) {
      // 检查本地存储中是否存在登录信息
      let loginInfo = window.localStorage['loginInfo']
      if (typeof (loginInfo) !== 'undefined') {
        // 解析本地存储中的登录信息，判断要访问的路径是否包含在其中
        let loginInfoJS = JSON.parse(loginInfo)
        this.userInfo = loginInfoJS['userInfo']
        let menus = loginInfoJS['menus']
        for (let index in menus) {
          if (('path' in menus[index]) && (menus[index]['path'] === window.location.pathname)) {
            this.needLogin = false
            this.menus = menus
            break
          }
        }
      }
    }
  }
}
