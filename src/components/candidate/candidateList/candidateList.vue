<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>后续人列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="text-align:left;padding:10px 0px 10px 0px;">
      <el-button type="primary" size="mini" @click="showLikeCard=!showLikeCard">切换显示</el-button>
      <el-button type="primary" size="mini" @click="jump('/candidateInfo')">新建候选人</el-button>
    </el-row>
    <div>
      <div v-if="showLikeCard">
        <div v-if="candidates.length === 0">
          <p>没有数据可以展示！</p>
        </div>
        <div v-else>
          <el-col :span="6" v-for="item in candidates" :key="item.candidate_no">
            <el-card shadow="never" style="margin:5px;">
              <div style="padding: 14px;">
                <span>后续人编码：{{item.candidate_no}}</span>
                <p style="text-align:left;">
                  <span>后续人中文姓名：{{item.chinese_name}}</span>
                  <br>
                </p>
              </div>
            </el-card>
          </el-col>
        </div>
      </div>
      <div v-else>
        <div v-if="candidates.length === 0">
          <p>没有数据可以展示！</p>
        </div>
        <div v-else>
          <el-table
            :data="candidates"
            border
            stripe
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="candidate_no" label="后续人编码" width="180"></el-table-column>
            <el-table-column prop="chinese_name" label="候选人中文姓名" width="180"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./candidateList.js"></script>
