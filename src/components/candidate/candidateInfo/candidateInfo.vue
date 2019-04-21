<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/candidateList'}">后续人列表</el-breadcrumb-item>
      <el-breadcrumb-item>后续人详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script src="./candidateInfo.js"></script>
