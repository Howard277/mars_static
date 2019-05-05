<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/questionList'}">考题列表</el-breadcrumb-item>
      <el-breadcrumb-item>考题详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="padding:10px;text-align:left; word-wrap:break-word;">
      <el-row>
        <el-button type="success" size="small" @click="save">保存</el-button>
      </el-row>
      <el-form ref="form" :label-position="left" :model="form" label-width="80px">
        <el-form-item style="text-align:left;" label="考题编号">
          <b style="font-size:25px;">{{form.id}}</b>
        </el-form-item>
        <el-form-item label="考题标题">
          <el-input v-model="form.qTitle"></el-input>
        </el-form-item>
        <el-form-item label="考题范围" style="text-align:left;">
          <el-radio-group v-model="form.qScope">
            <el-radio v-for="item in question_scope" :key="item" :label="item">{{item}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="考题类型" style="text-align:left;">
          <el-radio-group v-model="form.qType">
            <el-radio v-for="(value, key) in question_type" :key="key" :label="key">{{value}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="考题内容" v-if="form.qType == 'free'">
          <el-input type="textarea" v-model="form.qContent"></el-input>
        </el-form-item>
        <el-form-item label="考题选项" v-if="(form.qType == 'single') || (form.qType == 'multi')" style="text-align:left;">
          <el-row>
            <el-button type="primary" size="mini" round @click="addOption">新增</el-button>
          </el-row>
          <el-row v-for="item in form.qOptions" :key="item">
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
          <el-input type="textarea" v-model="form.qStandardAnswer"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script src='./questionInfo.js'></script>
