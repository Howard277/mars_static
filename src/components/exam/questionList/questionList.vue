<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>考题列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="text-align:left;padding:10px 0px 10px 0px;">
      <el-button type="primary" size="mini" @click="jump('/questionInfo')">新建考题</el-button>
      <el-button
        type="primary"
        size="mini"
        @click="search"
        style="float:right;"
        icon="el-icon-search"
      >搜索</el-button>
      <el-input v-model="query.condition" style="width:300px;float:right;" aria-placeholder="标题、范围"></el-input>
    </el-row>
    <div>
      <div v-if="questionList.data.length === 0">
        <p>没有数据可以展示！</p>
      </div>
      <div v-else>
        <el-table
          :data="questionList"
          border
          stripe
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="q_title" label="考题名称" width="180"></el-table-column>
          <el-table-column prop="q_scope" label="考题范围" width="180"></el-table-column>
          <el-table-column prop="q_type" label="考题类型" width="180"></el-table-column>
          <el-table-column prop="q_content" label="考题内容" width="180"></el-table-column>
          <el-table-column prop="q_options" label="考题选项" width="180"></el-table-column>
          <el-table-column prop="q_standard_answer" label="标准答案" width="180"></el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="questionList.count"
          :page-size="questionList.pageSize"
          :current-page="questionList.pageIndex"
          :page-sizes="[10, 20, 30, 40, 50]"
          @size-change="search"
          @current-change="search"
          @prev-click="search"
          @next-click="search"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script src='./questionList.js'></script>
