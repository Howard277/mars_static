<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>配置管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-button type="primary" size="mini" @click="logout">退出登录</el-button>
    </el-row>
  </div>
</template>
<script src="./config.js"></script>
