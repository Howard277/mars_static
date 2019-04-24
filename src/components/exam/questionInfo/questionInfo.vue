<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/candidateList'}">考题列表</el-breadcrumb-item>
      <el-breadcrumb-item>考题详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="padding:10px;">
      <el-form ref="form" :label-position="left" :model="form" label-width="80px">
        <el-form-item label="考题编号">
          <el-input v-model="form.id" disabled="false"></el-input>
        </el-form-item>
        <el-form-item label="考题标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="考题范围" style="text-align:left;">
          <el-radio-group v-model="form.scope">
            <el-radio v-for="item in question_scope" :key="item" :label="item">{{item}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="考题类型" style="text-align:left;">
          <el-radio-group v-model="form.type">
            <el-radio v-for="item in question_type" :key="item" :label="item">{{item}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="考题内容">
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="考题选项" style="text-align:left;">
          <el-row>
            <el-button type="primary" size="mini" round @click="addOption">新增</el-button>
          </el-row>
          <el-row v-for="item in form.options" :key="item">
            <el-col :span="1">
              <el-input type="text" v-model="item.no"/>
            </el-col>
            <el-col :span="21">
              <el-input type="text" v-model="item.value"/>
            </el-col>
            <el-col :span="2">
              <el-button type="danger" size="mini" round @click="deleteOption(item.no)">删除</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="标准答案">
          <el-input type="textarea" v-model="form.standard_answer"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script src='./questionInfo.js'></script>
