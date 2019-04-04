<template>
  <div id="app">
    <div v-if="needLogin">
      <el-form ref="form" :model="loginUser" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="loginUser.name"></el-input>
        </el-form-item>
        <el-button type="primary" size="mini" @click="login">登录</el-button>
      </el-form>
    </div>
    <div v-else>
      <el-container>
        <el-header style="padding:0px;">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item v-if="menuItemDisplay('mainpage')" index="mainpage">首页</el-menu-item>
            <el-submenu v-if="menuItemDisplay('customermanagement')" index="customermanagement">
              <template slot="title">客户管理</template>
              <el-menu-item v-if="menuItemDisplay('customerlist')" index="customerlist">客户列表</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="menuItemDisplay('config')" index="config">配置管理</el-menu-item>
          </el-menu>
        </el-header>
        <el-container>
          <el-aside style="width:100px;padding-top:10px;">
            <el-button type="primary" size="mini" @click="jump('/customerinfo')">新建客户</el-button>
          </el-aside>
          <el-container>
            <el-main>
              <router-view></router-view>
            </el-main>
            <el-footer></el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script src="./App.js">
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
