<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>候选人列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="text-align:left;padding:10px 0px 10px 0px;">
      <el-col :span="18">
        <el-button type="primary" size="mini" @click="showLikeCard=!showLikeCard">切换显示</el-button>
        <el-button type="primary" size="mini" @click="jump('/candidateInfo')">新建候选人</el-button>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="搜索内容" v-model="searchCandition" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="searchCandidate"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <div>
      <div v-if="showLikeCard">
        <!--卡片式显示-->
        <div v-if="candidates.length === 0">
          <p>没有数据可以展示！</p>
        </div>
        <div v-else>
          <el-col :span="6" v-for="item in candidates" :key="item.candidate_no">
            <el-card shadow="hover" style="margin:5px;">
              <div style="text-align:left;">
                <span>编码：</span>
                <span>
                  <b>{{item._id}}</b>
                </span>
                <hr>
                <el-row>
                  <el-col :span="8">姓名：</el-col>
                  <el-col :span="8">{{item._source.chinese_name}}</el-col>
                  <el-col :span="8">{{item._source.english_name}}</el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">电话号码：</el-col>
                  <el-col :span="16">{{item._source.phone_no}}</el-col>
                </el-row>
                <el-row style="text-align:right;">
                  <el-button type="text" @click="showCandidateInfo(item._id)">查看详情</el-button>
                </el-row>
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
            <el-table-column prop="_id" label="编码" width="180"></el-table-column>
            <el-table-column prop="_source.chinese_name" label="中文姓名"></el-table-column>
            <el-table-column prop="_source.english_name" label="英文姓名"></el-table-column>
            <el-table-column prop="_source.phone_no" label="电话号码"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <el-pagination
        v-if="candidates.length > 0"
        background
        layout="prev, pager, next"
        @size-change="handlePageSizeChange"
        @current-change="handlePageCurrentChange"
        :total="page.total"
        :current-page.sync="page.index"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="page.size"
        style="clear:both;"
      ></el-pagination>
  </div>
</template>
<script src="./candidateList.js"></script>
