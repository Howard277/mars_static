import vue from 'vue'
import {
  DateTimeUtil,
  DatePickerOptions
} from '@/utils/DateTimeUtil.js'
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
        'head': realName + ' ',
        'body': this.new_description,
        'time': DateTimeUtil.getDateTimeStr(new Date())
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
      if (typeof (this.candidateInfo.id) !== 'undefined' && this.candidateInfo.id.length > 0) {
        // 已经存在id编号，就进行更新
        let temp = {}
        Object.assign(temp, this.candidateInfo)
        delete temp.id
        let res = await es.putCandidateInfo(this.candidateInfo.id, temp)
        if (res.result === 'updated') {
          this.$message({type: 'success', message: '更新成功！'})
        } else {
          this.$message.error('更新失败！')
        }
      } else {
        // 不存在id编号的就进行创建
        let res = await es.postCandidateInfo(this.candidateInfo)
        if (res.result === 'created') {
          this.candidateInfo.id = res._id
          this.$message({type: 'success', message: '创建成功！'})
        } else {
          this.$message.error('创建失败！')
        }
      }
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
  async created () {
    let id = this.$route.params.id
    if (typeof (id) !== 'undefined') {
      let res = await es.getCandidateInfoById(id)
      debugger
      Object.assign(this.candidateInfo, res._source)
      this.candidateInfo.id = res._id
    }
  }
}
