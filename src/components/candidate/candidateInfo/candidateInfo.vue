<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/candidateList'}">后续人列表</el-breadcrumb-item>
      <el-breadcrumb-item>后续人详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="padding:10px;">
      <el-form ref="form" :model="form" label-width="80px">
        <div style="text-align:left;">
          <p style="border-bottom:#909399 solid 2px;font-size:20px;">基本信息：</p>
          <div style="padding-left:15px;">
            <el-row>
              <el-col :span="6">
                <el-form-item label="中文姓名">
                  <el-input v-model="form.chinese_name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="英文姓名">
                  <el-input v-model="form.english_name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="手机号码">
                  <el-input v-model="form.phone_no"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="居住地址">
                  <el-input v-model="form.live_city"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="出生日期">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.birthday"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="性别">
                  <el-radio-group v-model="form.sex">
                    <el-radio label="male">男</el-radio>
                    <el-radio label="female">女</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="婚姻情况">
                  <el-radio-group v-model="form.marry_status">
                    <el-radio label="single">单身</el-radio>
                    <el-radio label="married">已婚</el-radio>
                    <el-radio label="divorced">离异</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </div>
        <div style="text-align:left;vertical-align:bottom;">
          <p style="border-bottom:#909399 solid 2px;font-size:20px;">顾问描述：</p>
          <div style="padding-left:20px; word-wrap:break-word;">
            <p v-for="item in form.headhunter_description" :key="item">{{item}}</p>
            <el-row>
              <el-col :span="20">
                <el-input type="textarea" v-model="new_description"></el-input>
              </el-col>
              <el-col :span="4">
                <el-button type="primary" size="mini" @click="submitNewDescription">提交描述</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script src="./candidateInfo.js"></script>
