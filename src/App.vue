<template>
  <div id="app" style="height: 100%;">
    <div v-if="needLogin" style="background:url(/src/assets/background.jpg) no-repeat;">
      <el-form
        ref="form"
        :model="loginUser"
        label-width="55px"
        style="width:420px;height:180px;padding-top:30px;padding-left:10px;padding-right:10px;position:absolute;left:50%;top:50%;position:absolute;left:50%;top:50%;margin-left:-210px;margin-top:-120px;border:2px solid #609EFF;border-radius:5px;"
      >
        <el-form-item label="用户名">
          <el-input v-model="loginUser.loginName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginUser.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="login">登录</el-button>
          <el-button type="primary" size="small" @click="logincancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-else style="height: 100%;">
      <el-container style="height: 100%;">
        <el-header style="padding:0px;">
          <div style="text-align:left;background-color:#545c64;height:60px;">
            <div style="display:inline-block;width:100px;text-align:center;">
              <img src="./assets/logo.png" style="width:60px;height:60px;display:inline-block;">
            </div>
            <div style="display:inline-block;">
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
                  <el-menu-item v-if="menuItemDisplay('customerList')" index="customerList">客户列表</el-menu-item>
                </el-submenu>
                <el-submenu v-if="menuItemDisplay('authManagement')" index="authManagement">
                  <template slot="title">权限管理</template>
                  <el-menu-item
                    v-if="menuItemDisplay('businessSystemList')"
                    index="businessSystemList"
                  >业务系统配置</el-menu-item>
                  <el-menu-item v-if="menuItemDisplay('config')" index="config">配置管理</el-menu-item>
                </el-submenu>
                <el-submenu
                  v-if="menuItemDisplay('candidateManagement')"
                  index="candidateManagement"
                >
                  <template slot="title">候选人管理</template>
                  <el-menu-item v-if="menuItemDisplay('candidateList')" index="candidateList">候选人列表</el-menu-item>
                </el-submenu>
                <el-submenu v-if="menuItemDisplay('examManagement')" index="examManagement">
                  <template slot="title">考试管理</template>
                  <el-menu-item v-if="menuItemDisplay('questionList')" index="questionList">考题列表</el-menu-item>
                  <el-menu-item
                    v-if="menuItemDisplay('examTemplateList')"
                    index="examTemplateList"
                  >试卷模板列表</el-menu-item>
                  <el-menu-item v-if="menuItemDisplay('examList')" index="examList">试卷列表</el-menu-item>
                </el-submenu>
              </el-menu>
            </div>
            <div style="display:inline-block;float:right;margin-top:20px;">
              <span style="color:#FDF2D2;">欢迎，{{userInfo.real_name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src="./assets/logout.png"
                style="width:20px;height:30px;"
                @click="logout"
              >
            </div>
          </div>
        </el-header>
        <el-container>
          <el-aside style="width:130px;padding-top:10px;background-color:#ddeddd;">
            <el-button
              type="primary"
              size="mini"
              @click="jump('/customerInfo')"
              style="width:100px;margin-bottom:5px;margin-left:0px;"
            >新建客户</el-button>
            <el-button
              type="primary"
              size="mini"
              @click="jump('/candidateInfo')"
              style="width:100px;margin-bottom:5px;margin-left:0px;"
            >新建候选人</el-button>
            <el-button
              type="primary"
              size="mini"
              @click="jump('/questionInfo')"
              style="width:100px;margin-bottom:5px;margin-left:0px;"
            >新建考题</el-button>
          </el-aside>
          <el-container style="word-wrap:break-word;">
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
