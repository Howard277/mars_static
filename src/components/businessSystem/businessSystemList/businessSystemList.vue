<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>业务系统配置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="text-align:left;padding:10px 0px 10px 0px;">
      <el-button type="primary" size="mini" @click="showLikeCard=!showLikeCard">切换显示</el-button>
      <el-button type="primary" size="mini" @click="jump('/businessSystemInfo')">新建系统</el-button>
    </el-row>
    <div>
      <div v-if="showLikeCard">
        <div v-if="businessSystems.length === 0">
          <p>没有数据可以展示！</p>
        </div>
        <div v-else>
          <el-col :span="6" v-for="item in businessSystems" :key="item.system_code">
            <el-card shadow="never" style="margin:5px;">
              <div style="padding: 14px;">
                <span>系统编码：{{item.system_code}}</span>
                <p style="text-align:left;">
                  <span>系统名称：{{item.system_name}}</span>
                  <br>
                </p>
              </div>
            </el-card>
          </el-col>
        </div>
      </div>
      <div v-else>
        <div v-if="businessSystems.length === 0">
          <p>没有数据可以展示！</p>
        </div>
        <div v-else>
          <el-table
            :data="businessSystems"
            border
            style="width: 100%"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="system_code" label="系统编码" width="180"></el-table-column>
            <el-table-column prop="system_name" label="系统名称" width="180"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./businessSystemList.js"></script>
