<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!--菜单的组成是通过data中的menus数组构成的-->
      <el-menu-item v-for="item in menus" :key="item.index" :index="item.index">{{item.name}}</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menus: [{
        'index': 'mainpage',
        'name': '主页',
        'path': '/'
      }, {
        'index': 'usercenter',
        'name': '用户中心',
        'path': '/customer'
      }],
      activeIndex: 'mainpage',
      activeIndex2: 'mainpage'
    }
  },
  methods: {
    // 菜单变更处理函数，遍历data中的menus数据，判断当前选中菜单的index数据然后调整的指定路径
    handleSelect: function (key, keyPath) {
      for(let idx in this.$data['menus']){
        if(this.$data['menus'][idx]['index'] === key){
          this.$router.push(this.$data['menus'][idx]['path'])
        }
      }
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
