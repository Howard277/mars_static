<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/businessSystemList' }">业务系统配置</el-breadcrumb-item>
      <el-breadcrumb-item>新增业务系统</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form ref="form" :model="businessSystem" label-width="120px" style="padding-top:20px;">
      <el-form-item label="业务系统编码">
        <el-input v-model="businessSystem.systemCode"></el-input>
      </el-form-item>
      <el-form-item label="业务系统名称">
        <el-input v-model="businessSystem.systemName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button type="warning" @click="cancelSubmit">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script src='./businessSystemInfo.js'></script>
