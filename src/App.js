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
      window.location.reload()
    }
  },
  created () {
    let storageMenus = window.localStorage['menus']
    if (typeof (storageMenus) !== 'undefined') {
      this.menus = JSON.parse(storageMenus)
      this.needLogin = false;
    }
  }
}
