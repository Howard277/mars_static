<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/candidateList'}">后续人列表</el-breadcrumb-item>
      <el-breadcrumb-item>后续人详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="padding:10px;text-align:left;">
      <el-row>
        <el-button type="success" size="small" @click="saveCandidate">保存</el-button>
      </el-row>
      <el-form ref="candidateInfo" :model="candidateInfo" label-width="100px">
        <div>
          <p style="border-bottom:#409EFF solid 2px;font-size:20px;color:#409EFF;">基本信息：&nbsp;&nbsp;{{candidateInfo.id}}</p>
          <div style="padding-left:15px;">
            <el-row>
              <el-col :span="6">
                <el-form-item label="中文姓名">
                  <el-input v-model="candidateInfo.chinese_name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="英文姓名">
                  <el-input v-model="candidateInfo.english_name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="手机号码">
                  <el-input v-model="candidateInfo.phone_no"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="居住地址">
                  <el-input v-model="candidateInfo.live_city"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="出生日期">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="candidateInfo.birthday"
                    value-format="yyyy-MM-dd"
                    :picker-options="pickerOptions"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="性别">
                  <el-radio-group v-model="candidateInfo.sex">
                    <el-radio label="male">男</el-radio>
                    <el-radio label="female">女</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="婚姻情况">
                  <el-radio-group v-model="candidateInfo.marry_status">
                    <el-radio label="single">单身</el-radio>
                    <el-radio label="married">已婚</el-radio>
                    <el-radio label="divorced">离异</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </div>
        <div>
          <p style="border-bottom:#409EFF solid 2px;font-size:20px;color:#409EFF;">薪资信息：</p>
          <div style="padding-left:15px;">
            <el-row>
              <el-col :span="12">
                <el-form-item label="薪资详情">
                  <el-input v-model="candidateInfo.package_detail" placeholder="只能输入+ - * / 和数字"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="总薪资">
                  <span>{{getTotalPackage}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="简写">
                  <span>{{getTotalPackageChinese}}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-form>
      <div>
        <p style="border-bottom:#409EFF solid 2px;font-size:20px;color:#409EFF;">工作经历：</p>
        <div style="padding-left:15px;">
          <el-row>
            <el-button type="primary" size="mini" @click="addNewWorkExperience">新增经历</el-button>
            <el-button type="warning" size="mini" @click="cancelNewWorkExperience">取消新增</el-button>
          </el-row>
          <!--新增工作经历-->
          <div v-if="showNewWorkExperience" style="margin-top:10px;margin-bottom:10px;">
            <el-form ref="newWorkExperience" :model="newWorkExperience" label-width="100px">
              <el-row>
                <el-button type="primary" size="mini" @click="saveNewWorkExperience">暂存</el-button>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <el-form-item label="公司中文名称">
                    <el-input v-model="newWorkExperience.companyChineseName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="公司中文简称">
                    <el-input v-model="newWorkExperience.companyChineseSimpleName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="公司英文名称">
                    <el-input v-model="newWorkExperience.companyEnglishName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="公司英文简称">
                    <el-input v-model="newWorkExperience.companyEnglishSimpleName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <el-form-item label="职位中文名称">
                    <el-input v-model="newWorkExperience.titleChineseName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="职位英文名称">
                    <el-input v-model="newWorkExperience.titleEnglishName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="总薪资">
                    <el-input v-model="newWorkExperience.totalPackage"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <el-form-item label="开始日期">
                    <el-date-picker
                      type="date"
                      placeholder="开始日期"
                      v-model="newWorkExperience.beginDate"
                      value-format="yyyy-MM-dd"
                      :picker-options="pickerOptions"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="结束日期">
                    <el-date-picker
                      type="date"
                      placeholder="结束日期"
                      v-model="newWorkExperience.endDate"
                      value-format="yyyy-MM-dd"
                      :picker-options="pickerOptions"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label="详情描述">
                    <el-input type="textarea" v-model="newWorkExperience.detail"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <!--工作经历 列表展示-->
          <div
            style="padding:5px;border-bottom:1px solid black;margin-bottom:10px;"
            v-for="item in candidateInfo.workExperience"
            :key="item.companyChineseName"
          >
            <el-row>
              <el-col :span="2">
                <span>公司中文名称</span>
              </el-col>
              <el-col :span="4">
                <span>{{item.companyChineseName}}</span>
              </el-col>
              <el-col :span="2">
                <span>公司中文简称</span>
              </el-col>
              <el-col :span="4">
                <span>{{item.companyChineseSimpleName}}</span>
              </el-col>
              <el-col :span="2">
                <span>公司英文名称</span>
              </el-col>
              <el-col :span="4">
                <span>{{item.companyEnglishName}}</span>
              </el-col>
              <el-col :span="2">
                <span>公司英文简称</span>
              </el-col>
              <el-col :span="4">
                <span>{{item.companyEnglishSimpleName}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="2">
                <span>职位中文名称</span>
              </el-col>
              <el-col :span="4">
                <span>{{item.titleChineseName}}</span>
              </el-col>
              <el-col :span="2">
                <span>职位英文名称</span>
              </el-col>
              <el-col :span="4">
                <span>{{item.titleEnglishName}}</span>
              </el-col>
              <el-col :span="2">
                <span>总薪资</span>
              </el-col>
              <el-col :span="4">
                <span>{{item.totalPackage}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="2">
                <span>开始日期</span>
              </el-col>
              <el-col :span="4">
                <span>{{item.beginDate}}</span>
              </el-col>
              <el-col :span="2">
                <span>结束日期</span>
              </el-col>
              <el-col :span="4">
                <span>{{item.endDate}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="2">
                <span>详情描述</span>
              </el-col>
              <el-col :span="22">
                <span>{{item.detail}}</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div>
        <p style="border-bottom:#409EFF solid 2px;font-size:20px;color:#409EFF;">顾问描述：</p>
        <div style="padding-left:20px;">
          <div v-for="item in candidateInfo.headhunterDescription" :key="item.head">
            <span>{{item.head}}：</span>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{{item.body}}</span>
          </div>
          <el-row>
            <el-col :span="2">
              <el-button type="primary" size="mini" @click="submitNewDescription">暂存</el-button>
            </el-col>
            <el-col :span="22">
              <el-input type="textarea" v-model="new_description"></el-input>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./candidateInfo.js"></script>
