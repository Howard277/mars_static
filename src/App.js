export default {
  name: 'App',
  data () {
    return {
      menus: [],
      activeIndex: 'mainpage',
      activeIndex2: 'mainpage',
      needLogin: true,
      loginUser: {
        name: '',
        password: ''
      }
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
    login () {
      window.localStorage['menus'] = JSON.stringify([{
        'index': 'mainpage',
        'name': '首页',
        'path': '/'
      }, {
        'index': 'customermanagement',
        'name': '客户管理'
      }, {
        'index': 'customerlist',
        'name': '客户列表',
        'path': '/customerlist'
      }, {
        'index': 'config',
        'name': '配置管理',
        'path': '/config'
      }])
      // 菜单保存后，刷新页面
      window.location.reload()
    },
    // 取消登录
    logincancel () {
      this.data.loginUser.name = ''
      this.data.loginUser.password = ''
    },
    // 退出登录
    logout () {
      window.localStorage['menus'] = undefined
      window.location.reload()
    }
  },
  // vue实例创建时调用的函数
  created () {
    // 检查本地存储中是否存在菜单信息
    let storageMenus = window.localStorage['menus']
    if (typeof (storageMenus) !== 'undefined') {
      // 解析本地存储中的菜单信息，判断要访问的路径是否包含在菜单中
      let menus = JSON.parse(storageMenus)
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
