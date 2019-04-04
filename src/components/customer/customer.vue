<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>客户信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="text-align:left;padding:10px 0px 10px 0px;">
      <el-button type="primary" size="mini" @click="showLikeCard=!showLikeCard">切换显示</el-button>
    </el-row>
    <div>
      <div v-if="showLikeCard">
        <el-col :span="6" v-for="item in customers" :key="item.id">
          <el-card shadow="never" style="margin:5px;">
            <div style="padding: 14px;">
              <span>序号：{{item.id}}</span>
              <p style="text-align:left;">
                <span>姓名：{{item.name}}</span>
                <br>
                <span>年龄：{{item.age}}</span>
                <span>地址：{{item.address}}</span>
              </p>
            </div>
          </el-card>
        </el-col>
      </div>
      <div v-else>
        <el-table :data="customers" border style="width: 100%" :row-class-name="tableRowClassName">
          <el-table-column prop="id" label="序号" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="age" label="年龄" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script src="./customer.js">
</script>
