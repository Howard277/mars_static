<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/customerlist' }">客户列表</el-breadcrumb-item>
      <el-breadcrumb-item>客户信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="padding:10px;text-align:left; word-wrap:break-word;">
      <el-row>
        <el-button type="success" size="small" @click="onSubmit">保存</el-button>
        <el-button type="warning" size="small" @click="cancelSubmit">取消</el-button>
      </el-row>
      <el-form ref="form" :model="customer" label-width="80px" style="padding-top:20px;">
        <el-form-item label="客户姓名">
          <el-input v-model="customer.name"></el-input>
        </el-form-item>
        <el-form-item label="客户生日">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="customer.birthday"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptions"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="居住地址">
          <el-input type="textarea" v-model="customer.address"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script src='./customerinfo.js'></script>
