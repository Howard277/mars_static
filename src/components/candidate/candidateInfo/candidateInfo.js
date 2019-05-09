import vue from 'vue'
import {DateTimeUtil, DatePickerOptions} from '@/utils/DateTimeUtil.js'
import MoneyUtil from '@/utils/MoneyUtil.js'
import es from '@/api/es.js'

export default {
  data () {
    return {
      new_description: '', // 新增描述
      showNewWorkExperience: false, // 显示新工作经验
      newWorkExperience: { // 新工作经验
        companyChineseName: '', // 公司中文名称
        companyChineseSimpleName: '', // 公司中文简称
        companyEnglishName: '', // 公司英文名称
        companyEnglishSimpleName: '', // 公司英文简称
        titleChineseName: '', // 职位中文名称
        titleEnglishName: '', // 职位英文名称
        totalPackage: '', // 总薪资
        beginDate: '', // 开始日期
        endDate: '', // 结束日期
        detail: '' // 细节
      },
      candidateInfo: {
        id: '',
        chinese_name: '',
        english_name: '',
        phone_no: '',
        birthday: '',
        sex: 'male',
        marry_status: 'single',
        live_city: '', // 居住城市
        package_detail: '', // 薪资细节
        total_package: '', // 总薪资
        workExperience: [], // 工作经验
        headhunterDescription: [] // 描述信息
      },
      pickerOptions: DatePickerOptions // 日期控件快捷键
    }
  },
  methods: {
    // 提交一个新描述
    submitNewDescription () {
      if (this.new_description.length === 0) {
        this.$message('请输入新描述！')
        return
      }
      let loginInfo = JSON.parse(window.localStorage['loginInfo'])
      let userInfo = loginInfo['userInfo']
      let realName = userInfo['real_name']
      // 组装描述对象
      let obj = {
        'head': realName + ' ' + DateTimeUtil.getDateTimeStr(new Date()),
        'body': this.new_description
      }
      vue.set(this.candidateInfo.headhunterDescription, this.candidateInfo.headhunterDescription.length, obj)
    },
    // 添加工作经历
    addNewWorkExperience () {
      this.showNewWorkExperience = true
    },
    // 取消新增的工作经历
    cancelNewWorkExperience () {
      this.$confirm('确定要取消新增的工作经历吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 关闭显示
        this.showNewWorkExperience = false
        // 所有属性全部设置为空
        for (let key in this.new_description) {
          this.new_description[key] = ''
        }
        this.$message({
          type: 'success',
          message: '取消成功!'
        })
      }).catch(() => {})
    },
    // 暂存新增的工作经历
    saveNewWorkExperience () {
      let tempWorkExperience = Object.assign({}, this.newWorkExperience)
      vue.set(this.candidateInfo.workExperience, this.candidateInfo.workExperience.length, tempWorkExperience)
    },
    // 保存候选人信息
    async saveCandidate () {
      debugger
      let res = await es.postCandidateInfo(this.candidateInfo)
      console.info(res)
    }
  },
  computed: {
    // 计算总薪资
    getTotalPackage () {
      this.candidateInfo.total_package = MoneyUtil.calcTotalPackage(this.candidateInfo.package_detail)
      return this.candidateInfo.total_package
    },
    // 计算总薪资中文
    getTotalPackageChinese () {
      return (this.candidateInfo.total_package / 10000) + '万'
    }
  },
  created () {}
}
