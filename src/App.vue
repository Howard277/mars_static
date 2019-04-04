<template>
  <div id="app">
    <div style="background-color:#545c64;">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item v-if="menuItemDisplay('mainpage')" index="mainpage">主页</el-menu-item>
        <el-submenu v-if="menuItemDisplay('customermanagement')" index="customermanagement">
          <template slot="title">客户管理</template>
          <el-menu-item v-if="menuItemDisplay('customerinfo')" index="customerinfo">客户信息</el-menu-item>
        </el-submenu>
        <el-menu-item v-if="menuItemDisplay('config')" index="config">配置管理</el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menus: [{
        'index': 'mainpage',
        'name': '主页',
        'path': '/'
      }, {
        'index': 'customermanagement',
        'name': '客户管理'
      }, {
        'index': 'customerinfo',
        'name': '客户信息',
        'path': '/customerinfo'
      }, {
        'index': 'config',
        'name': '配置管理',
        'path': '/config'
      }],
      activeIndex: 'mainpage',
      activeIndex2: 'mainpage'
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
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
